<style>
  #eventTitle {
    font-size: 1.8em;
    height: 80px;
  }
</style>

<template>
  <v-container fluid fill-height style="position: relative">
    <div class="primary" style="position: absolute; top: -2em; left: -2em; right: -2em; height: 200px;" />

    <v-layout justify-center>
      <v-flex xs12 md8 lg6>
        <form class="text-xs-center" @submit="saveEvent">
          <v-card>
            <v-card-text class="pt-4 pb-2 px-4">
              <v-text-field
                placeholder="Event Title"
                id="eventTitle"
                type="text"
                height="50px"
                prepend-icon="ada"
                v-model="event.title"
                required />

              <v-text-field
                label="Location"
                placeholder="E.g. Diamond Jubilee, Dar Es Salaam"
                id="eventLocation"
                type="text"
                v-model="event.location"
                prepend-icon="location_on"
                required />

              <v-menu
                lazy
                v-model="showEventDatePicker"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  label="Date"
                  v-model="event.date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker @input="showEventDatePicker = false" v-model="event.date" no-title scrollable actions>

                </v-date-picker>
              </v-menu>

              <v-text-field
                label="Signup Link"
                placeholder="Link to google form"
                id="eventlink"
                type="text"
                prepend-icon="link"
                v-model="event.link"
                required />

              <v-textarea
                label="Description"
                placeholder="A few more details about the event"
                id="eventDescription"
                type="text"
                prepend-icon="sort"
                v-model="event.description"
                required
              ></v-textarea>
            </v-card-text>

            <v-card-actions class="pt-0 pb-4 pr-4">
              <v-spacer></v-spacer>
              <v-btn color="primary"
                :disabled="updatingEvent"
                :loading="updatingEvent"
                type="submit">
                Submit Changes
              </v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { format as formatDate } from 'date-fns';
  import { mapState } from 'vuex';

  export default {
    name: 'EditEvent',
    props: {
      eventId: {
        default: null,
        required: true
      }
    },
    mounted(){
      if(!this.events && !this.fetchingEvents){
        this.$store.dispatch('getEvents');
        this.$store.subscribe((mutation, state) => {
          if(mutation.type === 'SET_EVENTS'){
            const event = this.events.find(event => event.id == parseInt(this.eventId));
            let eventDate = formatDate(new Date(event.date), 'YYYY-MM-DD');
            this.event = {...event, date: eventDate};
          }
        });
      }
      else{
        const event = this.events.find(event => event.id == parseInt(this.eventId));
        let eventDate = formatDate(new Date(event.date), 'YYYY-MM-DD');
        this.event = {...event, date: eventDate};
      }
    },
    data () {
      return {
        event: () => {
          return {
            event: {},
            menu: false
          }
        },
        showEventDatePicker: false
      }
    },
    computed: {
      ...mapState(['events', 'fetchingEvents', 'updatingEvent'])
    },
    methods: {
      close(){
        this.$router.back();
      },
      saveEvent(e){
        e.preventDefault();
        this.$store.dispatch('editEvent', {...this.event, date: new Date(this.event.date)});
      }
    }
  }
</script>

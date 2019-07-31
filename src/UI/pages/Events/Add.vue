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
                :disabled="creatingEvent"
                :loading="creatingEvent"
                type="submit">
                Create Event
              </v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'AddEvent',
    data () {
      return {
        event: () => {
          return {
            title: "",
            description: "",
            location: "",
            link: "",
            date: null,
            menu: false
          }
        },
        showEventDatePicker: false
      }
    },
    computed: {
      ...mapState(['creatingEvent'])
    },
    methods: {
      close(){
        this.$router.back();
      },
      saveEvent(e){
        e.preventDefault();
        this.$store.dispatch('createEvent', {...this.event, date: new Date(this.event.date)});
      }
    },
    components: {

    }
  }
</script>

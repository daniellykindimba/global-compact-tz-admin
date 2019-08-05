<template>
  <div class="home">
    <v-btn depressed color="accent" class="mr-0 black--text"
      to="/events/add">
      <v-icon left size="20">add</v-icon>
      Add Event
      &nbsp;
    </v-btn>

    <Loader v-if="fetchingEvents" />

    <v-card v-else-if="!events" class="mt-2 mx-2 d-inline-flex" flat color="red lighten-3">
      <v-card-text class="subheading">
        <v-icon left>error</v-icon>
        Failed to fetch events
      </v-card-text>
    </v-card>

    <v-card v-else-if="!events.length" class="mt-2 mx-2 d-inline-flex" flat color="orange lighten-3">
      <v-card-text class="subheading">
        <v-icon left>warning</v-icon>
        No events found.
      </v-card-text>
    </v-card>

    <template v-else>
      <v-layout wrap class="pt-3">
        <v-flex xs12 md6 pa-3
          v-for="event in events" :key="event.id">
          <v-card>
            <v-card-text class="text-left px-4 pt-4 pb-3">
              <h5 class="headline mt-2 mb-1">
                {{ event.title }}
              </h5>
              <p class="subheading grey--text text--darken-2 mt-2">
                <v-layout align-center class="mt-3">
                  <v-icon size="16" left>location_on</v-icon> {{ event.location }} <br />
                </v-layout>
                <v-layout align-center class="mt-2">
                  <v-icon size="16" left>event</v-icon>
                  {{ getFormattedDate(event.date) }} <br />
                </v-layout>
                <v-layout align-center class="mt-2">
                  <v-icon size="16" left>link</v-icon>
                  <a :href="event.link" target="_blank">
                    Link to Google form
                  </a>
                </v-layout>
              </p>
              <v-layout align-start>
                <v-icon size="16" left>sort</v-icon>
                <span style="margin-top: -0.3em">
                  {{ event.description }}
                </span>
              </v-layout>
            </v-card-text>

            <v-card-actions class="pb-4">
              <v-spacer></v-spacer>
              <v-btn :to="`/events/${event.id}/edit`" flat color="grey darken-2">
                <v-icon left size="18">edit</v-icon>
                Edit Event
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { format as formatDate } from 'date-fns';

export default {
  name: 'Events',
  mounted(){
    if(!this.events && !this.fetchingEvents)
      this.$store.dispatch('getEvents');
  },
  computed: {
    ...mapState(['events', 'fetchingEvents'])
  },
  methods: {
    getFormattedDate(date){
      return formatDate(new Date(date), 'Do MMMM YYYY');
    }
  }
}
</script>

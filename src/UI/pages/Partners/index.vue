<style scoped>
  .image-picker{
    cursor: default;
  }

  .partner-item {
    font-size: 1.35em;
    line-height: 1.4em;
    text-align: center;
    letter-spacing: 0.04em;
    padding: 0 1em;
    margin-bottom: 1em;
    position: relative;
  }

  .partner-item img{
    max-width: 100%;
    height: 130px;
    object-fit: contain;
    margin-bottom: 1.5em;
  }
</style>

<template>
  <div class="home">
    <Loader v-if="fetchingPartners" />

    <v-card v-else-if="!partners" class="mt-2 mx-2 d-inline-flex" flat color="red lighten-3">
      <v-card-text class="subheading">
        <v-icon left>error</v-icon>
        Failed to fetch partners
      </v-card-text>
    </v-card>


    <v-card v-else-if="!partners.length" class="mt-2 mx-2 d-inline-flex" flat color="orange lighten-3">
      <v-card-text class="subheading">
        <v-icon left>warning</v-icon>
        No partners found.
      </v-card-text>
    </v-card>

    <template v-else>
      <v-container grid-list-md text-xs-center px-0>
        <v-layout row wrap>
          <template v-for="partner in partners">
            <v-flex xs6 sm4 md3 pa-3 :key="partner.id">
              <v-layout fill-height column class="partner-item">
                <v-flex grow>
                  <v-layout align-center justify-center
                    class="image">
                    <img :src="partner.logo" alt="">
                  </v-layout>
                </v-flex>
                <h3 class="title ml-2">{{partner.name}}</h3>
                <v-btn flat color="grey" class="mr-0"
                  :to="`partners/edit/${partner.id}`">
                  <v-icon left size="20">edit</v-icon>
                  Edit
                </v-btn>
              </v-layout>
            </v-flex>
          </template>
        </v-layout>
      </v-container>

      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Partners',
  mounted(){
    if(!this.partners && !this.fetchingPartners)
      this.$store.dispatch('getPartners');
  },
  computed: {
    ...mapState(['partners', 'fetchingPartners'])
  }
}
</script>

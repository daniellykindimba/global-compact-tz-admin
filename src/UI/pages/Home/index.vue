<style scoped>
  .image-picker{
    cursor: default;
  }
</style>

<template>
  <div class="home">
    <h1 class="mb-0 ml-2">Slideshow Images</h1>

    <Loader v-if="fetchingSlideshowItems" />

    <v-card v-else-if="!slideshowItems" class="mt-2 mx-2 d-inline-flex" flat color="red lighten-3">
      <v-card-text class="subheading">
        <v-icon left>error</v-icon>
        Failed to fetch slideshow items.
      </v-card-text>
    </v-card>


    <v-card v-else-if="!slideshowItems.length" class="mt-2 mx-2 d-inline-flex" flat color="orange lighten-3">
      <v-card-text class="subheading">
        <v-icon left>warning</v-icon>
        No slideshow items found.
      </v-card-text>
    </v-card>


    <template v-else>
      <v-container grid-list-md text-xs-center px-0>
        <v-layout row wrap>
          <template v-for="(item, index) in slideshowItems">
            <v-flex xs6 pa-3 :key="item.id">
              <v-card>
                <v-card-title primary-title class="pt-2 pb-2">
                  <v-layout align-center justify-space-between>
                    <h3 class="title ml-2">Slideshow Item {{index + 1}}</h3>
                    <v-btn flat color="grey" class="mr-0"
                      :to="`home/editSlideshowItem/${item.id}`">
                      <v-icon left size="20">edit</v-icon>
                      Edit
                    </v-btn>
                  </v-layout>
                </v-card-title>

                <label v-if="!item.image" class="image-picker">
                  <span>No image set</span>
                </label>
                <v-img v-else style="height: 200px" :src="item.image"></v-img>

                <v-card-text class="text-left pb-1">
                  <p>{{ item.text || 'No text set' }}</p>
                </v-card-text>
              </v-card>
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
  name: 'Home',
  mounted(){
    if(!this.slideshowItems && !this.fetchingSlideshowItems)
      this.$store.dispatch('getSlideshowItems');
  },
  computed: {
    ...mapState(['slideshowItems', 'fetchingSlideshowItems', 'updatingSlideshowItem'])
  }
}
</script>

<template>
  <div class="home">
    <h1 class="mb-0 ml-2">Slideshow Images</h1>

    <v-container grid-list-md text-xs-center px-0>
      <v-layout row wrap>
        <template v-for="(item, index) in slideshowItems">
          <v-flex xs6 pa-3 :key="item.id">
            <v-card>
              <v-card-title primary-title class="pt-2 pb-2">
                <v-layout align-center justify-space-between>
                  <h3 class="title ml-2">Banner {{index + 1}}</h3>
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
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  data(){
    return {

    }
  },
  computed: {
    ...mapState(['slideshowItems', 'updatingSlideshowItem'])
  }
}
</script>

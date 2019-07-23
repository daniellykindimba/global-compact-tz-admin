<template>
  <v-dialog v-model="dialog" persistent width="500">
    <form class="text-xs-center" @submit="saveSlideshowItem">
      <v-card>
        <v-card-title primary-title class="pt-2 pb-2">
          <v-layout align-center justify-space-between>
            <h3 class="title ml-2">Edit Slide</h3>
            <v-btn icon flat color="grey" class="mr-0"
              @click="close">
              <v-icon size="24">close</v-icon>
            </v-btn>
          </v-layout>
        </v-card-title>

        <upload-image v-model="image" />

        <v-card-text class="pb-2">
          <v-text-field
            label="Banner Text"
            id="banner1Text"
            type="text"
            v-model="text"
            required />
        </v-card-text>

        <v-card-actions class="pt-0 pb-3 pr-3">
          <v-spacer></v-spacer>
          <v-btn color="primary"
            :disabled="updatingSlideshowItem"
            :loading="updatingSlideshowItem"
            type="submit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-dialog>
</template>

<script>
  import UploadImage from '@/UI/components/UploadImage';
  import { mapState } from 'vuex';

  export default {
    name: 'EditSlideshowItem',
    props: {
      itemId: {
        default: null,
        required: true
      }
    },
    mounted(){
      const slide = this.slideshowItems.find(s => s.id == parseInt(this.itemId));
      this.image = slide.image;
      this.text = slide.text;
    },
    data () {
      return {
        dialog: this.itemId,
        text: "",
        image: null
      }
    },
    computed: {
      ...mapState(['slideshowItems', 'updatingSlideshowItem'])
    },
    methods: {
      close(){
        this.$router.back();
      },
      saveSlideshowItem(e){
        e.preventDefault();
        const data = {id: parseInt(this.itemId), image: this.image, text: this.text};
        this.$store.dispatch('editSlideshowItem', data);
      }
    },
    components: {
      UploadImage
    }
  }
</script>

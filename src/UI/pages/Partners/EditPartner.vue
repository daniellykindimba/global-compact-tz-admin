<template>
  <v-dialog v-model="dialog" persistent width="350">
    <form class="text-xs-center" @submit="savePartner">
      <v-card>
        <v-card-title primary-title class="pt-2 pb-2">
          <v-layout align-center justify-space-between>
            <h3 class="title ml-2">Edit Partner</h3>
            <v-btn icon flat color="grey" class="mr-0"
              @click="close">
              <v-icon size="24">close</v-icon>
            </v-btn>
          </v-layout>
        </v-card-title>

        <div class="mx-4" style="width: 120px">
          <upload-image height="auto" v-model="logo" />
        </div>

        <v-card-text class="pb-2 px-4">
          <v-text-field
            label="Partner Name"
            id="partnerName"
            type="text"
            v-model="name"
            required />
        </v-card-text>

        <v-card-actions class="pt-0 pb-3 pr-3">
          <v-spacer></v-spacer>
          <v-btn color="primary"
            :disabled="updatingPartner"
            :loading="updatingPartner"
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
    name: 'EditPartner',
    props: {
      partnerId: {
        default: null,
        required: true
      }
    },
    mounted(){
      const slide = this.partners.find(s => s.id == parseInt(this.partnerId));
      this.logo = slide.logo;
      this.name = slide.name;
    },
    data () {
      return {
        dialog: this.partnerId,
        name: "",
        logo: null
      }
    },
    computed: {
      ...mapState(['partners', 'updatingPartner'])
    },
    methods: {
      close(){
        this.$router.back();
      },
      savePartner(e){
        e.preventDefault();
        const data = {id: parseInt(this.partnerId), logo: this.logo, name: this.name};
        this.$store.dispatch('editPartner', data);
      }
    },
    components: {
      UploadImage
    }
  }
</script>

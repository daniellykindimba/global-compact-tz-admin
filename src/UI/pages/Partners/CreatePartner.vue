<template>
  <v-dialog v-model="dialog" persistent width="350">
    <form class="text-xs-center" @submit="savePartner">
      <v-card>
        <v-card-title primary-title class="pt-2 pb-2">
          <v-layout align-center justify-space-between>
            <h3 class="title ml-2">Create Partner</h3>
            <v-btn icon flat color="grey" class="mr-0"
              @click="close">
              <v-icon size="24">close</v-icon>
            </v-btn>
          </v-layout>
        </v-card-title>

        <div class="mx-4" style="width: 130px">
          <upload-image height="120px" v-model="logo" />
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
            :disabled="creatingPartner"
            :loading="creatingPartner"
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
    name: 'CreatePartner',
    data () {
      return {
        dialog: true,
        name: "",
        logo: null
      }
    },
    computed: {
      ...mapState(['creatingPartner'])
    },
    methods: {
      close(){
        this.$router.back();
      },
      savePartner(e){
        e.preventDefault();
        const data = {logo: this.logo, name: this.name};
        this.$store.dispatch('createPartner', data);
      }
    },
    components: {
      UploadImage
    }
  }
</script>

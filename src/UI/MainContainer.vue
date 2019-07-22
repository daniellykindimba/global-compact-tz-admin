<template>
  <v-app>
    <SideBar />
    <v-toolbar app color="primary">
      <v-toolbar-title class="white--text">
        Admin Panel
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        Logout
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import SideBar from './components/SideBar';
import { removeUser } from '../services/auth';

export default {
  name: 'MainContainer',
  components: {
    SideBar
  },
  data () {
    return {
      // nav: nav.items
    }
  },
  computed: {
    // name () {
    //   return this.$route.name
    // },
    // list () {
    //   return this.$route.matched.filter((route) => route.name || route.meta.label )
    // }
  },
  methods: {
    async logout(){
      await removeUser();
      this.$store.dispatch('setAuthUser', null);
      this.$router.replace('/login');
    }
  }
}
</script>

<template>
  <v-app>
    <SideBar />
    <v-toolbar flat app color="primary">
      <v-toolbar-title class="white--text">
        {{ currentPage }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed @click="logout">
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
    currentPage () {
      return this.$route.name
    },
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

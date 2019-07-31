<template>
  <v-app>
    <SideBar />
    <v-toolbar flat app color="primary">
      <v-toolbar-title class="white--text">
        <v-layout align-center>
          <v-btn @click="$router.back()" v-if="currentPageIsDetail" icon>
            <v-icon color="white">arrow_back</v-icon>
          </v-btn>
          &nbsp;
          {{ currentPage }}
        </v-layout>
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
    currentPageIsDetail () {
      return this.$route.meta && this.$route.meta.isDetail
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

<style>

</style>

<template>
  <v-navigation-drawer app>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar separator>
          <v-list-tile-avatar>
            <img styles="width: 40px" src="@/assets/logo.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              Tanzania SDG Portal
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-toolbar>
    <v-divider></v-divider>

    <v-list-tile class="pt-0 mt-3 mb-0">
      <v-list-tile-content>
        <v-list-tile-title class="body-1">
          DATA &amp; STATS
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list dense class="mt-0 pt-0">
      <v-list-tile
        v-for="link in links"
        :key="link.title"
        :to="link.url">
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="subheading">{{ link.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile class="pt-0 mt-3 mb-0">
        <v-list-tile-content>
          <v-list-tile-title class="body-1">
            SITE CONTENT
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile
        v-for="link in cmsLinks"
        :key="link.title"
        :to="link.url">
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title class="subheading">{{ link.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      links: {
        type: Array,
        default: () => [
          {
            title : 'Projects',
            url : '/projects',
            icon: 'dashboard'
          },
          {
            title : 'Organisations',
            url : '/organisations',
            icon: 'supervisor_account'
          }
        ]
      },
      cmsLinks: {
        type: Array,
        default: () => [
          {
            title : 'Home',
            url : '/home',
            icon: 'home'
          },
          {
            title : 'Partners',
            url : '/partners',
            icon: 'bubble_chart'
          },
          {
            title : 'News',
            url : '/news',
            icon: 'record_voice_over'
          },
          {
            title : 'Events',
            url : '/events',
            icon: 'event'
          }
        ]
      }
    }
  }
</script>

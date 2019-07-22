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

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="link in links"
        :key="link.title"
        :to="link.url">
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            Content Management
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="link in cmsLinks"
        :key="link.title"
        :to="link.url">
        <v-list-tile-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
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
            url : '/',
            icon: 'dashboard'
          },
          {
            title : 'Organisations',
            url : '/about',
            icon: 'supervisor_account'
          }
        ]
      },
      cmsLinks: {
        type: Array,
        default: () => [
          {
            title : 'Home',
            url : '/',
            icon: 'home'
          },
          {
            title : 'News & Events',
            url : '/about',
            icon: 'event'
          },
          {
            title : 'Partners',
            url : '/about',
            icon: 'bubble_chart'
          }
        ]
      }
    }
  }
</script>

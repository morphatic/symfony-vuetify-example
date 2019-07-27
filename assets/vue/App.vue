<template>
  <v-app>
    <v-navigation-drawer
      app
      clipped
    >
      <v-list
        dense
        nav
      >
        <v-list-item to="/">
          <v-list-item-avatar>
            <v-icon>{{ icons.home }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-avatar>
            <v-icon>{{ icons.about }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>My Symfony/Vuetify App</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app inset>
      <span class="mx-2">&copy; 2019 Anyone Who Finds This</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mdiHome, mdiInformation } from '@mdi/js'
  export default {
    name: 'App',
    data: () => ({
      icons: {
        about: mdiInformation,
        home: mdiHome
      }
    })
  }
</script>

<style>

</style>

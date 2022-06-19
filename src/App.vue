<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

       <div class="nav mb-3 mx-2 my-2">
        <v-btn
          text
          color="inherit"
          active-class="no-active"
          :key="appTitle"
          class="mx-1" to="/" >
          {{ appTitle }}
        </v-btn>
        <v-btn
          text
          class="mx-1"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          {{ item.title }}
        </v-btn>
      </div> 
      <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return {
      appTitle: 'Stock Exchange',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/'},
          { title: 'About', path: '/about'},
     ]
    }
  },
};
</script>

<style>
.row {
  margin:0 !important;
}
.container {
    max-width: 100vw !important;
}
@media (min-width: 960px){
.container {
    max-width: unset;
}
}
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
/* .router-link-exact-active {
   background-color: white !important;
   cursor: pointer;
 }
 .v-btn--active {
  background-color: white !important;
  opacity: 1 !important;
 } */
</style>
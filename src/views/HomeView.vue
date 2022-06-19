<template>
  <div><v-row>
    <v-col cols="12"
        sm="6">
        <p class="title2 my-3">This Market is for Everyone !</p>
        <v-img src="https://1m8mpy7kpy01urdni2v37jdq-wpengine.netdna-ssl.com/wp-content/themes/interact/assets/diversity-inclusion.svg" />
    </v-col>
    
    <v-col cols="12"
        sm="6">
      <!-- <v-card height="80vh" rounded> -->
    <SignIn class="my-3"/>
    <!-- </v-card> -->
    </v-col>
    </v-row>
  </div>
</template>

<script>
import SignIn from "../components/signin";

export default {
  name: "HomeView",

  components: {
    SignIn,
  },
};
</script>

<style scoped>
.title2 {
  font-size: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>

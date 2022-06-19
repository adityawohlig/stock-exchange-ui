<template>
  <div><v-row>
    <v-col cols="12"
        sm="6">dfgh
    </v-col>
    
    <v-col cols="12"
        sm="6"
      <v-card elevation="3" rounded>
    <SignIn />
    </v-card>
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
div.row {
  width: 100%;
}
</style>

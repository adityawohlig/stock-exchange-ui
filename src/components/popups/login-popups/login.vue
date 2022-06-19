/* eslint-disable vue/multi-word-component-names */
<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="username"
          outlined
          label="Username"
          :error-messages="
            saveClicked ? (username ? '' : 'Username is required') : ''
          "
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          label="Password"
          outlined
          hint="At least 8 characters"
          :error-messages="
            saveClicked ? (password ? '' : 'Password is required') : ''
          "
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-row>
          <v-col cols="6">
            <v-container @click="dialogClose">
              <router-link to="forgot-password" class="orange--text darken-3">
                Forgot Password ?
              </router-link>
            </v-container>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-btn
                class="btn-padding white--text"
                block
                color="#f17504"
                elevation="2"
                @click="saveFormData()"
                >Log In</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <!-- <loader v-if="loading" /> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    saveClicked: false,
    loading: false,
    show1: false,
    username: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || "E-mail must be valid",
    ],
    password: "",
    rules: {
      required: (value) => !!value || "Password is required",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  watch: {
    email() {
      this.saveClicked = false;
    },
    password() {
      this.saveClicked = false;
    },
  },
  methods: {
    dialogClose() {
      this.$emit("closeDialog");
    },
    saveFormData() {
      this.saveClicked = true;
      if (this.valid) {
        let signInFormData = {
          username: this.username,
          password: this.password,
        };
        // this.loading = true
        this.$toaster.success("Log In Successful");
        console.log("formData", signInFormData);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 100vw !important;
}
</style>

<template>
  <div class="login-signup">
                <v-toolbar flat>
                    <v-tabs v-model="tabs" fixed-tabs>
                        <v-tabs-slider color="orange"></v-tabs-slider>
                        <v-tab href="#mobile-tabs-4-1" class="black--text">
                            <div class="title2">LOG IN</div>
                        </v-tab>

                        <v-tab href="#mobile-tabs-4-2" class="black--text">
                            <div class="title2">SIGN UP</div>
                        </v-tab>
                    </v-tabs>
                </v-toolbar>
                <v-tabs-items v-model="tabs">
                    <v-tab-item
                        v-for="i in 2"
                        :key="i"
                        :value="'mobile-tabs-4-' + i"
                    >
                        <v-card flat v-if="i == 1">
                            <login @closeDialog="closeDialog" />
                        </v-card>
                        <v-card flat v-if="i == 2">
                            <signup @closeDialog="closeDialog" />
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
    </div>
   
</template>

<script>
import login from '@/components/popups/login-popups/login.vue'
import signup from '@/components/popups/login-popups/signup.vue'
export default {
  name: "SignIn",
    components: {
        login,
        signup,
    },
    data() {
        return {
            dialog: false,
            tabs: null,
        }
    },
    methods: {
        changeTab(tab) {
            this.tabs = tab
        },
        closeDialog() {
            this.dialog = false
        },
    },
}
</script>

<style scoped>
.login {
    font-family: 'Roboto' !important;
    font-size: 0.9rem !important;
}
/* .title2 {
    font-size: 1.25rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.0125em !important;
    font-family: 'Roboto', sans-serif !important;
} */
</style>

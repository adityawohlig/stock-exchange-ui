import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Vue.config.productionTip = false

Vue.use(Toaster, {timeout: 5000})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

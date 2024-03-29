import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from '@/router'
import store from './store'

import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { dollarFilter, percenterFilter, marketFilter, circulatingSupplyFilter } from './filters'
import VueScrollTo from './plugins/vueScrollTo';

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percenterFilter)
Vue.filter('market', marketFilter)
Vue.filter('supply', circulatingSupplyFilter)

Vue.use(VueAxios, axios, VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

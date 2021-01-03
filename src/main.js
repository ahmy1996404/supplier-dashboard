// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import {store} from './store/store'
import axios from 'axios'
import Aos from "aos";
import "aos/dist/aos.css";
import Notifications from 'vue-notification'
import VueGoogleCharts from 'vue-google-charts'


/*
or for SSR:
import Notifications from 'vue-notification/dist/ssr.js'
*/
import VueImg from 'v-img';

Vue.use(VueImg);
Vue.use(VeeValidate);
Vue.use(Notifications)
import Snotify from 'vue-snotify'; // 1. Import Snotify
// 2. Use Snotify
// You can pass {config, options} as second argument. See the next example or setConfig in [API] section
import 'vue-snotify/styles/material.css'; // or dark.css or simple.css

Vue.use(Snotify)
Vue.use(VueGoogleCharts)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  created(){
    Aos.init();
  },
  el: '#app',
  router,
  store:store,
  components: {
    App
  },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/v1/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

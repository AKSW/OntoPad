// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueIntro from 'vue-introjs'
import 'intro.js/introjs.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueIntro)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

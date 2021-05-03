// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from "@rails/ujs"
// import * as ActiveStorage from "@rails/activestorage"
// import "channels"
//
// Rails.start()
// ActiveStorage.start()

import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import store from '../store'
import router from '../routes'
import Vuetify from 'vuetify'
import axios from "axios"
import VueAxiosPlugin from "./vue-axios"
import App from '../app'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import '../assets/css/application'

// Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueAxiosPlugin, { axios: axios })
Vue.prototype.$axios = axios

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    // store: new Vuex.Store(store),
    router,
    vuetify,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
})

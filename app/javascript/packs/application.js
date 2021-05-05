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

import Vue from 'vue';
import router from './routes';
import store from './store';
import vuetify from './vuetify';
import axios from './axios';
import './vee-validate';
import App from '../app';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import '../assets/css/application';

Vue.prototype.$axios = axios;

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
});

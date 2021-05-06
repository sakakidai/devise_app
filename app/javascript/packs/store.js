import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';
import { pick } from "lodash";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dialog: false,
    flash: false,
    user: null,
    authToken: {},
  },
  getters: {
    user: state => state.user,
    auth: state => state.auth
  },
  mutations: {
    showDialog(state) {
      state.dialog = true
    },
    hideDialog(state) {
      state.dialog = false
    },
    showFlash(state) {
      state.flash = true
    },
    hideFlash(state) {
      state.flash = false
    },
    user (state, value) {
      state.user = value
    },
    auth (state, value) {
      state.auth = value
    },
    updateAuthToken(state, authToken) {
      state.authToken = authToken;
    }
  },
  actions: {
    autoLogin({ commit }) {
      const authToken = JSON.parse(localStorage.getItem("auth"));
      if (!authToken) return;
      commit('updateAuthToken', authToken)
    },
    login({ commit }, user) {
      axios
        .post('/api/v1/auth/sign_in', user)
        .then((response) => {
          const authHeaders = pick(response.headers,'access-token','client','expiry','uid','token-type')
          console.log(authHeaders)
          console.log(JSON.stringify(authHeaders))
          commit('updateAuthToken', authHeaders)
          localStorage.setItem('authToken', JSON.stringify(authHeaders))
          // this.$router.push('/')
          // this.showFlash()
        })
        .catch(error => {
          console.log('error!!')
          console.log(error.response)
          error.response
        });
    },
    showFlash({ commit }) {
      commit('showFlash');
      setTimeout(() => {
        commit('hideFlash')
      }, 2000)
    }
  }
});

export default store;
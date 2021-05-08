import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';
// import { pick } from "lodash";
import router from './routes';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dialog: false,
    flash: false,
    user: null,
    authToken: {
      accessToken: null,
      client: null,
      expiry: null,
      uid: null,
      tokenType: null
    },
  },
  getters: {
    user: state => state.user,
    auth: state => state.auth,
    authToken: state => state.authToken,
    accessToken: state => state.authToken.accessToken
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
    updateAuthToken(state, authToken) {
      state.authToken = authToken;
    }
  },
  actions: {
    autoLogin({ commit }) {
      const authToken = JSON.parse(localStorage.getItem("authToken"));
      if (!authToken) return;
      commit('updateAuthToken', authToken)
    },
    login({ dispatch, commit }, user) {
      axios
        .post('/api/v1/auth/sign_in', user)
        .then((response) => {
          const Headers = response.headers
          const authHeaders = {
            accessToken: Headers['access-token'],
            client: Headers['client'],
            expiry: Headers['expiry'],
            uid: Headers['uid'],
            tokenType: Headers['token-type']
          }
          commit('updateAuthToken', authHeaders)
          localStorage.setItem('authToken', authHeaders)
          router.push('/')
          dispatch('showFlash')
        })
        .catch(error => {
          console.log('error!!')
          console.log(error.response)
          error.response
        });
    },
    logout({ commit } ) {
      commit('updateAuthToken', {});
      localStorage.removeItem('authToken');
      router.push('/login');
    },
    deleteUser({ state, commit }) {
      const authHeaders = state.authToken
      axios
        .delete('/api/v1/auth', {
          headers: {
            'access-token': authHeaders['access-token'],
            'uid': authHeaders['uid'],
            'client': authHeaders['client']
          }
        })
        .then((response) => {
          commit('updateAuthToken', {});
          localStorage.removeItem('authToken');
          router.push('/login');
        })
        .catch(error => {
          console.log('error!!!!');
          console.log(error.response);
          error.response
        });
    },
    showFlash({ commit }) {
      commit('showFlash');
      setTimeout(() => {
        commit('hideFlash')
      }, 2000);
    }
  }
});

export default store;
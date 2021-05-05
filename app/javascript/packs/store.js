import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dialog: false,
    flash: false,
    user: null,
    auth: {},
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
    }
  },
  actions: {
    showFlash({ commit }) {
      commit('showFlash');
      setTimeout(() => {
        commit('hideFlash')
      }, 2000)
    }
  }
});

export default store;
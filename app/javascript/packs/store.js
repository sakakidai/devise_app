import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dialog: false,
  },
  mutations: {
    showDialog(state) {
      state.dialog = true
    },
    hideDialog(state) {
      state.dialog = false
    }
  }
});

export default store;
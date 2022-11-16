import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

const state = {
  user: null,
};

const store = new vuex.Store({
  state,
  getters: {},
  actions: {},
  mutations: {},
});

export default store;

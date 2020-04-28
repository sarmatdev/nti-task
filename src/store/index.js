import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { Math } from 'core-js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: [],
    matches: 0,
    executionTime: 0,
    loading: false,
  },
  mutations: {
    setDB(state, db) {
      state.db = db;
    },
    setMatches(state, matches) {
      state.matches = matches;
      console.log(matches);
    },
    setExecutionTime(state, time) {
      state.executionTime = time;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async loadDB({ commit }) {
      const { data } = await axios.get('http://localhost:3000/strings');
      console.log(data.length);
      commit('setDB', data);
    },
    searchMatches({ state, commit }, query) {
      commit('setLoading', true);
      const start = performance.now();
      // Search algorithm
      const regExp = new RegExp(`^${query}`);
      const matches = [];
      state.db.forEach((el) => {
        const item = el.toString();
        if (item.match(regExp) !== null) {
          matches.push(item.match(regExp));
          commit('setMatches', matches.length);
        }
      });
      commit('setMatches', matches.length);
      commit('setLoading', false);
      const end = performance.now();
      const executionTime = end - start;
      commit('setExecutionTime', executionTime);
    },
  },
  getters: {
    db(state) {
      return state.db;
    },
    dbDepth(state) {
      return state.db.length - 1;
    },
    matches(state) {
      return state.matches;
    },
    executionTime(state) {
      return Math.floor(state.executionTime);
    },
    loading(state) {
      return state.loading;
    },
  },
});

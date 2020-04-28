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
  },
  actions: {
    async loadDB({ commit, state }) {
      if (state.db.length <= 0) {
        const { data } = await axios.get('http://localhost:3000/strings');
        localStorage.setItem('strings', JSON.stringify(data));
        const db = JSON.parse(localStorage.getItem('strings'));
        commit('setDB', db);
      } else {
        const db = JSON.parse(localStorage.getItem('strings'));
        commit('setDB', db);
      }
    },
    loadDB({ commit }) {
      const db = JSON.parse(localStorage.getItem('strings'));
      commit('setDB', db);
    },
    searchMatches({ state, commit }, query) {
      const start = performance.now();
      // Search algorithm
      const regExp = new RegExp(`^${query}`);
      const matches = [];
      state.db.forEach((el) => {
        if (el.toString().match(regExp) !== null) {
          matches.push(el.toString().match(regExp));
          commit('setMatches', matches.length);
        }
      });
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
  },
});

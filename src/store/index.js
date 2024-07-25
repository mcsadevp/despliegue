import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    games: [],
  },
  getters: {
    games: (state) => state.games,
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    incrementar(state, i) {
      state.games[i].stock++;
    },
    disminuir(state, i) {
      state.games[i].stock--;
    },
  },
  actions: {
    async fetchGames({ commit }) {
      try {
        const response = await axios.get("/juegos.json");
        commit("setGames", response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    },
    Incrementar({ commit }, i) {
      commit("incrementar", i);
    },
    Disminuir(context, i) {
      context.commit("disminuir", i);
    },
  },

  modules: {},
});

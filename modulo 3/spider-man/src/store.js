import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "spiderman",
    spiderman: [],
    offset: 0,
    limit: 20,
    url: "https://gateway.marvel.com/v1/public/characters?name=Spider-man&ts=1&apikey=e3e2eed85560ec86d4db7d4987be2e72&hash=c08b0f4229036475c36fb27705bd8349",
    urlComic1: "https://gateway.marvel.com/v1/public/characters/1009610/comics?",
    urlComic2: "&ts=1&apikey=e3e2eed85560ec86d4db7d4987be2e72&hash=c08b0f4229036475c36fb27705bd8349"
    // limit=40&offset=20
  },
  mutations: {
    setSpiderman(state, x) {
      state.spiderman = x;
    }
  },
  actions: {
    getSpiderman(context) {
      fetch(context.state.urlComic1 + "limit=" + context.state.limit + "&offset=" + context.state.offset + context.state.urlComic2)
        .then(res => res.json())
        .then(data => {
          context.commit("setSpiderman", data.data.results)
        });
    },

    nextPage(context) {
      return (context.state.limit + 20, context.state.offset + 20);
    },

    previousPage(context) {
      if (context.state.limit != 0 & context.state.offset != 0) {
        return (context.state.limit - 20, context.state.offset - 20);
      }
    },

  },
  getters: {
    getAllSpiderman(state) {
      return state.spiderman;
    }
  },

});
// developer.marvel.com/v1/public/characters/1009610
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "sergi",
        pokemons: [],
        url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    },
    mutations: {
        setPokemons(state, data) {
            state.pokemons = data;
        }
    },
    actions: {
        getPokemons(context) {
            fetch(context.state.url)
                .then(res => res.json())
                .then(data => {
                    context.commit("setPokemons", data.results)
                });
        }
    },
    getters: {
        getAllPokemons(state) {
            return state.pokemons;
        }
    },

});

import Vue from 'vue'
import Router from 'vue-router'
import Pokemon from "./components/Pokemons.vue"
import Home from "./components/Home.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/pokemons",
            name: "Pokemons",
            component: Pokemon
        }
    ],
    mode: "history"
});
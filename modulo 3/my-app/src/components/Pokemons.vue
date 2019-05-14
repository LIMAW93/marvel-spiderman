<template>
  <v-container>
    <p v-for="pokemon in pokemons" :key="pokemon.name">{{pokemon.name}}</p>
    <v-btn to="/">Go to Home</v-btn>
    <!-- <v-layout row wrap>
      <v-bottom-nav fixed :value="true" color="white">
        <v-btn v-if="id > 1" color="blue" :to="'/pokemon/' + (Number(id) - 1)">
          <span>Previous</span>
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-divider></v-divider>

        <v-btn v-if="id < 151" color="blue" :to="'/pokemon/' + (Number(id) + 1)">
          <span>Next</span>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-layout>-->
  </v-container>
</template>

<script>
export default {
  // data: {
  //   pokemons: [],
  //   url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  // },
  // methods: {
  //   //  https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
  //   async getPokemonData(id) {
  //     fetch(this.url + id)
  //       .then(res => res.json())
  //       .then(data => (this.pokemons = data));
  //   },

  //   beforeRouteUpdate(to, from, next) {
  //     return this.getPokemonInfo(Number(to.params.id)).then(next);
  //   },

  //   created() {
  //     this.getPokemonData(this.id);
  //   }
  // },

  computed: {
    pokemons() {
      return this.$store.getters.getAllPokemons;
    }
  }
};
</script>

<style>
</style>



<template>
  <v-container d-flex align-center justify-center grid-list-md text-xs-center>
    <v-layout row wrap align-center justify-center>
      <v-flex fill-width xs8 offset-xs-2>
        <v-img
          :src="`./tindermon.png`"
          :lazy-src="`./tindermon.png`"
          width="100%"
          position="center center"
        >
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>

      <v-flex class="center" fill-width xs8 offset-xs-2>
        <router-link
          to="/pokemons"
          tag="img"
          class="bola"
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
        ></router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bola {
  height: 50%;
  width: 50%;
}

.bola:hover {
  animation: shake 0.8s infinite cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>

<template>
  <v-content class="black">
    <v-toolbar class="black">
      <!-- icon link -->
      <div class="height100">
        <router-link to="/">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61b00e4d-5c1e-4108-9081-a53867382e10/d6e0cgh-f3d4f929-e4fe-435f-bdc0-537a370723c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxYjAwZTRkLTVjMWUtNDEwOC05MDgxLWE1Mzg2NzM4MmUxMFwvZDZlMGNnaC1mM2Q0ZjkyOS1lNGZlLTQzNWYtYmRjMC01MzdhMzcwNzIzYzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RJkD1ohduI1gNlkvXW6x5iy3_QqUcXMqyW3pa6OPQKw"
            alt="spidermanLogo"
            height="100%"
          >
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <!-- menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-toolbar-side-icon class="spiderColor" v-on="on"></v-toolbar-side-icon>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index">
            <router-link :to="item.path" class="decorationNone">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- main image -->
    <img src="../assets/comicSpider.jpg" alt width="100%">
    <!-- comic -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout fill-height v-for="comic in comic" :key="comic">
            <!-- image -->
            <v-flex>
              <img
                :src="comic.thumbnail.path + '/portrait_uncanny.jpg'"
                alt="comic portrait"
                height="100%"
              >
            </v-flex>
            <!-- description -->
            <v-flex></v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: ["id"],
  data: () => ({
    items: [
      { title: "Comics", path: "/comics" },
      { title: "Movies & Series", path: "" },
      { title: "Videogames", path: "" }
    ],
    url1: "https://gateway.marvel.com:443/v1/public/comics/",
    url2:
      "?ts=1&apikey=e3e2eed85560ec86d4db7d4987be2e72&hash=c08b0f4229036475c36fb27705bd8349",
    comic: []
  }),

  created() {
    this.getOneComic();
  },
  methods: {
    getOneComic() {
      fetch(this.url1 + this.id + this.url2)
        .then(res => res.json())
        .then(data => (this.comic = data.data.results));
    }
  }
};
</script>

<style>
.height100 {
  height: 100%;
}
.spiderColor {
  color: rgb(193, 29, 6) !important;
}

.decorationNone {
  text-decoration: none;
  color: black;
}
</style>

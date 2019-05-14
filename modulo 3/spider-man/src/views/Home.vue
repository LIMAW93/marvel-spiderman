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
          <router-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            class="decorationNone"
          >
            <v-list-tile>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-menu>
    </v-toolbar>
    <!-- main image -->
    <img
      src="http://maxfarrow.files.wordpress.com/2013/01/amazing-spider-man-hd-wallpaper.jpg"
      width="100%"
      alt="webbing spiderman"
    >
    <!-- tab bar -->

    <!-- bio -->
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card class="grey darken-4" dark>
            <v-layout fill-height align-center v-bind="resizeRowToColumn">
              <!-- image -->
              <v-flex class="xs12 md5 mx-2">
                <img
                  :src="require('../assets/spidermanGame.jpg')"
                  alt="spiderman ps4"
                  height="100%"
                  width="100%"
                  contain
                >
              </v-flex>
              <!-- description -->
              <v-flex class="xs12 md7">
                <v-card-title primary-title>
                  <div class="headline mb-3 text-uppercase">Spider-man</div>
                  <div>
                    <p
                      class="font-italic font-weight-light"
                    >Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.</p>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end bio -->

    <!-- end content -->
  </v-content>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Comics", path: "./comics" },
      { title: "Movies & Series", path: "" },
      { title: "Videogames", path: "" }
    ]
  }),
  computed: {
    resizeRowToColumn() {
      let resize = {};

      if (this.$vuetify.breakpoint.smAndDown) {
        resize.column = true;
        resize.reverse = true;
      }

      return resize;
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

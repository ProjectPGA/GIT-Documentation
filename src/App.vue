<template>
  <v-app>
    <navbar-layout />
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavbarLayout from "@/components/NavBar/NavbarLayout.vue";

@Component({
  name: "App",
  components: {
    NavbarLayout,
  },
})
export default class App extends Vue {}
</script>

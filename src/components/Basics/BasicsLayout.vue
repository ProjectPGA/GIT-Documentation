<template>
  <v-sheet rounded="lg" class="text">
    <h1>Git Basics</h1>
    <p>
      In this section, we're going to explain the basic commands to work with
      Git in any project.
    </p>
    <h2>Git Config</h2>
    <p>
      The first thing you'll need to do when installing Git is set your username
      and email address. This is important because Git commits use this
      information, and it is immutable in the commits you send:
    </p>
    <v-badge left overlap bordered icon="mdi-console-line" color="#f05033">
      <v-card outlined class="styled-card">
        <v-card-text class="styled-card_text">
          git config --global user.name "Name" <br />
          git config --global user.email email@example.com
        </v-card-text>
      </v-card>
      <v-btn fab class="styled-card_btn" elevation="0">
        <v-icon>mdi-content-copy</v-icon>
      </v-btn>
    </v-badge>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "BasicsLayout",
  components: {},
})
export default class BasicsLayout extends Vue {}
</script>

<style scoped>
.text {
  padding: 40px 50px;
}

.styled-card {
  border: 2px solid #f05033;
  min-width: 300px;
}

.styled-card_text {
  font-weight: bold;
}

.styled-card_btn {
  position: absolute;
  right: -6.5%;
  bottom: 16%;
  border: 2px solid #f05033;
  color: #f05033;
}
</style>

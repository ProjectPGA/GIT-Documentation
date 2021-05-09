<template>
  <div>
    <v-app-bar app clipped-left height="70vh">
      <v-spacer />
      <v-app-title class="navbar-title">OpenSlot Studio</v-app-title>
      <v-avatar>
        <img src="../../assets/git.svg" alt="Git Logo" />
      </v-avatar>
      <v-app-title class="navbar-title">Git Documentation</v-app-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer app clipped class="navigation-drawer">
      <v-list nav>
        <v-list-item-group active-class="actived-list-item">
          <v-list-item to="/">
            <v-list-item-content>
              <v-list-item-title>Description</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/git-basics">
            <v-list-item-content>
              <v-list-item-title>Git Basics</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/git-workflow">
            <v-list-item-content>
              <v-list-item-title>Git Workflow</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="git-rules">
            <v-list-item-content>
              <v-list-item-title>Git Rules</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "NavbarLayout",
})
export default class NavbarLayout extends Vue {}
</script>

<style lang="scss" scoped>
.navbar-title {
  margin: 0 15px;
  font-size: 30px;
}

.actived-list-item {
  color: #ffffff !important;
  font-weight: bold;
  background: #f05033;
  letter-spacing: 1px;
}

.navigation-drawer {
  padding-top: 5px;
}
</style>

<template>
  <div>
    <!-- Navbar -->
    <v-app-bar app clipped-left height="70vh">
      <v-app-bar-nav-icon
        class="hamburger-icon"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer />
      <v-app-title class="navbar-title">OpenSlot Studio</v-app-title>
      <v-avatar>
        <img src="../../assets/git.svg" alt="Git Logo" />
      </v-avatar>
      <v-app-title class="navbar-title">Git Documentation</v-app-title>
      <v-spacer />
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app clipped class="navigation-drawer">
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
export default class NavbarLayout extends Vue {
  private drawer: boolean = false;
}
</script>

<style lang="scss" scoped>
.navbar-title {
  margin: 0 0.938rem;
  font-size: 1.875rem;
}

.actived-list-item {
  color: #ffffff !important;
  font-weight: bold;
  background: #f05033;
  letter-spacing: 0.063rem;
}

.navigation-drawer {
  padding-top: 0.313rem;
}
</style>

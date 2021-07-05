<template>
  <v-sheet rounded="lg" class="text" min-height="90vh">
    <h1>What's Git?</h1>
    <p>
      Git is a free and open source distributed version control system designed
      to handle everything from small to very large projects with speed and
      efficiency. <br />This is huge definition for Git, lets analyze:<br />
    </p>
    <list-component
      title="Control System:"
      text="Git is used to store content, basically, code due to the
                    other features it provides."
    />
    <list-component
      title="Version Control System:"
      text="The code which is stored in Git keeps changing as more code
                    is added. So,the Version Control System helps in handling
                    this by maintaining a history of what changes have happened."
    />
    <list-component
      title="Distributed Version Control System:"
      text="Git has a remote repository which is stored in a server and
                    a local repository which is stored in the computer of each
                    developer."
    />
    <h1>Why Git?</h1>
    <list-component text="Speed" icon="mdi-speedometer" />
    <list-component text="Merge Conflicts" icon="mdi-source-merge" />
    <list-component text="Cheap Branches" icon="mdi-source-branch" />
    <list-component text="Ease to roll back" icon="mdi-skip-backward" />
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ListComponent from "@/components/common/ListComponent.vue";

@Component({
  name: "DescriptionLayout",
  components: {
    ListComponent,
  },
})
export default class DescriptionLayout extends Vue {}
</script>

<style lang="scss" scoped>
.text {
  padding: 2.5rem 3.125rem;
}
</style>

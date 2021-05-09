<template>
  <v-sheet rounded="lg" class="text">
    <h1>Git Workflow</h1>
    <p>
      The Git Flow is the most known workflow, it was created by
      <a
        href="https://nvie.com/posts/a-successful-git-branching-model/"
        target="_blank"
        class="orange-color"
      >
        Vincent Driessen
      </a>
      in 2010 and it's based in two main branches:
    </p>
    <list-component
      title="Master"
      text="This branch contains production code. All development code is merged into master in sometime."
    />
    <list-component
      title="Develop"
      text="This branch contains pre-production code. When the features are finished then they are merged into develop."
    />
    <p>
      During the development cycle, a variety of supporting branches are used:
    </p>
    <list-component
      title="Feature"
      text="Feature branches are used to develop new features for the upcoming releases. May branch off from develop and must merge into develop."
    />
    <list-component
      title="Hotfix"
      text="Hotfix branches are necessary to act immediately upon an undesired status of master. May branch off from master and must merge into master anddevelop."
    />
    <list-component
      title="Release"
      text="Release branches support preparation of a new production release. They allow many minor bug to be fixed and preparation of meta-data for a release. May branch off from develop and must merge into master anddevelop."
    />

    <h2>Feature Branches</h2>
    <h3 class="margin-title">
      <v-icon class="orange-color">mdi-chevron-right</v-icon> Create a branch
    </h3>
    <p>
      When you're working on a project, you're going to have a bunch of
      different features or ideas in progress at any given time – some of which
      are ready to go, and others which are not. Branching exists to help you
      manage this workflow.
    </p>
    <p>
      When you create a branch in your project, you're creating an environment
      where you can try out new ideas. Changes you make on a branch don't affect
      the main branch, so you're free to experiment and commit changes, safe in
      the knowledge that your branch won't be merged until it's ready to be
      reviewed by someone you're collaborating with.
    </p>
    <v-row justify="center">
      <image-require
        urlImage="workflow/workflow-image1.svg"
        altImage="Create a branch"
      />
    </v-row>
    <h3 class="margin-title">
      <v-icon class="orange-color">mdi-chevron-right</v-icon> Add commits
    </h3>
    <p>
      Once your branch has been created, it's time to start making changes.
      Whenever you add, edit, or delete a file, you're making a commit, and
      adding them to your branch. This process of adding commits keeps track of
      your progress as you work on a feature branch.
    </p>
    <p>
      Commits also create a transparent history of your work that others can
      follow to understand what you've done and why. Each commit has an
      associated commit message, which is a description explaining why a
      particular change was made. Furthermore, each commit is considered a
      separate unit of change. This lets you roll back changes if a bug is
      found, or if you decide to head in a different direction.
    </p>
    <v-row justify="center">
      <image-require
        urlImage="workflow/workflow-image2.svg"
        altImage="Add commits"
      />
    </v-row>
    <h3 class="margin-title">
      <v-icon class="orange-color">mdi-chevron-right</v-icon> Open a Pull
      Request
    </h3>
    <p>
      Pull Requests initiate discussion about your commits. Because they're
      tightly integrated with the underlying Git repository, anyone can see
      exactly what changes would be merged if they accept your request.
    </p>
    <p>
      You can open a Pull Request at any point during the development process:
      when you have little or no code but want to share some screenshots or
      general ideas, when you're stuck and need help or advice, or when you're
      ready for someone to review your work. By using GitHub's @mention system
      in your Pull Request message, you can ask for feedback from specific
      people or teams, whether they're down the hall or ten time zones away.
    </p>
    <v-row justify="center">
      <image-require
        urlImage="workflow/workflow-image3.svg"
        altImage="Open a Pull Request"
      />
    </v-row>
    <h3 class="margin-title">
      <v-icon class="orange-color">mdi-chevron-right</v-icon> Discuss and review
      your code
    </h3>
    <p>
      Once a Pull Request has been opened, the person or team reviewing your
      changes may have questions or comments. Perhaps the coding style doesn't
      match project guidelines, the change is missing unit tests, or maybe
      everything looks great and props are in order. Pull Requests are designed
      to encourage and capture this type of conversation.
    </p>
    <p>
      You can also continue to push to your branch in light of discussion and
      feedback about your commits. If someone comments that you forgot to do
      something or if there is a bug in the code, you can fix it in your branch
      and push up the change. GitHub will show your new commits and any
      additional feedback you may receive in the unified Pull Request view.
    </p>
    <v-row justify="center">
      <image-require
        urlImage="workflow/workflow-image4.svg"
        altImage="Discuss and review your code"
      />
    </v-row>
    <h3 class="margin-title">
      <v-icon class="orange-color">mdi-chevron-right</v-icon> Deploy
    </h3>
    <p>
      With GitHub, you can deploy from a branch for final testing in production
      before merging to main.
    </p>
    <p>
      Once your pull request has been reviewed and the branch passes your tests,
      you can deploy your changes to verify them in production. If your branch
      causes issues, you can roll it back by deploying the existing main branch
      into production.
    </p>
    <p>
      Different teams may have different deployment strategies. For some, it may
      be best to deploy to a specially provisioned testing environment. For
      others, deploying directly to production may be the better choice based on
      the other elements in their workflow.
    </p>
    <v-row justify="center">
      <image-require
        urlImage="workflow/workflow-image5.svg"
        altImage="Deploy"
      />
    </v-row>
    <h3 class="margin-title">
      <v-icon class="orange-color">mdi-chevron-right</v-icon> Merge
    </h3>
    <p>
      Now that your changes have been verified in production, it is time to
      merge your code into the main branch.
    </p>
    <p>
      Once merged, Pull Requests preserve a record of the historical changes to
      your code. Because they're searchable, they let anyone go back in time to
      understand why and how a decision was made.
    </p>
    <v-row justify="center">
      <image-require urlImage="workflow/workflow-image6.svg" altImage="Merge" />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ListComponent from "@/components/common/ListComponent.vue";
import ImageRequire from "@/components/common/ImageRequire.vue";

@Component({
  name: "WorkflowLayout",
  components: {
    ListComponent,
    ImageRequire,
  },
})
export default class WorkflowLayout extends Vue {}
</script>

<style lang="scss" scoped>
.text {
  padding: 40px 50px;
}

.orange-color {
  color: #f05033;
}

.margin-title {
  margin-top: 20px;
}
</style>

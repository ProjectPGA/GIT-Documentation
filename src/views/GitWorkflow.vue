<template>
  <workflow-layout />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import WorkflowLayout from "@/components/Workflow/WorkflowLayout.vue";

@Component({
  name: "GitWorkflow",
  components: {
    WorkflowLayout,
  },
})
export default class GitWorkflow extends Vue {}
</script>

<style lang="scss" scoped></style>

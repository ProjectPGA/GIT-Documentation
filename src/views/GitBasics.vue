<template>
  <basics-layout />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BasicsLayout from "@/components/Basics/BasicsLayout.vue";

@Component({
  name: "GitBasics",
  components: {
    BasicsLayout,
  },
})
export default class GitBasics extends Vue {}
</script>

<style lang="scss" scoped></style>

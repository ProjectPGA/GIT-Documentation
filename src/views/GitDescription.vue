<template>
  <description-layout />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DescriptionLayout from "@/components/Description/DescriptionLayout.vue";

@Component({
  name: "GitDescription",
  components: {
    DescriptionLayout,
  },
})
export default class GitDescription extends Vue {}
</script>

<style lang="scss" scoped></style>

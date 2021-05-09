<template>
  <v-img
    :src="require(`../../assets/${urlImage}`)"
    :alt="altImage"
    max-width="800"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "ImageRequire",
})
export default class ImageRequire extends Vue {
  @Prop(String) private urlImage: string;
  @Prop(String) private altImage: string;
}
</script>

<style scoped></style>

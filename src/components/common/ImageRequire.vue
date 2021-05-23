<template>
  <img
    class="responsive-image"
    :src="require(`../../assets/${urlImage}`)"
    :alt="altImage"
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

<style scoped>
.responsive-image {
  width: 100%;
  height: auto;
  max-width: 800px;
  margin: 10px 0 30px 0;
}
</style>

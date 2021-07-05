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

<style scoped lang="scss">
.responsive-image {
  width: 100%;
  height: auto;
  max-width: 50rem;
  margin: 0.625rem 0 1.875rem 0;
}
</style>

<template>
  <v-list>
    <v-list-item>
      <v-list-icon>
        <v-icon class="icon-list">{{ icon }}</v-icon>
      </v-list-icon>
      <v-list-item-content>
        <v-list-item-title class="title-list">{{ title }}</v-list-item-title>
        {{ text }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "IconListComponent",
})
export default class IconListComponent extends Vue {
  @Prop(String) private title: string;
  @Prop(String) private text: string;
  @Prop(String) private icon: string;
}
</script>

<style scoped lang="scss">
.title-list {
  font-weight: bold;
  color: #f05033;
}

.icon-list {
  color: #f05033;
  margin-right: 0.625rem;
}
</style>

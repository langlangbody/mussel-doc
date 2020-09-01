<template>
  <mu-v-box>
    <mu-h-box size="100%" class="align-content-center justify-center">
      <h1 v-if="title">{{ title }}</h1>
      <h6 v-if="description">{{ description }}</h6>
    </mu-h-box>
  </mu-v-box>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";



@Component
export default class Home extends Vue {
  @Prop()
  private title!: string
  
  @Prop()
  private description!: string

  @Prop()
  private source!: string

}
</script>

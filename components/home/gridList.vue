<template>
  <div class="grid-list m-t-10">
    <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols="5">
      <grid-item :label="item.title" v-for="(item,index) in list" :key="index">
        <img slot="icon" :src="item.url">
      </grid-item>
    </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from "~/components/base/grid";
export default {
  components: {
    Grid,
    GridItem
  },
  props: ["list"]
}
</script>

<style lang="less" scoped>
.grid-list {
  background-color: #fff;
}
</style>

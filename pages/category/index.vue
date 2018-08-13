<template>
    <div class="category-page">
        <!-- <div class="top">顶部</div> -->

        <!-- 分类模块 -->
        <!-- <category :categoryId="paramsId" class="category"></category> -->

    </div>
</template>

<script>

import Category from "~/components/category/category.vue"
export default {
    layout: "tabbar",
    components: { Category },
    asyncData({ route }) {
        return {
            paramsId: route.query["id"]
        }
    },
    watch: {

    },
}
</script>

<style lang="less" scoped>
.category-page {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 53px;
  margin: auto;

  display: flex;
  flex-direction: column;

  .category {
    flex: 1;
  }
}
</style>

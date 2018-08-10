<template>
    <div class="goods-list m-t-10 clearfix">
        <div class="gray-text">
            <span class="gray-layout">为您推荐</span>
        </div>
        <GoodsItem v-for="(item,index) in list" :key="index" :item="item"></GoodsItem>
    </div>
</template>

<script>
import GoodsItem from '~/components/base/goodsItem/index.vue'
export default {
    components: { GoodsItem },
    props: ["list"]
}
</script>

<style lang="less" scoped>
.gray-text {
  position: relative;
  display: -webkit-box;
  margin: 14px 5px;
  color: #848689;
  font-size: 14px;
  -webkit-box-pack: center;
  &::after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #cbcbcb;
    -webkit-transform: scaleY(0.5);
  }
  .gray-layout {
    padding: 0 10px;
    background-color: #f0f2f5;
    z-index: 10;
    position: relative;
    display: block;
  }
}
</style>

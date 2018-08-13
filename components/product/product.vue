<template>
    <div class="product-detail">
        <!-- 顶部导航 -->
        <Xheader class="product-detail-header" headerStyle="margin:0 70px;" :right-options="{showMore:true}">
            <span class="header-tab header-tab-active">商品</span>
            <span class="header-tab">规格</span>
        </Xheader>

        <div class="m-t-header" style="height:10px;background:#fff;"></div>

        <!-- 商品banner -->
        <Swiper :list="list" :loop="true" :auto="true" height="320px" :show-desc-mask="false" :show-dots="false"></Swiper>

        <!-- 商品标题 -->
        <ProductDetailTitle></ProductDetailTitle>

        <!-- 规格选择 -->
        <Ucell class="m-t-10" title="已选：" :borderLine="true" :topLine="true" :isLink="true" @click.native="SkuModuleOpen">
            <span slot="desc">{{skuResultStr}}</span>
        </Ucell>

        <!-- 商品规格参数 -->
        <ProductDetailAttribute class="m-t-10"></ProductDetailAttribute>

        <!-- 商品详情 -->
        <ProductDetail></ProductDetail>

        <!-- 大家都在看 -->
        <LoadMore tip="大家都在看" :showLoading="false"></LoadMore>

        <ProductList></ProductList>

        <!-- footer -->
        <CommonFooterCopyright></CommonFooterCopyright>

        <SkuModule ref="SkuModule" @SkuResult="SkuResult"></SkuModule>
    </div>
</template>
<script>
import { Swiper } from '~/components/base/swiper'
import Xheader from "~/components/base/x-header"
import ProductDetailTitle from "~/components/product/product-detail-title"
import Ucell from '~/components/base/u-cell'
import ProductDetailAttribute from "~/components/product/product-detail-attribute"
import ProductDetail from "~/components/product/product-detail"
import LoadMore from "~/components/base/load-more"
import ProductList from '~/components/product/product-list.vue'
import CommonFooterCopyright from '~/components/base/common-footer/footer-copyright.vue'


import SkuModule from '~/components/product/skuModule/index.vue'
export default {
    components: { Xheader, Swiper, ProductDetailTitle, Ucell, ProductDetailAttribute, ProductDetail, LoadMore, ProductList, CommonFooterCopyright, SkuModule },
    head() { return {} },
    asyncData(context) { },
    data() {
        return {
            skuResultStr:"请选择",
            list: [
                {
                    url: 'javascript:',
                    img: 'http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/2016/06/12/14657340954703.jpg?x-oss-process=image/resize,m_pad,limit_0,h_450,w_450'
                }
            ]
        }
    },
    fetch() { },
    methods: {
        SkuModuleOpen() {
            console.log(this.$refs.SkuModule.open())
        },
        //Sku选择结果
        SkuResult(skuResult){
          this.skuResultStr = "";
          for(let key in skuResult){
            this.skuResultStr += ` ${skuResult[key]}`;
          }
        }
    }
}
</script>
<style lang='less' scoped>
@import "../styles/weui/base/mixin/setOnepx.less";

/* header */
.product-detail-header {
  background: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  &::after {
    .setBottomLine();
  }
}
/* 顶部tab */
.header-tab {
  font-size: 14px;
  margin: 0 5%;
  position: relative;
  display: block;
  height: 80%;
}
.header-tab-active {
  color: red;
  border-bottom: 1px solid red;
}
</style>

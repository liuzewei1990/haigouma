<!--  -->
<template>
    <div class='product-list-page'>
        <ProductListSearch></ProductListSearch>
        <ProductListFilter></ProductListFilter>
        <ProductList></ProductList>
    </div>
</template>

<script>
import ProductListSearch from '~/components/product/product-list-search.vue'
import ProductListFilter from '~/components/product/product-list-filter.vue'
import ProductList from '~/components/product/product-list.vue'
export default {
    components: { ProductListSearch, ProductListFilter, ProductList },
    // props: [],
    layout: "tabbar",
    // asyncData(context) { },//最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
    // fetch() { },//用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据
    // head() { },//配置当前页面的 Meta 标签
    // transition(to, from) { },
    // scrollToTop:false,//布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景
    // validate({ params }) { },//校验方法用于校验 动态路由的参数。
    // middleware:"middleware"//指定页面的中间件，中间件会在页面渲染之前被调用， 请参考 路由中间件。
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.product-list-page {
  margin-top: 86px;
}
</style>

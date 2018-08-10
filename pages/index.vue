<!--  -->
<template>
  <div>
    <Banner :list="imgList"></Banner>
    <GridList :list="gridList"></GridList>
    <GoodList :list="goods"></GoodList>
    <GoodList :list="goods"></GoodList>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '~/components/home/banner'
import GridList from '~/components/home/gridList'
import GoodList from '~/components/home/goodList'
import Footer from '~/components/home/footer'
export default {
  layout: "tabbar",
  components: { Banner, GridList, GoodList, Footer },
  data() {
    return {
      gridList: [
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235251400425.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235251465325.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235248932863.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235249016941.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235249093515.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235248932863.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235251465325.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235249016941.png"
        },

        {
          title: "商家入住",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235251400425.png"
        },
        {
          title: "分类",
          url: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/04/12/15235249093515.png"
        },
      ],
      imgList: [
        {
          url: 'javascript:',
          img: 'http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/08/01/15330938575224.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/08/01/15330938569582.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2018/08/01/15330938568051.jpg',
          title: '送你一朵fua'
        },
      ],
      goods: [
        {
          img: "http://s1.juancdn.com/bao/140305/8/f/53171e5bdfe40_580x380.jpg_290x190.jpg",
          title: "可爱时尚实用迷你照明电筒 【包邮】",
          money: "112.12",
          delMoney: "18"
        },
        {
          img: "http://s1.juancdn.com/bao/140305/8/f/53171e5bdfe40_580x380.jpg_290x190.jpg",
          title: "可爱时尚实用迷你照明电筒 【包邮】",
          money: "112.12",
          delMoney: "18"
        },
        {
          img: "http://s1.juancdn.com/bao/140305/8/f/53171e5bdfe40_580x380.jpg_290x190.jpg",
          title: "可爱时尚实用迷你照明电筒 【包邮】",
          money: "112.12",
          delMoney: "18"
        },
        {
          img: "http://s1.juancdn.com/bao/140305/8/f/53171e5bdfe40_580x380.jpg_290x190.jpg",
          title: "可爱时尚实用迷你照明电筒 【包邮】",
          money: "112.12",
          delMoney: "18"
        },
      ]
    }
  }
  // props: [],
  // layout: "default",
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
</style>
<template>
  <div class="container">
    <nuxt/>

    <Tabbar>
      <TabbarItem :selected="$route.name == 'index'" link="/">
        <img slot="icon" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606409091.png" alt="">
        <img slot="icon-active" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606471922.png" alt="">
        <span slot="label">首页</span>
      </TabbarItem>
      <TabbarItem :selected="$route.name == 'category'" link="/category">
        <img slot="icon" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606409091.png" alt="">
        <img slot="icon-active" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606471922.png" alt="">
        <span slot="label">分类</span>
      </TabbarItem>
      <TabbarItem :selected="$route.name == 'cart'" link="/cart">
        <img slot="icon" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606409091.png" alt="">
        <img slot="icon-active" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606471922.png" alt="">
        <span slot="label">购物车</span>
      </TabbarItem>
      <TabbarItem :selected="$route.name == 'user'" link="/user">
        <img slot="icon" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606409091.png" alt="">
        <img slot="icon-active" width="25px" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/images/2017/03/01/14883606471922.png" alt="">
        <span slot="label">个人中心</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from '~/components/base/tabbar'
export default {
  components: { Tabbar, TabbarItem },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 53px;
}
</style>

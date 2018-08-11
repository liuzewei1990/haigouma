<template>
    <div>
      <!-- 用户信息 -->
      <Header></Header>

      <!-- 用户订单模块 -->
      <UserOrder></UserOrder>

      <br>
      <!-- 用户钱包模块 -->
      <UserMoney></UserMoney>

      <br>
      <!-- 用户工具箱 -->
      <UserTool></UserTool>

      <br>
      <!-- 底部footer -->
      <Footer></Footer>
    </div>
</template>

<script>
import Header from "~/components/user/header.vue"
import UserOrder from "~/components/user/user-order.vue"
import UserMoney from "~/components/user/user-money.vue"
import UserTool from "~/components/user/user-tool.vue"
import Footer from "~/components/user/footer.vue"
export default {
    layout: "tabbar",
    components:{Header,UserOrder,UserMoney,UserTool,Footer}

}
</script>

<style>
</style>

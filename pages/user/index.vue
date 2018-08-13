<template>
    <div>
        <!-- 用户信息 -->
        <!-- <UserHeader></UserHeader> -->

        <!-- 用户订单模块 -->
        <!-- <UserOrder></UserOrder> -->

        <br>
        <!-- 用户钱包模块 -->
        <!-- <UserMoney></UserMoney> -->

        <br>
        <!-- 用户工具箱 -->
        <!-- <UserTool></UserTool> -->

        <br>
        <!-- 底部footer -->
        <!-- <UserFooter></UserFooter> -->
    </div>
</template>

<script>
import UserHeader from "~/components/user/user-header.vue"
import UserOrder from "~/components/user/user-order.vue"
import UserMoney from "~/components/user/user-money.vue"
import UserTool from "~/components/user/user-tool.vue"
import UserFooter from "~/components/user/user-footer.vue"
export default {
    layout: "tabbar",
    components: { UserHeader, UserOrder, UserMoney, UserTool, UserFooter }

}
</script>

<style>
</style>

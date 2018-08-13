<template>
    <div>
        <!-- header头部 -->
        <LoginHeader></LoginHeader>

        <!-- 登录模块 -->
        <UserLogin></UserLogin>

        <!-- 第三方登录 -->
        <WechatLogin></WechatLogin>
    </div>
</template>

<script>

import LoginHeader from "~/components/user/login-header"
import UserLogin from "~/components/user/user-login"
import WechatLogin from "~/components/user/wechat-login"
export default {
    components: { LoginHeader, UserLogin, WechatLogin },

}
</script>

<style lang="less" scoped>
</style>

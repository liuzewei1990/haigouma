<template>
  <div class="user-register">
    <Xheader class="">快速注册<a slot="right" href="javascript:void(0);" @click="$router.push('/login')">登录</a></Xheader>
    <Uinput label="用户名" placeholder="请输入用户名"></Uinput>
    <Uinput label="密码" placeholder="请输入密码" :topLine="true"></Uinput>
    <Uinput label="确认密码" placeholder="确认密码" :topLine="true"></Uinput>
    <Uinput label="手机号" placeholder="请输入手机号" :topLine="true" maxLength="11"></Uinput>
    <Uinput label="验证码" placeholder="请输入验证码" :topLine="true" maxLength="6" width="50%">
      <Xbutton :mini="true" type="warn">获取验证码</Xbutton>
    </Uinput>
    <Xbutton class="btn m-t-20" type="warn">注册</Xbutton>
  </div>
</template>

<script>
import Xheader from "~/components/base/x-header"
import Uinput from "~/components/base/u-input"
import Xbutton from "~/components/base/x-button"
export default {

  components:{ Xheader, Uinput, Xbutton },
}
</script>

<style lang="less" scoped>
  .header{
    background: #f23030;
      color: #FFF;

    a{
      color: #FFF !important;
    }
  }

  .btn{
    width: 95%;
  }
</style>

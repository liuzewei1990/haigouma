<template>
  <div class="find-password">
    <Xheader class="">找回密码</Xheader>
    <Uinput label="手机号" placeholder="请输入手机号" :topLine="true" maxLength="11"></Uinput>
    <Uinput label="验证码" placeholder="请输入验证码" :topLine="true" maxLength="6" width="50%">
      <Xbutton :mini="true" type="warn">获取验证码</Xbutton>
    </Uinput>
    <Uinput label="密码" placeholder="请输入新密码" :topLine="true"></Uinput>
    <Uinput label="确认密码" placeholder="确认新密码" :topLine="true"></Uinput>

    <Xbutton class="btn m-t-20" type="warn">密码重置</Xbutton>
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
  .btn{
    width: 95%;
  }
</style>

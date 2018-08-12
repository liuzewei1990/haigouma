<template>
  <div class="user-login">
    <Uinput label="用户名" v-model="userName" placeholder="请输入用户名/手机号" maxLength="11"></Uinput>
    <Uinput label="密码" placeholder="请输入密码" :topLine="true"></Uinput>
    <RegisterLinks></RegisterLinks>
    <Xbutton class="btn" type="warn">登录</Xbutton>
  </div>
</template>

<script>
import Uinput from "~/components/base/u-input"
import Xbutton from "~/components/base/x-button"
import RegisterLinks from "~/components/user/register-links"
export default {
  components:{ Uinput, RegisterLinks, Xbutton },
  data(){
    return{
      userName:"",
      password:"",
    }
  },
}
</script>

<style lang="less" scoped>
  .btn{
    width: 95%;
    margin: 5px auto;
  }
</style>

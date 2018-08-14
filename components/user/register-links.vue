<template>
    <div class="login-links">
        <a href="/find-password" @click="$router.push('/find-password')">
            <i class="ng-foot-icon icon-clock"></i>
            <span>找回密码</span>
        </a>
        <a href="/register" class="reg-link" @click="$router.push('/register')">
            <i class="ng-foot-icon icon-reg"></i>
            <span>快速注册</span>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login-links {
  width: 94%;
  margin: 20px auto;
  text-align: center;
  display: flex;

  a {
    flex: 1;
    color: #333;
    line-height: 22px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    font-family: PingFang-SC-Regular;
    display: inline-block;
  }
}
</style>

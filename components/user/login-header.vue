<template>
<div class="login-top" style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/system/config/mobile_setting_login/m_login_bgimg_0.png) no-repeat; background-size:cover">
  <Xheader>
    <icon slot="overwrite-left" name="home-login" scale="2" @click.native="$router.push('/')"></icon>
    <a slot="right" style="color:#fff;" href="javascript:void(0);" @click="$router.push('/register')">注册</a>
  </Xheader>
  <div class="login-img">
		<img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/system/config/mobile_setting_login/m_login_logo_0.png">
	</div>
</div>
</template>

<script>
import Xheader from "~/components/base/x-header"
export default {
  components:{ Xheader }
}
</script>

<style lang="less" scoped>
.login-top .login-img {
    height: 70px;
    text-align: center;

    img {
        height: 60px;
        margin-top: -5px;
    }
}
</style>

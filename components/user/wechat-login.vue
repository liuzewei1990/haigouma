<template>
  <div class="footer">
    <LoadMore tip="第三方登录" :showLoading="false"></LoadMore>
    <icon style="margin:0 auto;" name="wechat" scale="5"></icon>
  </div>
</template>

<script>

import LoadMore from "~/components/base/load-more"
export default {

  components:{ LoadMore },
}
</script>

<style lang="less" scoped>
  .footer{
    text-align: center;
  }
</style>

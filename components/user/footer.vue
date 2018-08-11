<template>
      <div class="home-footer">
        <CommonFooterCopyright></CommonFooterCopyright>
    </div>
</template>

<script>
import CommonFooterCopyright from '~/components/base/common-footer/footer-copyright.vue'
export default {
    components: { CommonFooterCopyright },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.home-footer {
  background: #fff;
  padding: 10px 0;
}
</style>

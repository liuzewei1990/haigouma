<!-- 404 500 错误页面 -->
<template>
    <div class='error-page'>
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else>应用发生错误异常</h1>
        <nuxt-link to="/">首 页</nuxt-link>
    </div>
</template>

<script>

export default {
    props: ["error"]
}
</script>
<style lang="less" scoped>
/* //@import url(); 引入公共css类 */
</style>
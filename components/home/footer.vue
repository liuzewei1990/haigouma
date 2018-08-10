<template>
    <div class="home-footer">
        <CommonFooterLinks :links="linkList"></CommonFooterLinks>
        <CommonFooterCopyright></CommonFooterCopyright>
    </div>
</template>

<script>
import CommonFooterLinks from '~/components/base/common-footer/footer-links.vue'
import CommonFooterCopyright from '~/components/base/common-footer/footer-copyright.vue'
export default {
    components: { CommonFooterLinks, CommonFooterCopyright },
    data() {
        return {
            linkList: [
                {
                    name: "登录",
                    link: "",
                    cb() { }
                }, {
                    name: "注册",
                    link: "",
                    cb() { }
                }, {
                    name: "反馈",
                    link: "",
                    cb() { }
                }, {
                    name: "返回顶部",
                    link: "",
                    cb() {
                        alert("返回顶部")
                    }
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.home-footer {
  background: #fff;
  padding: 20px 0;
}
</style>

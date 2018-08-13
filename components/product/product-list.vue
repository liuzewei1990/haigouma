<template>
    <div class="product-list clearfix">
        <GoodsItem v-for="(item,index) in productList" :key="index" :item="item"></GoodsItem>
    </div>
</template>
<script>
import GoodsItem from '~/components/base/goodsItem/index-1.vue'
export default {
    components: { GoodsItem },
    head() { return {} },
    asyncData(context) { },
    data() {
        return {
            productList: [
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "可爱时尚实用迷你照明电筒 【包邮】",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "可爱时尚实用迷你照明电筒 【包邮】",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
                {
                    img: "http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769537148062.jpg?x-oss-process=image/resize,m_pad,limit_0,h_320,w_320/format,webp/quality,q_75",
                    title: "苹果(Apple) iPhone 7 移动联通电信4G手机",
                    money: "112.12",
                    delMoney: "18"
                },
            ]
        }
    },
    fetch() { },
}
</script>
<style lang='less' scoped>
</style>
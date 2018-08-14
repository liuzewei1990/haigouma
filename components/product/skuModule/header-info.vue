<template>
    <div class="header-info">
        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/shop/3/gallery/2016/10/20/14769541009524.jpg?x-oss-process=image/resize,m_pad,limit_0,h_450,w_450">
        <div class="attribute-header-right">
            <span class="goodprice price-color">¥0.01元</span>
            <p>
                <i class="SZY-GOODS-NUMBER">库存：99件</i>
            </p>

            <span class="choose-result-attr SZY-GOODS-SPEC">已选：
                <i class="i_dd">黑色 256G</i>
            </span>
        </div>
        <a class="choose-attribute-close" href="javascript:void();" @click="closeClick" title="关闭">×</a>
    </div>
</template>
<script>
export default {
    components: {},
    head() { return {} },
    asyncData(context) { },
    data() { return {} },
    fetch() { },
    methods: {
        closeClick() {
            this.$emit("closeClick");
        }
    }
}
</script>
<style lang='less' scoped>
@import "../../styles/weui/base/mixin/setOnepx.less";
.header-info {
  height: 100px;
  /* margin-top: 24px; */
  color: #58595b;
  background: #fff;
  position: relative;
  &::after {
    .setBottomLine();
  }

  img {
    width: 90px;
    height: 90px;
    border: #f8f8f8 1px solid;
    border-radius: 4px;
    padding: 5px;
    background: #fff;
    margin-top: -15px;
    margin-left: 15px;
    float: left;
  }

  .attribute-header-right {
    margin-left: 10px;
    margin-top: 15px;
    float: left;
    overflow: hidden;
    width: 60%;
    span {
      display: block;
      width: 100%;
      overflow: hidden;
      color: #666;
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .price-color {
      color: #f23030;
    }
  }

  .choose-attribute-close {
    position: absolute;
    top: -20px !important;
    right: 8px;
    width: 38px;
    height: 38px;
    line-height: 25px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 0px;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    z-index: 9999999;
    opacity: 1;
    border: 0px;
    font-size: 22px;
    color: #000;
    background-image: none;
  }
}
</style>
<template>
    <div class="product-title">
        <div class="goods-info-top">
            <h3 class="SZY-GOODS-NAME">HTC One X9 双卡双待 白色 公开版</h3>

        </div>
        <span class="goods-depict color">5.5英寸，1300万+500万像素，3+32G内存</span>
        <div class="goods-price">
            <div class="now-prices">
                <em class="SZY-GOODS-PRICE price-color">¥2199元</em>
                <del class="SZY-MARKET-PRICE">¥2400元</del>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    head() { return {} },
    asyncData(context) { },
    data() { return {} },
    fetch() { },
}
</script>
<style lang='less' scoped>
.product-title {
  width: 100%;
  overflow: hidden;
  background: #fff;
  padding-top: 0.5rem;
  .goods-info-top {
    width: 95%;
    margin: auto;
    font-weight: normal;
    color: #222;
    line-height: 20px;
    height: 40px;
    display: -webkit-box !important;
    display: box !important;
    position: relative;
    h3 {
      position: relative;
      -webkit-box-flex: 1;
      box-flex: 1;
      height: 40px;
      overflow: hidden;
      font-weight: normal;
      font-size: 0.7rem;
      line-height: 20px;
      color: #222;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
  }

  .goods-depict {
    display: block;
    width: 95%;
    margin: 0.3rem auto;
    line-height: 0.69rem;
    font-size: 12px;
    color: #f23030;
  }

  .goods-price {
    width: 95%;
    margin: 0.2rem auto 0.3rem;
    position: relative;
    color: #f23030;
    .now-prices {
      line-height: 30px;
      font-size: 0.55rem;

      em {
        font-size: 1rem;
        display: inline-block;
        margin-left: 0.2rem;
      }

      del {
        color: #999;
        color: #999;
      }
    }
  }
}
</style>
<template>
    <div class="goods-footer-nav bdr-top">

        <a href="javascript:void(0);" class="nav-button">
            <icon name="collection" style="fill:red;" scale="2.5"></icon>
            <!-- <icon name="collection-active" scale="2.5"></icon> -->
            <p>收藏</p>
        </a>

        <a href="javascript:void(0);" class="nav-button goods-col right collect-goods" data-goods-id="40851">
            <icon name="cart-1" scale="2.5"></icon>
            <p>购物车</p>
            <Badge class="badge" text="1"></Badge>
        </a>

        <dl class="ub-f1 ub">
            <dd class="buy">
                立即购买
            </dd>
            <dd class="cart">
                加入购物车
            </dd>
        </dl>
    </div>
</template>
<script>
import Badge from '~/components/base/badge'
export default {
    components: { Badge },
    head() { return {} },
    asyncData(context) { },
    data() { return {} },
    fetch() { },
}
</script>
<style lang='less' scoped>
@import "../styles/weui/base/mixin/setOnepx.less";
.goods-footer-nav {
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 222;
  left: 0;
  bottom: 0px;
  background-color: rgba(243, 245, 249, 0.9);

  display: flex;
  text-align: center;

  > a {
    width: 18%;
    position: relative;
    padding-top: 5px;
    padding-bottom: 5px;
    box-sizing: content-box;
    &::after {
      .setRightLine();
    }
    p {
      font-size: 12px;
    }

    .badge {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }
  dl {
    flex: 1;
    display: flex;
    dd {
      flex: 1;
      line-height: 50px;
      color: #fff;
    }
  }
  .buy {
    background: #f23030;
  }
  .cart {
    background: #ff9301;
  }
}
</style>
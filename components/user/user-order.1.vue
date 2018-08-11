<template>
  <div class="user-order-box">
    <Ucell title="我的订单" :borderLine="true" :isLink="true"><span slot="desc">查看全部订单</span></Ucell>

    <ul>
        <li>
          <a href="/user/order/list.html?order_status=unpayed">
            <div class="user_order">
              <icon class="" name="order-1" scale="3" ></icon>
              <!-- -->
            </div>
            <span>待付款</span>
          </a>
        </li>
        <li>
          <a href="/user/order/list.html?order_status=unshipped">
            <div class="user_order">
              <icon class="" name="order-2" scale="3"></icon>
              <!-- -->
            </div>
            <span>待发货</span>
          </a>
        </li>
        <li>
          <a href="/user/order/list.html?order_status=shipped">
            <div class="user_order">
              <icon class="" name="order-3" scale="3" ></icon>
              <!-- -->
            </div>
            <span>待收货</span>
          </a>
        </li>
        <li>
          <a href="/user/order/list.html?evaluate_status=unevaluate">
            <div class="user_order">
              <icon class="" name="order-4" scale="3" ></icon>
              <!-- -->
            </div>
            <span>待评价</span>
          </a>
        </li>
        <li>
          <a href="/user/back.html">
            <div class="user_order">
              <icon class="" name="order-5" scale="3" spin></icon>
            </div>
            <span>退款/售后</span>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>

import Ucell from '~/components/base/u-cell'
export default {
  components:{Ucell}
}
</script>

<style lang="less" scoped>
.user-order-box{
  background-color: #fff;
}
.user-order-box ul {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;

    li{
      flex: 1;

      .user_order {
          width: 35px;
          height: 35px;
          margin: auto;
          position: relative;

          .icon {
              display: block;
              margin: auto;
          }
      }

    span {
        display: block;
        width: 100%;
        height: 20px;
        margin: auto;
        line-height: 20px;
        color: #666;
        text-align: center;
    }
    }
}

</style>

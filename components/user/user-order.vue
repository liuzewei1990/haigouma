<template>
  <div class="user-order-box">
    <Ucell title="我的订单" :borderLine="true" :isLink="true"><span slot="desc">查看全部订单</span></Ucell>

    <grid :no-border="true" :cols="5">
      <grid-item label="待付款"><icon class="order-icon" slot="icon" name="order-1" scale="3" ></icon></grid-item>
      <grid-item label="代发货"><icon class="order-icon" slot="icon" name="order-2" scale="3" ></icon></grid-item>
      <grid-item label="待收货"><icon class="order-icon" slot="icon" name="order-3" scale="3" ></icon></grid-item>
      <grid-item label="待评价"><icon class="order-icon" slot="icon" name="order-4" scale="3" ></icon></grid-item>
      <grid-item label="售后"><icon class="order-icon" slot="icon" name="order-5" scale="3" ></icon></grid-item>
    </grid>

  </div>
</template>

<script>

import Ucell from '~/components/base/u-cell'
import { Grid, GridItem } from "~/components/base/grid";
export default {
  components:{Ucell,Grid,GridItem}
}
</script>

<style lang="less" scoped>
.user-order-box{
  background-color: #fff;
  a{
    color: #666;
  }
      // 图标控制
    .order-icon{
      display: block;
      margin:0px auto;
    }
}

</style>

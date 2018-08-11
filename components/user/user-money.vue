<template>
  <div class="user-money">
    <Ucell title="我的钱包" :borderLine="true" :isLink="false"><span slot="desc"></span></Ucell>

    <grid :no-border="true" :cols="4">
      <grid-item label="余额"> <em slot="icon" class="money-icon p-t-10">222元</em> </grid-item>
      <grid-item label="积分"> <em slot="icon" class="money-icon p-t-10">2</em> </grid-item>
      <grid-item label="红包"> <em slot="icon" class="money-icon p-t-10">0</em> </grid-item>
      <grid-item label="付款"> <icon class="tool-icon p-t-10" slot="icon" name="tool-3" scale="2.5" ></icon> </grid-item>
    </grid>
  </div>
</template>

<script>

import Ucell from '~/components/base/u-cell'
import { Grid, GridItem } from "~/components/base/grid";
export default {
  components:{Ucell,Grid,GridItem},

  data(){
    return{

    }
  }
}
</script>


<style lang="less" scoped>

  .user-money{
    background-color: #fff;


    a{
      color: #666;
    }

    .money-icon{
      display: block;
      width: 100%;
      text-align: center;
      color: #f23030;
    }

    // 图标控制
    .tool-icon{
      display: block;
      margin:0px auto;
    }
  }

</style>

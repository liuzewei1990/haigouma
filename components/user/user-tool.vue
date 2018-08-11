<template>
  <div class="user-tool one-1px">

    <Ucell title="我的工具箱" :borderLine="true" :isLink="false"><span slot="desc"></span></Ucell>

    <grid :no-border="true" :cols="4">
      <grid-item label="我的权益"><icon class="tool-icon" slot="icon" name="tool-1" style="color:red;" scale="3" ></icon></grid-item>
      <grid-item label="我的足迹"><icon class="tool-icon" slot="icon" name="tool-2" scale="3" ></icon></grid-item>
      <grid-item label="我的收藏"><icon class="tool-icon" slot="icon" name="tool-3" scale="3" ></icon></grid-item>
      <grid-item label="我的拼团"><icon class="tool-icon" slot="icon" name="tool-4" scale="3" ></icon></grid-item>
    </grid>

    <div class="one-1px one-1px-90 m-t-10"></div>
    <grid :no-border="true" :cols="4">
      <grid-item label="常购清单"><icon class="tool-icon" slot="icon" name="tool-1" scale="3" ></icon></grid-item>
      <grid-item label="我的评价"><icon class="tool-icon" slot="icon" name="tool-2" scale="3" ></icon></grid-item>
      <grid-item label="我的砍价"><icon class="tool-icon" slot="icon" name="tool-3" scale="3" ></icon></grid-item>
      <grid-item label="我的推广"><icon class="tool-icon" slot="icon" name="tool-4" scale="3" ></icon></grid-item>
    </grid>

    <div class="one-1px one-1px-90 m-t-10"></div>
    <grid :no-border="true" :cols="4">
      <grid-item label="常购清单"><icon class="tool-icon" slot="icon" name="tool-1" scale="3" ></icon></grid-item>
      <grid-item label="我的评价"><icon class="tool-icon" slot="icon" name="tool-2" scale="3" ></icon></grid-item>
      <grid-item label="我的砍价"><icon class="tool-icon" slot="icon" name="tool-3" scale="3" ></icon></grid-item>
      <grid-item label="我的推广"><icon class="tool-icon" slot="icon" name="tool-4" scale="3" ></icon></grid-item>
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

  @import "../styles/weui/base/mixin/setOnepx.less";

  .one-1px{
    position: relative;
    &::after{
      .setBottomLine();
    }
  }

  .one-1px-90{
    width: 90%;
    margin: 0 auto;
  }

  .user-tool{
    background-color: #fff;
    padding-bottom: 10px;


    a{
      color: #666;
    }

    // 图标控制
    .tool-icon{
      display: block;
      margin:0px auto;
    }

  }

</style>

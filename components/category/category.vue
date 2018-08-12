<template>
  <div class="category-box">

    <div class="category-left">
      <ul>
        <li :class="{'cur':currCategoryLeftIndex == index}" @click="change(item,index)" v-for="(item,index) in one" :key="index"><span>{{item.name}}</span></li>
      </ul>
    </div>

    <div class="category-right">

      <div class="category-right-content" v-for="(item,index) in one" :key="index" v-show="currCategoryLeftIndex == index">
        <img style="width:100%;" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/05/20/14952646605229.jpg" alt="">
        <!-- 类目总类 -->
        <Ucell class="category-one" :title="`${item.name}`" :borderLine="false" :isLink="true" @click.native="$router.push('/tab')"><span slot="desc">进入</span></Ucell>
        <div class="category-two" v-for="i in 6" :key="i">
          <Ucell class="category-name" :title="`女鞋${i}`" :borderLine="false" :isLink="false"></Ucell>
          <grid class="category-items" :no-border="true" :cols="3">
            <grid-item label="平板电视"><img slot="icon" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/2016/09/05/14730565844608.jpg?x-oss-process=image/format,webp/quality,q_75" alt=""></grid-item>
            <grid-item label="空调"><img slot="icon" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/05/20/14952693879129.jpg?x-oss-process=image/format,webp/quality,q_75" alt=""></grid-item>
            <grid-item label="洗衣机"><img slot="icon" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/05/20/14952695913043.jpg?x-oss-process=image/format,webp/quality,q_75" alt=""></grid-item>
            <grid-item label="洗衣机"><img slot="icon" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/05/20/14952695913043.jpg?x-oss-process=image/format,webp/quality,q_75" alt=""></grid-item>
          </grid>
        </div>
      </div>

      <div v-if="currCategoryLeftIndex > one.length">加载中...</div>
    </div>

  </div>
</template>

<script>

import { Grid, GridItem } from "~/components/base/grid"
import Ucell from "~/components/base/u-cell"
export default {
  components:{ Grid, GridItem,Ucell },
  props:["categoryId"],
  data(){
    let list = [];
    for(let i=0; i<19;i++){
      list.push( {name:"生鲜食品"+i,id:"10000"+i},);
    }



    return{
      one:list,
      currCategoryId:"",
      currCategoryLeftIndex:this.categoryId || 0,
      oLioffsetTopArray:[]
    }
  },

  mounted() {
    window.addEventListener("popstate",()=>{
      console.log(111);
    })

    this.initoLiOffsetTopArray();
  },

  methods:{
    // 遍历所有左侧菜单位置信息
    initoLiOffsetTopArray(){
      let categoryBox = document.querySelector(".category-box");
      let oLis = document.querySelectorAll(".category-left li");
      for(let i = 0; i < oLis.length; i++){
        let oLi = oLis[i];
        let offsetTop = oLi.offsetTop - categoryBox.offsetTop;
        this.oLioffsetTopArray.push(offsetTop);
      }
      this.one.map((item,index)=>{
        if(item.id == this.categoryId){
          this.change({id:this.categoryId},index);
        }
      })

      console.log(this.oLioffsetTopArray)

    },

    //设置滚动条位置


    change(item,index){

      // 改变索引
      this.currCategoryLeftIndex = index;
      this.currCategoryId = item.id;
      console.log(this.currCategoryId)
      //改变左侧滚动条位置
      this.$nextTick(()=>{
        let categoryLeft = document.querySelector(".category-left");
        var next = parseInt(index - 3) <= 0 ? 0 : this.oLioffsetTopArray[parseInt(index - 3)];
        categoryLeft.scrollTop = next;
      })

      //右侧内容区域滚动条置0
      this.$nextTick(()=>{
        let categoryRight = document.querySelector(".category-right");
        categoryRight.scrollTop = 0;
      })

      //改变url参数
      var page_url = location.href;
      page_url = page_url.split('?')[0];
      page_url = page_url + '?id=' + item.id;
      history.pushState({id:item.id}, '', page_url);


      // this.$route.redirect(item.id);

      // this.$router.push(`/category/${item.id}`)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../styles/weui/base/mixin/setOnepx.less";
  .category-box{
    display: flex;
    overflow: hidden;

    .category-left,.category-right{

      overflow-x: hidden;
      overflow-y: auto;

      -webkit-overflow-scrolling: touch;
    }

    .category-left{
      width: 25%;
      // overflow: hidden;

      ul{
        width: 100%;
        overflow: hidden;
        li{
          width: 100%;
          height: 60px;
          line-height: 60px;
          background-color: #fff;
          font-size: 13px;
          text-align: center;
          color: #232326;
          position: relative;

          &::after{
            .setBottomLine();
          }
        }

        .cur{
          background: #f2f2f2;
          color: #ff7878;
        }
      }

    }

    .category-right{
      width: 75%;
      padding-bottom: 20px;

      .category-right-content{
        padding-left: 5px;
        box-sizing: border-box;
        // display: none;
      }

      .category-one{
        background-color: #ff7878;
        color: #FFF;
      }

      .category-name{
        padding: 5px 3%;
        // background: transparent !important;
        .title{
          font-size: 12px !important;
        }
      }

      .category-items{
        background: #FFF;
      }

    }
  }
</style>

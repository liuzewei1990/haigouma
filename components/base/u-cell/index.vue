<template>
  <div class='x-cell' :class="{'border-1px':borderLine}">
    <slot name="icon"></slot>
    <div class='title'>{{title}}</div>
    <div class='desc' :class="{'mr-l':isLink}">{{desc}}</div>
    <slot name="desc"></slot>
    <img v-if="isLink" class='link-icon' src='~/assets/img/icon/user_right.png' alt="">
  </div>
</template>

<script>
export default {
  props:[
    "title",
    "desc",
    "isLink",
    "borderLine",
    "to",
  ]
}
</script>

<style lang="less" scoped>

@import "../../styles/weui/base/mixin/setOnepx.less";
.x-cell{
  position: relative;
  display: flex;
  background-color: #FFF;
  padding: 12px 3%;
  box-sizing: border-box;
  overflow: hidden;
  align-items: center;
}



.title{
  flex: 1.2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  font-size: 16px;
}

.desc{
  font-size: 24px;
  color: #AAA;
  flex: 0.8;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
  text-align: right;
   /* display: table-cell;  */
   /* line-height: 30rpx;  */
  /* vertical-align:middle; */
}

.link-icon{
  width: 10px;
  height: 17px;
  margin-left:3px;
}

.mr-l{
  margin-right: 20px;
}

.border-1px{
  &::after{
    .setBottomLine();
  }
}

</style>

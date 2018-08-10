<template>
  <ul class="common-footer-links">
    <li v-for="(item,index) in links" :key="index">
      <a href="javascript: void(0)" @click="item.cb">{{item.name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["links"]
}
</script>

<style lang="less" scoped>
.common-footer-links {
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  padding: 4.26667vw 5.33333vw;
  list-style: none;
  display: flex;
  li {
    text-align: center;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 5px;
    box-sizing: border-box;

    a {
      position: relative;
      display: block;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #848689;
      // font-size: 3.73333vw;
      padding-top: 3px;
      &::after {
        content: "";
        display: inline-block;
        height: 70%;
        width: 1px;
        background-color: #d7d7d7;
        position: absolute;
        right: 0;
        top: 15%;
      }
    }
  }
  li:last-child {
    a {
      &::after {
        display: none;
      }
    }
  }
}
</style>

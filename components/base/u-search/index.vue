<template>
    <div class="search-box ub">
        <icon name="search" class="submit" scale="2"></icon>
        <input name="keyword" type="text" placeholder="搜索该分类下商品" class="text" value="">
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
.search-box {
  width: 100%;
  margin: 7px auto;
  height: 30px;
  background: #f6f6f6;
  border-radius: 15px;
  position: relative;
  display: flex;
  .text {
    display: block;
    width: 100%;
    -webkit-appearance: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-radius: 0;
    -webkit-rtl-ordering: logical;
    -webkit-user-select: text;
    height: 30px;
    background: none;
    border: 0;
    font-size: 14px;
    line-height: 30px;
    color: #666;
  }
  .submit {
    display: block;
    width: 18px;
    height: 15px;
    // background: url(../images/icon_category.png) no-repeat;
    background-position: -80px 0;
    background-size: 200px;
    margin: 8px 5px 0 10px;
  }
}
</style>
<template>
    <div class="goods-item">
        <a href="#">
            <img :src="item.img" />
        </a>
        <a href="#">
            <div class="title">
                {{item.title}}
            </div>
            <div class="list-price buy">
                <i class="price-new">￥</i>
                <span class="price-new">{{item.money}}</span>
                <i class="del">/￥{{item.delMoney}}</i>
            </div>
            <div class="action">
                <icon name="cart" scale="3"></icon>
            </div>
        </a>
    </div>

</template>

<script>
export default {
    props: ["item"]
}
</script>

<style lang="less" scoped>
/*reset end*/

.ico15 {
  display: inline-block;
  width: 11px;
  height: 11px;
}

.goods-item {
  float: left;
  width: 48.05%;
  position: relative;
  margin: 0.935% 0.935% 1.135%;
  background: rgba(255, 255, 255, 1);
  a {
    display: block;
    position: relative;
    width: 100%;
  }
}

.goods-item img {
  width: 100%;
  position: relative;
  border-radius: 3px 3px 0 0;
}

.goods-item .title {
  height: 38px;
  width: 94.6%;
  font-size: 12px;
  font-weight: 500;
  color: rgba(94, 94, 94, 1);
  padding: 0.7% 2.7%;
}

.list-price {
  width: 94.6%;
  height: 34px;
  line-height: 35px;
  border-top: 1px dotted rgba(252, 226, 198, 1);
  position: relative;
  bottom: 0;
  padding: 0 2.7%;
}

.action {
  padding: 0 2.7%;
  text-align: right;
}

.del {
  text-decoration: line-through;
}

.buy .price-new {
  color: #f23030;
  font-size: 16px;
}

.good-btn {
  display: block;
  position: absolute;
  width: 52px;
  height: 18px;
  line-height: 18px;
  background: rgba(255, 102, 0, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  text-align: right;
  top: 8px;
  right: -2px;
  padding-right: 4px;
  border-radius: 9px 0 0 9px;
}
</style>

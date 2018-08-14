<template>
    <Popup v-model="popupShow" position="bottom" max-height="80%" style="overflow-y:inherit; background:#fff;">
        <HeaderInfo @closeClick="popupShow = false"></HeaderInfo>

        <Sku ref="Sku"></Sku>

        <Xnumber title="购买数量" :min="1" :max="5"></Xnumber>

        <div class="choose-foot">
            <!-- <a href="javascript:void(0)" @click="confirm">确定</a> -->
            <a href="javascript:void(0)" class="buy" @click="confirm">立即购买</a>
            <a href="javascript:void(0)" class="cart" @click="confirm">加入购物车</a>
        </div>
    </Popup>
</template>
<script>
import Popup from '~/components/base/popup'
import Sku from './sku'
import HeaderInfo from './header-info'
import Xnumber from '~/components/base/x-number'
export default {
    components: { Sku, Popup, HeaderInfo, Xnumber },
    head() { return {} },
    asyncData(context) { },
    data() { return { popupShow: false } },
    fetch() { },
    methods: {
        open() {
            this.popupShow = true;
        },

        confirm() {
            let skuResult = this.getSkuResult()
            console.log(skuResult)
            if (skuResult) {
                this.popupShow = false;
                this.$emit("SkuResult", skuResult);
            }
        },

        //获取Sku结果集
        getSkuResult() {
            let skuResultList = this.$refs.Sku.skuResultList;
            console.log(skuResultList)
            if (skuResultList.length == 1) {
                return { ...skuResultList[0] };
            } else {
                alert("请选择型号~")
                return false;
            }
        }
    }
}
</script>
<style lang='less' scoped>
.choose-foot {
  width: 100%;
  height: 45px;
  text-align: center;
  display: flex;

  a {
    display: block;
    flex: 1;
    height: 45px;
    line-height: 46px;
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    cursor: pointer;
  }

  .buy {
    background: #f23030;
  }
  .cart {
    background: #ff9301;
  }
}
</style>

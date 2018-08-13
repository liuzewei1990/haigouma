<template>
    <Popup v-model="popupShow" position="bottom" max-height="80%">

        <Sku ref="Sku"></Sku>

        <div class="choose-foot">
          <a href="javascript:void(0)" class="SZY-BUY-BUTTON bg-color add-cart" @click="confirm">确定</a>
          <a href="javascript:void(0)" class="SZY-BUY-SELECT button-attr buy-goods" style="display: none;">立即购买</a>
          <a href="javascript:void(0)" class="SZY-BUY-SELECT button-attr add-cart" style="display: none;">加入购物车</a>
        </div>
    </Popup>
</template>
<script>
import Popup from '~/components/base/popup'
import Sku from './sku'
export default {
    components: { Sku, Popup },
    head() { return {} },
    asyncData(context) { },
    data() { return { popupShow: false } },
    fetch() { },
    methods: {
        open() {
            this.popupShow = true;
        },

        confirm(){
          let skuResult = this.getSkuResult()
          console.log(skuResult)
          if(skuResult){
            this.popupShow = false;
            this.$emit("SkuResult",skuResult);
          }
        },

        //获取Sku结果集
        getSkuResult(){
          let skuResultList = this.$refs.Sku.skuResultList;
          console.log(skuResultList)
          if(skuResultList.length == 1){
            return {...skuResultList[0]};
          }else{
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

   a {
    display: block;
    height: 45px;
    line-height: 46px;
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    background: #f23030;
    cursor: pointer;
}
}
</style>

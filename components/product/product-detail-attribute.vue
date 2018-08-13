<template>
    <div class="goods-details-tab">
        <!-- 商品规格参数 -->
        <table class="attribute-table">
            <tbody>
                <tr>
                    <td>商品名称</td>
                    <td>HTC One X9 双卡双待</td>
                </tr>
                <tr>
                    <td>商品编号</td>
                    <td>119</td>
                </tr>
                <tr>
                    <td>店铺</td>
                    <td>苹果店长</td>
                </tr>

                <!-- 商品规格 -->

                <tr>
                    <td>颜色</td>
                    <td> 白色&nbsp; 粉色&nbsp;</td>
                </tr>

                <tr>
                    <td>版本</td>
                    <td>公开版&nbsp;</td>
                </tr>

            </tbody>
        </table>
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
.attribute-table {
  width: 100%;
}

.attribute-table tr:first-child {
  border-top: 1px solid #f1f1f1;
}

.attribute-table tr td:first-child {
  width: 70px;
  padding: 10px 15px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
  background-color: #f7f7f7;
}
.attribute-table td {
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  color: #3e4346;
  font-size: 12px;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}
</style>
<template>
    <Xheader class="product-list-search" headerStyle="margin:0 70px;">
        <!-- <a slot="overwrite-left" style="color:#5e5e5e;" href="javascript:void(0);" @click="$router.push('/register')">返回</a> -->
        <Usearch></Usearch>
    </Xheader>
</template>
<script>

import Xheader from "~/components/base/x-header"
import Usearch from "~/components/base/u-search"
export default {
    components: { Xheader, Usearch },
    head() { return {} },
    asyncData(context) { },
    data() { return {} },
    fetch() { },
}
</script>
<style lang='less' scoped>
.product-list-search {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
}
</style>
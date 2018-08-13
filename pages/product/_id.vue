<template>
    <Product></Product>
</template>
<script>
import Product from '~/components/product/product.vue'
export default {
    components: { Product },
    validate({ params,query }) {
      if(params['id'])
      return true;
     },
    head() { return {} },
    asyncData(context) { },
    data() { return {} },
    fetch() { },
}
</script>
<style lang='less' scoped>
</style>

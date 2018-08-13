<template>
    <Popup v-model="show" position="bottom" max-height="50%">
        <Sku></Sku>
    </Popup>
</template>
<script>
import Popup from '~/components/base/popup'
import Sku from './sku'
export default {
    components: { Sku, Popup },
    head() { return {} },
    asyncData(context) { },
    data() { return { show: false } },
    fetch() { },
    methods: {
        open() {
            this.show = true;
        }
    }
}
</script>
<style lang='less' scoped>
</style>
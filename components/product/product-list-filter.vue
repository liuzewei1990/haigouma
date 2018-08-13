<template>
    <FilterBar top="46" :topLine="true" :bottomLine="true" :bar-menus="barMenus" @showDialog="handleShowDialog" @closeDialog="handleCloseDialog" @changeTab="handleChangeTab" @changeMainItem="handleChangeMainItem" @changeSelect="changeData">
    </FilterBar>
</template>
<script>

import FilterBar from "~/components/base/filter/filterBar.vue"
import barMenus from './data';
export default {
    components: { FilterBar },
    head() { return {} },
    asyncData(context) { },
    data() {
        return {
            barMenus: barMenus
        }
    },
    fetch() { },
    methods: {
        handleShowDialog(v) {
            // console.log(v);
        },
        handleCloseDialog(v) {
            // console.log(v);
        },
        handleChangeTab(v) {
            // console.log(v);
        },
        handleChangeMainItem(v) {
            // console.log(v)
        },
        changeData(v) {
            console.log(v);
        }
    },
}
</script>
<style lang='less' scoped>
</style>
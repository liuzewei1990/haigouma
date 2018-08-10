<template>
    <Swiper :list="list" :loop="true" :auto="true" height="140px"></Swiper>
</template>

<script>
import { Swiper } from '~/components/base/swiper'
export default {
    components: { Swiper },
    props: ["list"]
}
</script>

<style>
</style>

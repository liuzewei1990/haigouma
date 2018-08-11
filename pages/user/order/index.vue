<template>
  <div></div>
</template>

<script>
export default {
  // mounted(){
  //   this.$router.push({name:"user-order-list"})
  // }
  fetch ({redirect, store}) {
      redirect({name:"user-order-list"})
  },
}
</script>

<style>

</style>

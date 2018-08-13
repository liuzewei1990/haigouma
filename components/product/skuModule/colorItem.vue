<template lang="html">
  <dl class="colorItem">
    <dt>颜色：</dt>
    <dd>
      <ul>
        <li v-for="(item,index) in colorType" :key="index"
            :class="{disabled: item.state === 2, active: item.state === 1}"
            @click="colorItemClick(item)">

            <a href="javascript:void(0);">{{item.type}}</a>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
    name: 'colorItem',
    props: ['colorType'],
    data() {
        return {}
    },
    created() {

    },
    methods: {
        colorItemClick(item) {
            this.$emit('color-change', item);
        }
    }
}
</script>

<style lang="less" scoped>
.colorItem {
  width: 100%;
  padding-bottom: 6px;

	dt {
		width: 100%;
		font-size: 0.65rem;
		line-height: 35px;
		color: #222;
  }

  dd ul li {
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 10px;
      border: 1px solid #cacaca;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      border-radius: 5px;
  }

  a {
      padding: 0 15px;
      line-height: 30px;
      display: inline-block;
      color: #666;
  }
}

.colorItem dd .active {
  border-color: #f23030;
  a{
    color: #f23030;
  }
}
.colorItem dd .disabled {
  border: 1px dashed #ccc;
  a{
    color: #ccc;
  }
}
</style>

<template>
  <div class="form-group" :class="{'top-line':topLine,'bootom-line':bottomLine}">
    <dl>
      <dt>
        <span>{{label}}</span>
      </dt>
      <dd>
        <div class="form-control-box">
          <input :type="type" class="form-control" :style="`width:${width}`" v-model="inputVal" :placeholder="placeholder" :maxLength="maxLength" autocomplete="off">
          <div class="form-right"><slot></slot></div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props:{
    label:String,
    placeholder:String,
    maxLength:String,
    width:{
      type:String,
      default:"80%"
    },
    topLine:Boolean,
    bottomLine:Boolean,
    type:{
      type:String,
      default:"text"
    },
    value:String
  },
  data(){
    return {
      inputVal:""
    }
  },
  watch:{
      value(val) {
        this.inputVal = val;
      },
      inputVal(val) {
        this.$emit("input",val);
      }
  },
  mounted() {
    if (this.value) {
      this.inputVal = this.value;
    }
  }
}
</script>

<style lang="less" scoped>

  @import "../../styles/weui/base/mixin/setOnepx.less";
  .form-group {
      background: #FFF;
      position: relative;

    dl{
        width: 94%;
        margin: auto;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;

      dt{
          width: 4.5rem;
          height: 2.25rem;
          line-height: 2.25rem;
          float: left;
          // font-size: 0.7rem;
          color: #222;
      }
      dd {
          position: relative;
          padding-left: 4.5rem;
          line-height: 2.25rem;

          .form-control-box{
            // display: flex;

            .form-right{
              min-width: 20%;
              display: inline-block;
              // display: flex;
              text-align: center;
              align-items: center;
            }
          }

          input {
            display: inline-block;
              border: none;
              padding: 0.5rem 0 0.5rem;
              line-height: 1.25rem;
              // width: 190px;
              font-size: 0.7rem;
              color: #666;
              height: 1.25rem;
          }
      }
    }
  }

  .top-line{
      &::before{
        .setTopLine();
      }
  }

  .bootom-line{
      &::after{
        .setBottomLine();
      }
  }

</style>

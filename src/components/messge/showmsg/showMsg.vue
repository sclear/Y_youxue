<template>
  <div class="showMsg">
    <div class="content">
      <div @click="CLOSE" class="close">CLOSE</div>
      <div class="title">{{tableModel.title}}</div>
      <div class="detail">
        {{tableModel.detail}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
      tableModel:Object
  },
  methods: {
    CLOSE() {
        this.$emit('CLOSE')
    }  
  },
  components: {}
};
</script>

<style lang='less' scoped >
.showMsg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: boxs .3s linear forwards;
  .content {
    width: 60vw;
    height: 70vh;
    background: white;
    overflow: auto;
    padding: 30px;
    border-radius: 6px;
    animation: chose .5s linear forwards;
    position: relative;
    .close{
        position: absolute;
        right: 0;
        top:0;
        cursor: pointer;
    }
    .title{
        font-size: 20px;
        color:@col333;
        font-weight: bold;
    }
    .detail {
        color:@txt;
        margin-top: 10px;
        font-size: 14px;
        text-indent: 28px;
        line-height: 29px;
    }
  }
}
</style>

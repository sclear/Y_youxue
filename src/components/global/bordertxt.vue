// 全局带左border的文字
<template>
  <div class="border_txt">
      {{text}}
  </div>
</template>

<script>
export default {
  props:['text'],
  data() {
    return {

    }
  }
}
</script>

<style lang='less' scoped >
.border_txt{
    height:29px;
    line-height: 29px;
    box-sizing: border-box;
    padding-left: 24px;
    border-left:5px solid @mainCol;
    font-size: 16px;
}
</style>

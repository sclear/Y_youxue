<template>
  <div class="sitmap">
      <div v-for="(item,index) in sitmap" :key="index">
          <span class="fir">{{item}}</span>
          <span v-if="!(num === index+1)" class="sec">></span>
      </div>
      
  </div>
</template>

<script>
export default {
  props:{
      sitmap:Array
  },
  data() {
    return {
        
    }
  },
  computed: {
      num() {
          return this.sitmap.length
      }
  }
}
</script>

<style lang='less' scoped >
.sitmap{
    div{
        float: left;
    }
    width:1200px;
    height:44px;
    margin: 0 auto;
    background: #1DBCA6;
    color:#FFFFFF;
    line-height: 44px;
    font-size: 16px;
    box-sizing: border-box;
    padding-left: 20px;
    .sec{
        margin: 0 12px 0 13px;
    }
}
</style>

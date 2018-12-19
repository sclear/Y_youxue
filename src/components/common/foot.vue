<template>
  <div class="foots">
      <ul>
          <li>关于我们</li>
          <li>帮助中心</li>
          <li>联系我们</li>
          <li>热线电话</li>
      </ul>
      <div class="police">
          经营许可证编号..........................
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
.foots{
    width:100%;
    height:277px;
    background: #F3F1F1;
    padding-top: 60px;
    box-sizing: border-box;
    color:@txt;
    ul{
        margin:0 auto 0 auto;
        width:1200px;
        display: flex;
        justify-content: space-between;
        li{
            list-style: none;
            font-size: 16px;
        }
    }
    .police{
        box-sizing: border-box;
        padding:5px;
        width:716px;
        height:56px;
        background: white;
        margin: 88px auto 0 auto;
    }
}
</style>

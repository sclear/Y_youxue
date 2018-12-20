<template>
  <div class="coll">
    <div class="title">收藏夹</div>
    <div class="group">
      <div class="detail">
          <div>img</div>
          <div class="kms">24节课，实现EXCEL小白到高手的转变</div>
          <div class="hovers">
              <div>取消收藏</div>
              <div>去学习</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped >
.coll {
  box-sizing: border-box;
  padding: 24px 0 0 100px;
  .title {
    display: inline-block;
    font-size: 20px;
    border-bottom: 4px solid @mainCol;
  }
  .group {
    margin-top: 50px;
    width: 100%;
    .Both;
    .detail {
      height: 153px;
      width: 181px;
      float: left;
      margin: 10px 24px 0 0;
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      div:first-child{
          width:181px;
          height:113px;
      }
      &:hover .hovers{
          bottom: 0px;
      }
       .kms{
          padding:0 10px;
          box-sizing: border-box;
          width:181px;
          height:40px;
          color:@col333;
          border:1px solid #BFBFBF;
          border-top: none;
      }
      .hovers{
          position: absolute;
          bottom:-38px;
          left:0px;
          width:181px;
          height:38px;
          z-index: 80;
          transition: bottom .3s linear;
          .Both;
          div{
              font-size: 13px;
              text-align:center;
              line-height: 38px;
              float: left;
              color:#fff;
              cursor: pointer;
          }
          div:first-child{
              height:38px;
              width:50%;
              background: rgba(0, 0, 0, 0.86);
          }
          div:last-child{
              height:38px;
              width:50%;
              background: @mainCol;
          }
      }
    }
  }
}
</style>

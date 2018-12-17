<template>
  <div class="hot">
    <div class="hot_class">&nbsp;
      <div class="title">热门课程</div>
      <div class="group">
        <div>雅思</div>
        <div>考研</div>
        <div>四六级</div>
        <div>托福</div>
        <div>小语种</div>
        <div>公务员</div>
      </div>
    </div>
    <div class="class_group">
        <div class="class_detail">
            <div class="fir">考研英语突击班</div>
            <div class="tea">刘一老师</div>
            <div class="years">五年考研英语教学经验</div>
            <div class="pri">
                <div class="prize">￥3168</div>
                <div class="sums">66人已报名</div>
            </div>
        </div>
        <div class="class_detail">
            <div class="fir">考研英语突击班</div>
            <div class="tea">刘一老师</div>
            <div class="years">五年考研英语教学经验</div>
            <div class="pri">
                <div class="prize">￥3168</div>
                <div class="sums">66人已报名</div>
            </div>
        </div>
        <div class="class_detail">
            <div class="fir">考研英语突击班</div>
            <div class="tea">刘一老师</div>
            <div class="years">五年考研英语教学经验</div>
            <div class="pri">
                <div class="prize">￥3168</div>
                <div class="sums">66人已报名</div>
            </div>
        </div>
        <div class="class_detail">
            <div class="fir">考研英语突击班</div>
            <div class="tea">刘一老师</div>
            <div class="years">五年考研英语教学经验</div>
            <div class="pri">
                <div class="prize">￥3168</div>
                <div class="sums">66人已报名</div>
            </div>
        </div>
        <div class="class_detail">
            <div class="fir">考研英语突击班</div>
            <div class="tea">刘一老师</div>
            <div class="years">五年考研英语教学经验</div>
            <div class="pri">
                <div class="prize">￥3168</div>
                <div class="sums">66人已报名</div>
            </div>
        </div>
        <div class="class_detail">
            <div class="fir">考研英语突击班</div>
            <div class="tea">刘一老师</div>
            <div class="years">五年考研英语教学经验</div>
            <div class="pri">
                <div class="prize">￥3168</div>
                <div class="sums">66人已报名</div>
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
.hot {
  margin: 69px auto 67px auto;
  width: 1200px;
  height: 405px;
  &::after{
      content: '';
      width:0;
      height:0;
      display:block;
      clear: both;

  }
  .hot_class {
    float: left;
    font-size: 0;
    width: 322px;
    height: 100%;
    background: #1dbca6;
    .title {
      height: 29px;
      margin-left: 64px;
      font-size: 29px;
      line-height: 29px;
      padding-left: 16px;
      color: #ffffff;
      margin-top: 43px;
      border-left: 2px solid #ffffff;
    }
    .group{
      width:100%;
      overflow: hidden;
      div{
          width:50%;
          float: left;
          font-size: 20px;
          color:#FFFFFF;
          text-align:center;
          margin-top: 54px;
      }
  }
  }
  .class_group{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding:0 4px 12px 4px;
      padding-bottom: 20px !important;
      float: right;
      width:854px;
      height:100%;
      box-sizing: border-box;
      .class_detail{
          height:180px;
          width:268px;
          background: white;
          margin-top: 22px;
          float: left;
          box-sizing: border-box;
          padding:25px 0 0 26px;
          font-size: 15px;
          box-shadow: 0 2px 11px #888;
          .fir{
              font-size: 20px;
              color:#262627;
          }
          .tea{
              color:#535354;
              margin-top: 24px;
          }
          .years{
              .tea;
              margin-top: 12px;
          }
          .pri{
              margin-top: 7px;
              .prize{
                  float: left;
                  color:#FF2121;
                  font-size: 24px;
              }
              .sums{
                  float: right;
                  margin: 9px 23px 0 0;
                  color:#535354;
              }
          }

      }
  }

  
}
</style>

// 269

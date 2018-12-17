<template>
  <div class="refer">
    <div class="title">
      <div class="ref">课程推荐</div>
      <div class="detail">根据测评结果，我们为你推荐了以下课程</div>
    </div>
    <div class="group">
        <div class="detail">
            <div class="img"></div>
            <div class="fn">快速记忆单词，四六级词汇一招搞定</div>
            <div class="pri">
                <span class="prize">免费</span>
                <span class="long">20课时</span>
            </div>
            <div class="study_comted">
                <span class="now">1020人正在学习</span>
                <span class="reaod">2018-12-12更新</span>
            </div>
        </div>
        <div class="detail">
            <div class="img"></div>
            <div class="fn">快速记忆单词，四六级词汇一招搞定</div>
            <div class="pri">
                <span class="prize">免费</span>
                <span class="long">20课时</span>
            </div>
            <div class="study_comted">
                <span class="now">1020人正在学习</span>
                <span class="reaod">2018-12-12更新</span>
            </div>
        </div>
        <div class="detail">
            <div class="img"></div>
            <div class="fn">快速记忆单词，四六级词汇一招搞定</div>
            <div class="pri">
                <span class="prize">免费</span>
                <span class="long">20课时</span>
            </div>
            <div class="study_comted">
                <span class="now">1020人正在学习</span>
                <span class="reaod">2018-12-12更新</span>
            </div>
        </div>
        <div class="detail">
            <div class="img"></div>
            <div class="fn">快速记忆单词，四六级词汇一招搞定</div>
            <div class="pri">
                <span class="prize">免费</span>
                <span class="long">20课时</span>
            </div>
            <div class="study_comted">
                <span class="now">1020人正在学习</span>
                <span class="reaod">2018-12-12更新</span>
            </div>
        </div>
    </div>
    <div class="btn">重新测评</div>
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
.refer {
  margin: 0 auto;
  width: 1200px;
  height: auto;
  .title {
    overflow: hidden;
    margin-bottom: 60px;
    & > div {
      float: left;
    }
    .ref {
      color: #080103;
      font-size: 29px;
      border-bottom: 3px solid #33cc99;
    }
    .detail {
        color:#666;
        line-height: 59px;
        font-size: 15px;
        margin-left: 12px;
    }
  }
  .group{
      width:100%;
      display: flex;
      justify-content: space-between;
      .detail{
          height: 375px;
          width:289.5px;
          box-shadow: 1px 3px 9px #888888;
          .img{
              height:208px;
              width:100%;
          }
          .fn{
              font-size: 15px;
              margin-top: 26px;
              text-align: center;
              color:#262627;
          }
          .pri{
              margin-top: 28px;
              .prize{
                  margin-left: 17px;
                  font-size: 29px;
                  color:#FF4B36;
                  font-weight:400;
              }
              .long{
                  font-size: 16px;
                  font-weight:400;
                  color:#666;
                  margin-left: 12px;
              }
          }
          .study_comted{
              margin-top: 26px;
              .now{
                  color:#535354;
                  font-size: 13px;
                  float: left;
                  margin-left: 13px;
              }
              .reaod{
                  .now;
                  float:right;
                  margin-right: 11px;
              }
          }
      }
  }
  .btn{
      width:247px;
      height:67px;
      line-height: 67px;
      text-align: center;
      background:#F9C62D;
      color:#fff;
      font-size: 20px;
      margin:50px 0 104px 476.5px; 
      box-shadow:0px 2px 6px 0px rgba(174,172,172,0.6);
      cursor: pointer;
  }
}
</style>

<template>
  <div class="goods">
    <div class="title">
      <div class="ref">精品课程</div>
      <div class="detail">按时间排序</div>
    </div>
    <div class="group">
        <div class="detail">
            <div class="img"></div>
            <div class="allClass">36节课，实现EXCEL小白到高手的转变</div>
            <div class="pri">
                <span class="prize">￥688</span>
                <span class="long">20课时</span>
            </div>
            <div class="study">
                <div class="sums">268人正在学习</div>
                <div class="dates">2018-12-11更新</div>
            </div>
        </div>
        <div class="detail">
            <div class="img"></div>
            <div class="allClass">36节课，实现EXCEL小白到高手的转变</div>
            <div class="pri">
                <span class="prize">￥688</span>
                <span class="long">20课时</span>
            </div>
            <div class="study">
                <div class="sums">268人正在学习</div>
                <div class="dates">2018-12-11更新</div>
            </div>
        </div>
        <div class="detail">
            <div class="img"></div>
            <div class="allClass">36节课，实现EXCEL小白到高手的转变</div>
            <div class="pri">
                <span class="prize">￥688</span>
                <span class="long">20课时</span>
            </div>
            <div class="study">
                <div class="sums">268人正在学习</div>
                <div class="dates">2018-12-11更新</div>
            </div>
        </div>
    </div>
    <div class="studys">
        <div class="imgBox">
            <div class="imgBox_img"></div>
            <div class="imgBox_text">少儿专业一对一辅导班，专注解决孩子课后习题</div>
            <div class="pris">
                <span class="prizes">￥999</span>
                <span class="longs">30课时</span>
                <span class="datess">2018-12-1更新</span>
            </div>
        </div>
        <div class="more">
            <div class="rImg"></div>
            <div class="moreClass">更多课程</div>
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
.goods {
  margin: 0 auto;
  width: 1200px;
  height: auto;
  .title {
    overflow: hidden;
    margin-bottom: 52px;
    & > div {
      float: left;
    }
    .ref {
      color: #080103;
      font-size: 29px;
      border-bottom: 3px solid #33cc99;
    }
    .detail {
      float:right;
      color: #666;
      line-height: 59px;
      font-size: 15px;
      margin-left: 12px;
    }
  }
  .group{
      margin-bottom: 69px;
      display: flex;
      justify-content: space-between;
      width:100%;
      .detail{
          width:366px;
          height:400px;
          position: relative;
          box-shadow: 1px 3px 9px #888888;
          .img{
              height:228px;
              width:100%;
          }
          .allClass{
              font-size: 20px;
              color:#333;
              margin: 20px 79px 0 26px;
              line-height: 30px;
          }
          .pri{
              position: absolute;
              bottom: 40px;
              .prize{
                  color:#FF3556;
                  font-size: 29px;
                  margin-left: 26px;
              }
              .long{
                  color:#666;
                  font-size: 16px;
                  margin-left: 12px;
              }
          }
          .study{
              width:100%;
              position: absolute;
              bottom: 12px;
              .sums{
                  float: left;
                  margin-left: 26px;
              }
              .dates{
                  float:right;
                  margin-right:11px;
                
              }
          }
      }
  }
  .studys{
      height:405px;
      width:100%;
      margin-top: 50px;
      .imgBox{
          height:405px;
          width:779px;
          float: left;
          background:bisque;
          .imgBox_img{
              height:265px;
              width:100%;
          }
          .imgBox_text{
              color:#262627;
              font-size: 24px;
              margin-left: 38px;
              margin-top: 24px;
          }
          .pris{
              margin-left:38px;
              margin-top: 29px;
              span{
                  display: block;
                  float: left;
                  font-size: 20px;
              }
              .prizes{
                  font-size: 39px;
                  color:#F93535;
              }
              .longs{
                  color:#535354;
                  margin: 17px 0 0 19px;
              }
              .datess{
                  float:right;
                  color:#535354;
                  margin:17px 28px 0 0;
              }
          }
      }
      .more{
          float: right;
          height:405px;
          width:376px;
          position: relative;
          .rImg{
              height:252px;
              width:376px;
              background:bisque;
          }
          .moreClass{
              height:104px;
              width:376px;
              background: #1DBCA6;
              text-align: center;
              line-height: 104px;
              color:#FFFFFF;
              font-size: 29px;
              position: absolute;
              bottom: 0;
              cursor: pointer;
          }
      }
  }
}
</style>

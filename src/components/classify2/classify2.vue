<template>
  <div class="classify2">
      <sitmap :sitmap='sitmap'></sitmap>
      <div class="box">
          <div class="content">
              <div class="menu">
                  <div>英语口语口语课程</div>
                  <div class="chose">英语口语口语课程</div>
                  <div>英语口语口语课程</div>
                  <div>英语口语口语课程</div>
                  <div>英语口语口语课程</div>
                  <div>英语口语口语课程</div>
              </div>
              <div class="group">
                  <div class="intro">
                      <div class="img"></div>
                      <div class="tro">
                          <div class="title">英语口语初级课程</div>
                          <div class="times">时长：45分钟</div>
                          <div class="sums"><span>266人正在学习</span> <span>更新时间：2018-11-11</span></div>
                      </div>
                      <div class="pri"></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sitmap:['首页','英语口语直播课']
    }
  },
  components: {
      sitmap: () => import('./../common/sitmap.vue')
  }
}
</script>

<style lang='less' scoped >
.box{
    width:100%;
    padding:49px 0;
    background: @bgcol;
    .content{
        width:1200px;
        margin: 0 auto;
        .Both;
        .menu{
            float: left;
            width:220px;
            background: white;
            padding-bottom: 24px;
            div{
                font-size: 16px;
                padding-left: 17px;
                color:@txt;
                margin:40px 0 0 40px;
                border-left:5px solid white;
            }
            .chose{
                color:@mainCol;
                border-left:5px solid @mainCol;
            }
        }
        .group{
            width:888px;
            height:200px;
            background: floralwhite;
            float: right;
            .intro{
                color:@txt;
                height:122px;
                width:800px;
                background: red;
                margin-left: 43px;
                .Both;
                &>div{
                    float: left;
                    height:100%;
                }
                .img{
                    width:267px;
                    height:122px;
                    background: gold;
                }
                .tro{
                    position: relative;
                    .times{
                        margin-top: 35px;
                    }
                    .sums{
                        width:1000px;
                        position: absolute;
                        bottom: 0;
                    }
                }
            }
        }
    }
}
</style>

<template>
  <div class="moreclass">
      <sitmap class="sitmap" :sitmap='sitmap'></sitmap>
      <div class="box">
          <div class="content">
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
              <div class="detail">
                  <div class="img"></div>
                  <div class="title">36节课，实现EXCEL小白到高手的转变</div>
                  <div class="money">
                      <div>￥680</div>
                      <div>24课时</div>
                  </div>
                  <div class="times">
                      <div>1020人正在学习</div>
                      <div>2018-12-11更新</div>
                  </div>
              </div>
          </div>
          <pagination class="pagin" :total="total" :current-page='current' @pagechange="pagechange"></pagination>
      </div>
      <foots class="foots"></foots>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sitmap:['首页','更多课程'],
        total:100,
        current:1,

    }
  },
  components: {
      sitmap: ()=> import('./../common/sitmap.vue'),
      foots: ()=> import('./../common/foot.vue')
  },
  methods: {
      pagechange(res) {
          console.log(res)
      }
  }
}
</script>

<style lang='less' scoped >
.box{
    width:100%;
    background: @bgcol;
    padding-bottom: 24px;
    .content{
        margin: 0 auto;
        width:1200px;
        color:@txt;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .detail{
            width:285px;
            height:313px;
            background: white;
            margin-top:47px;
            position: relative;
            .img{
                width:100%;
                height:154px;
                background: blue;
            }
            .title{
                padding:15px 40px 0 15px;
                box-sizing:boder-box;
                color:@col333;
            }
            .money{
                position: absolute;
                bottom: 60px;
                div:first-child{
                    float: left;
                    margin-left: 15px;
                    font-size: 24px;
                    margin-top: -5px;
                    color:@red;
                }
                div:last-child{
                    float: left;
                    margin-left: 30px;
                    margin-top: 7px;
                }
            }
            .times{
                position: absolute;
                bottom:30px;
                left:10px;
                width:calc(~'100% - 16px');
                div:first-child{
                    float: left;
                }
                div:last-child{
                    float: right;
                    margin-right: 16px;
                }
            }
        }
    }
    .pagin{
        margin-top: 55px;
    }
}
.sitmap{
    margin:24px auto 23px auto !important;
}
.foots{
    margin-top: 36px;
}
</style>

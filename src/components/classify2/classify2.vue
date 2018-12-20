<template>
  <div class="classify2">
      <sitmap class="sitmap" :sitmap='sitmap'></sitmap>
      <div class="box">
          <div class="content">
              <div class="menu">
                  <div v-for="(item,index) in list" :key="index" @click="CHOSE(index)" :class="index === indexChose?'chose':''" >{{item.title}}</div>
              </div>
              <div class="group">
                  <div v-for="(item,index) in list[indexChose].children" :key='index' class="intro">
                      <div class="img"></div>
                      <div class="tro">
                          <div class="title">{{item.title}}</div>
                          <div class="times">时长：{{item.times}}分钟</div>
                          <div class="sums"><span>{{item.study}}人正在学习</span> <span>更新时间：{{item.updata}}</span></div>
                      </div>
                      <div class="pri">
                          <div>￥{{item.money}}</div>
                          <div>立即购买</div>
                      </div>
                  </div>
                   <pagination class="pagin" :total="total" :current-page='current' @pagechange="pagechange"></pagination>
              </div>
          </div>
      </div>
      <foots class="foots"></foots>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sitmap:['首页','英语口语直播课'],
        list:[
            {
                title:'英语口语口语课程',
                children:[
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                ]
            },
            {
                title:'英语口语口语课程',
                children:[
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                ]
            },
            {
                title:'英语口语口语课程',
                children:[
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                ]
            },
            {
                title:'英语口语口语课程',
                children:[
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                ]
            },
            {
                title:'英语口语口语课程',
                children:[
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                ]
            },
            {
                title:'英语口语口语课程',
                children:[
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                    {
                        title:'英语口语初级课程',
                        times:'45',
                        study:'266',
                        updata:'2018-11-11',
                        money:'698'
                    },
                ]
            },
        ],
        indexChose:0,
        total:100,
        current:1,
    }
  },
  components: {
      sitmap: () => import('./../common/sitmap.vue'),
      foots: () => import('./../common/foot.vue'),
  },
  methods: {
      //选择菜单
      CHOSE(res) {
          this.indexChose = res;
      },
      pagechange(res) {
          this.current = res;
      }
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
                cursor: pointer;
            }
            .chose{
                color:@mainCol;
                border-left:5px solid @mainCol;
            }
        }
        .group{
            width:888px;
            background: white;
            float: right;
            padding-bottom: 64px;
            .intro{
                color:@txt;
                height:122px;
                width:845px;
                margin: 41px 0 0 43px;
                padding-bottom: 42px;
                border-bottom: 1px solid rgba(191, 191, 191, 0.59);
                overflow: hidden;
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
                    box-sizing: border-box;
                    padding-left: 50px;
                    .title{
                        margin-top: 8px;
                        font-size: 16px;
                        color:@col333;
                    }
                    .times{
                        margin-top: 35px;
                        color:@col333;
                        
                    }
                    .sums{
                        width:1000px;
                        position: absolute;
                        bottom: 0;
                    }
                }
                .pri{
                    margin-left: 220px;
                    div:first-child{
                        color:@red;
                        font-size: 24px;
                        margin-top:15px;
                    }
                    div:last-child{
                        color:@col333;
                        height:33px; 
                        width:81px;
                        line-height: 33px;
                        text-align:center;
                        background: #FAC62E;
                        margin-top:42px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
.sitmap{
    margin:24px auto 23px auto !important;
}
.pagin{
    margin-top:150px;
}
.foots{
    margin-top: 40px;
}
</style>

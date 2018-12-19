<template>
  <div class="svideo">
    <sitmap class="sitmap" :sitmap="sitmap"></sitmap>
    <div class="top_see">
      <div class="leftVideo">
        <div class="videos">video</div>
        <div class="share">
          <div class="shrIcon">icon</div>
          <div class="shrTxt">分享</div>
          <div class="likeIcon">icon</div>
          <div class="likeTxt">收藏</div>
          <div class="times">更新时间2018-12-11</div>
          <div class="sums">2323人在学习</div>
        </div>
      </div>
      <div class="rightPri">
        <div class="pri">
          <div class="class_sum">36节课，实现EXCEL小白到高手的转变</div>
          <div class="study">办公软件大佬主讲，随时随地想学就学</div>
          <div class="boxs">
            <div class="pri">
              <div>价格</div>
              <div>￥689</div>
            </div>
            <div class="timess">
              <div>课时</div>
              <div>24</div>
            </div>
            <div class="timelong">
              <div>每课时长</div>
              <div>30分钟</div>
            </div>
          </div>
          <div class="btnGroup">
            <div class="buy">立即购买</div>
            <div class="see_vide">免费试听</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <!-- 左侧课程介绍 -->
      <div class="v_content">
        <div class="v_group">
          <div @click="swichs(true)"  class="btn" :class="indexs?'chose':''">课程介绍</div>
          <div @click="swichs(false)" class="btn" :class="indexs?'':'chose'">课程评论</div>
        </div>
        <div v-if="indexs" class="jieshao">
          <bor text="课程简介"></bor>
          <div
            class="jieshao_title"
          >本课程主要介绍excel中各种工具、表格的应用，让你即使对这款办公软件零基础，也能在学习了这门课程以后，能够快速上手使用这款软件 。真正实现从小白到高手的转变。</div>
          <div class="ad"></div>
          <bor text="适用人群"></bor>
          <div class="jieshao_title mar">想要学习Excel的人群</div>
          <bor text="提供服务"></bor>
          <div class="ul_li">
            <div>
              <span>●</span> 本课程提供前三课时免费试听，试听满意后可以继续购买学习
            </div>
            <div>
              <span>●</span> 本课程提供前三课时免费试听，试听满意后可以继续购买学习
            </div>
            <div>
              <span>●</span> 本课程提供前三课时免费试听，试听满意后可以继续购买学习
            </div>
          </div>
          <bor class="mt34" text="课程安排"></bor>
          <div class="plan">
            <div>课时：24课时</div>
            <div>每课时长：30分钟</div>
            <div>开始时间：购买即可学习</div>
          </div>
          <div v-for="(item,index) in list" :key="index" class="video_group">
            <div @click=" item.chose = !item.chose " class="video_detail">
              <span>{{item.title}}</span>
              <span>icon</span>
            </div>
            <div v-if="item.chose" v-for="(items,indexs) in item.children" :key="indexs" class="vs">
              <div>{{items.title}}</div>
              <div>icon</div>
            </div>
          </div>
        </div>
        <div v-if="!indexs" class="jieshao">
          <div>发表您的评论，让更多的人看到这门课程</div>
          <textarea class="teax"></textarea>
          <div class="setPl">
            <div class="iconfont icon">&#xe709;</div>
            <div class="i_study">添加学习成果（图片不超过500k）</div>
            <div class="i_btn">发表评论</div>
          </div>
          <hr>
          <bor text='评论列表'></bor>
          <div class="group_all">
            <div class="img"></div>
            <div class="detail_group">
              <div class="pho">157****8813</div>
              <div class="photime">2018-11-03</div>
              <div class="pl">很不错，课件全是干货，能学到东西。而且老师讲课挺有趣的。</div>
              <img class="pl_img" src="" alt="234">
            </div>

          </div>
          <div class="group_all">
            <div class="img"></div>
            <div class="detail_group">
              <div class="pho">157****8813</div>
              <div class="photime">2018-11-03</div>
              <div class="pl">很不错，课件全是干货，能学到东西。而且老师讲课挺有趣的。</div>
              <img class="pl_img" src="" alt="234">
            </div>

          </div>
          <div class="group_all">
            <div class="img"></div>
            <div class="detail_group">
              <div class="pho">157****8813</div>
              <div class="photime">2018-11-03</div>
              <div class="pl">很不错，课件全是干货，能学到东西。而且老师讲课挺有趣的。</div>
              <img class="pl_img" src="" alt="234">
            </div>

          </div>
          <div class="group_all">
            <div class="img"></div>
            <div class="detail_group">
              <div class="pho">157****8813</div>
              <div class="photime">2018-11-03</div>
              <div class="pl">很不错，课件全是干货，能学到东西。而且老师讲课挺有趣的。</div>
              <img class="pl_img" src="" alt="234">
            </div>

          </div>
          <div class="group_all">
            <div class="img"></div>
            <div class="detail_group">
              <div class="pho">157****8813</div>
              <div class="photime">2018-11-03</div>
              <div class="pl">很不错，课件全是干货，能学到东西。而且老师讲课挺有趣的。</div>
              <img class="pl_img" src="" alt="234">
            </div>
          </div>
          <pagination class="pagin" :total="total" :current-page='current' @pagechange="pagechange"></pagination>
        </div>
      </div>
      <!-- 右侧推荐 -->
      <div class="tj_content">
        <div class="teacher">
          <div class="tea_title">老师介绍</div>
          <div class="tea_Photo">
            <div class="photo"></div>
            <div class="txt">
              <div>杨杨老师</div>
              <div>办公软件 大佬</div>
            </div>
          </div>
          <div class="text_long">
            杨杨老师拥有5年办公经验，对Excel软件非常熟悉，可以快速的制作各种表格。担任讲师以来，受到学员们的深厚喜爱。
            杨杨老师擅于总结软件运用小技巧，让学员们可以轻松学会使用软件。而且上课诙谐幽默 ，能够调动学员们学习的激情。
            杨杨老师制作的课件也非常有质量，曾获得了网站十大最爱学员欢迎的课件之一。
          </div>
        </div>
        <div class="recom">
          <div>为你推荐</div>
          <div>icon 换一批</div>
        </div>
        <div class="changes">
          <div class="changes_img"></div>
          <div class="changes_txt">
            <div>英语口语速成班</div>
            <div>222人正在学习</div>
          </div>
        </div>
        <div class="changes">
          <div class="changes_img"></div>
          <div class="changes_txt">
            <div>英语口语速成班</div>
            <div>222人正在学习</div>
          </div>
        </div>
        <div class="changes">
          <div class="changes_img"></div>
          <div class="changes_txt">
            <div>英语口语速成班</div>
            <div>222人正在学习</div>
          </div>
        </div>
        <div class="moreAndmore">更多课程</div>
        <hr>
        <div class="swi">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              1
            </div>
            <div class="swiper-slide">
              1
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <div class="Feiqi"></div>
    <foots></foots>
  </div>
</template>

<script>
import swiper from "swiper";
export default {
  data() {
    return {
      sitmap: ["首页", "24节课，完成Excel小白到高手的转变"],
      list: [
        {
          title: "第一部分 Excel基础工具的认识与使用",
          chose: false,
          children: [
            {
              title: "第1课时：基础工具01"
            },
            {
              title: "第1课时：基础工具01"
            },
            {
              title: "第1课时：基础工具01"
            }
          ]
        },
        {
          title: "第一部分 Excel基础工具的认识与使用",
          chose: false,
          children: [
            {
              title: "第1课时：基础工具01",
              title: "第1课时：基础工具01",
              title: "第1课时：基础工具01",
              title: "第1课时：基础工具01"
            }
          ]
        },
        {
          title: "第一部分 Excel基础工具的认识与使用",
          chose: false,
          children: [
            {
              title: "第1课时：基础工具01",
              title: "第1课时：基础工具01",
              title: "第1课时：基础工具01",
              title: "第1课时：基础工具01"
            }
          ]
        }
      ],
      indexs:true,
      total:100,
      current:1,
    };
  },
  mounted() {
    var myswiper = new swiper(".swi", {
      loop: true,
      clickable :true,
      pagination:{
            el: '.swiper-pagination',
            clickable: true,
            clickableClass : 'my-pagination-clickable',
        },
    });
  },
  methods: {
    swichs(res) {
      this.indexs = res;
    },
    pagechange(res) {
      this.current = res;
    }
  },
  components: {
    headr: () => import("./../common/head.vue"),
    foots: () => import("./../common/foot.vue"),
    sitmap: () => import("./../common/sitmap.vue"),
  }
};
</script>

<style lang='less' scoped >
.svideo {
  color: @txt;
  background: #f5f5f5;
  padding: 26px 0 56px 0;
  .sitmap {
    margin: 0px auto 16px auto;
  }
  .top_see {
    height: 469px;
    width: 1200px;
    margin: 0 auto;
    background: white;
    .leftVideo {
      margin: 25px 0 0 39px;
      width: 513px;
      float: left;
      .videos {
        width: 513px;
        height: 340px;
        background: bisque;
      }
      .share {
        margin-top: 28px;
        & > div {
          color: #333333;
          font-size: 12px;
          float: left;
        }
        .likeIcon {
          margin-left: 38px;
        }
        .shrTxt,
        .likeTxt {
          font-size: 16px;
        }
        .times {
          float: right;
        }
        .sums {
          float: right;
          margin-right: 24px;
        }
      }
    }
    .rightPri {
      margin: 25px 62px 0 0;
      float: right;
      .pri {
        width: 436px;
        .class_sum {
          font-size: 24px;
          color: @txt;
        }
        .study {
          color: @txt;
          font-size: 15px;
          margin: 25px 0 35px 0;
        }
        .btnGroup {
          margin-top: 43px;
          .buy {
            color: @txt;
            background: #fac62e;
            height: 65px;
            width: 200px;
            line-height: 65px;
            text-align: center;
            font-size: 20px;
            float: left;
            cursor: pointer;
          }
          .see_vide {
            color: @txt;
            box-sizing: border-box;
            border: 2px solid rgba(250, 183, 76, 1);
            background: white;
            height: 65px;
            width: 200px;
            line-height: 65px;
            text-align: center;
            font-size: 20px;
            float: right;
            cursor: pointer;
          }
        }
      }
      .boxs {
        width: 436px;
        height: 180px;
        background: #f6f6f6;
        box-sizing: border-box;
        padding:29px 0 0 36px;
        .pri,.timess,.timelong{
          font-size: 16px;
          color:@txt;
          .Both;
          &>div{
            float: left;
          }
        }
        .pri{
          div:first-child{
            width:110px;
          }
          div:last-child{
            color:@red;
            font-size: 29px;
            font-weight:400;
          }
        }
        .timess{
          margin-top: 15px;
          div:first-child{
            width:114px;
          }
          div:last-child{
          }
        }
        .timelong{
          margin-top: 20px;
          div:first-child{
            width:114px;
          }
          div:last-child{
          }
        }
      }
    }
  }
  .content {
    width: 1200px;
    margin: 31px auto 24px auto;
    overflow: hidden;
    .v_content {
      float: left;
      width: 795px;
      //   background: #333333;
      .v_group {
        overflow: hidden;
        .btn {
          line-height: 56px;
          float: left;
          width: 131px;
          height: 56px;
          text-align: center;
          background: white;
          color: @txt;
          cursor: pointer;
        }
        .chose{
          color: white;
          background: @mainCol;
        }
      }
      .jieshao {
        width: 795px;
        margin-top: 42px;
        background: white;
        padding: 23px 0 20px 26px;
        box-sizing: border-box;
        .jieshao_title {
          margin-top: 10px;
          box-sizing: border-box;
          line-height: 30px;
          padding-left: 29px;
        }
        .mar {
          margin: 17px 0;
        }
        .ad {
          width: 626px;
          height: 347px;
          background: #fac62e;
          margin: 43px 0 55px 23px;
        }
        .ul_li {
          margin-top: 10px;
          div {
            padding-left: 25px;
            box-sizing: border-box;
            margin-top: 13px;
            span {
              color: #fab74c;
              margin-right: 8px;
            }
          }
        }
        .plan {
          div {
            margin: 22px 0 20px 29px;
          }
        }
        .video_group {
          margin-top: 35px;
          .video_detail {
            cursor: pointer;
            height: 28px;
            line-height: 28px;
            box-sizing: border-box;
            width: 609px;
            background: #ededed;
            color: #262627;
            font-size: 13px;
            margin: 0 auto;
            span:first-child {
              float: left;
              margin-left: 5px;
            }
            span:last-child {
              float: right;
              margin-right: 5px;
            }
          }
          .vs {
            width: 500px;
            margin: 13px 0 0 150px;
            overflow: hidden;
            div:first-child {
              float: left;
            }
            div:last-child {
              float: right;
            }
          }
        }
        // 评论
        .teax{
          resize: none;
          height:123px;
          width:592px;
          margin-top: 20px;
        }
        .setPl{
          width:594px;
          margin-top: 36px;
          .Both;
          &>div{
            float: left;
          }
          .icon{
            font-size: 24px;
            line-height: 40px;
          }
          .i_study{
            line-height: 40px;
            margin: 0 165px 0 16px;
          }
          .i_btn{
            float: right;
            width:120px;
            height:40px;
            background: #FAC62E;
            line-height: 40px;
            text-align: center;
            color:@col333;
            cursor: pointer;
          }
        }
        hr{
          margin:35px 0 35px -30px;
          border-top: 1px solid #808080 !important;
        }
        .group_all{
          margin-top: 21px;
          padding-bottom: 35px;
          .img{
            height:64px;
            width:64px;
            border-radius: 50%;
            background: @red;
            float: left;
          }
          .detail_group{
            overflow: hidden;
            box-sizing: border-box;
            padding-left: 16px;
            border-bottom: 1px solid #808080;
            .pho{
              color:@col333;
              margin-top: 5px;
              font-size: 16px;
              font-weight:500;
            }
            .photime{
              color:@col333;
              margin-top: 20px;
            }
            .pl{
              color:@txt;
              margin-top: 39px;
            }
            .pl_img{
              margin: 35px 0 29px 0;
              max-width: 600px;
              max-height: 400px;
            }
          }
        }
      }
    }
    .tj_content {
      float: right;
      width: 347px;
      .teacher {
        height: 403px;
        width: 347px;
        background: white;
        border-radius: 6px;
        .tea_title {
          height: 54px;
          background: @mainCol;
          font-size: 20px;
          line-height: 54px;
          text-align: center;
          color: #fff;
        }
        .tea_Photo {
          .photo {
            width: 115px;
            height: 107px;
            background: red;
            float: left;
            margin: 17px 0 0 20px;
          }
          .txt {
            float: left;
            div:first-child {
              margin: 42px 0 0 45px;
            }
            div:last-child {
              margin: 21px 0 0 45px;
            }
          }
        }
        .text_long {
          padding: 0 23px;
          box-sizing: border-box;
          margin-top: 130px;
          line-height: 25px;
          color: @txt;
        }
      }
      .recom {
        overflow: hidden;
        margin: 62px 0 42px 0;
        div:first-child {
          color: @col333;
          float: left;
          font-size: 20px;
        }
        div:last-child {
          float: right;
          font-size: 16px;
          color: @mainCol;
          line-height: 26px;
          cursor: pointer;
        }
      }
      .changes {
        height: 239px;
        width: 326px;
        margin: 38px auto 0 auto;
        border-radius: 6px;
        background: white;
        .changes_img {
          width: 326px;
          height: 173px;
          background: red;
        }
        .changes_txt {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 18px 22px 0 22px;
          box-sizing: border-box;
        }
      }
      .moreAndmore {
        text-align: center;
        color: @col333;
        font-size: 29px;
        margin-top: 67px;
      }
      hr {
        border-top: 1px solid #808080;
        margin-top: 23px;
      }
      .swi {
        position: relative;
        overflow: hidden;
        margin-top: 55px;
        width: 347px;
        height: 362px;
        background: #fab74c;
        .swiper-wrapper{
            height:100%;
            width:100%;
            .swiper-slide{
                height:100%;
            width:100%;
            }
        }
      }
    }
  }
}
.Feiqi{
    height:35px;
    width:100%;
    background: white;
}
</style>

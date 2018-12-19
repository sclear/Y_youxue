<template>
  <div class="player">
    <sitmap :sitmap="sitmap"></sitmap>
    <div class="play">
      <div class="vdo">
        <div class="title">Excel —基础工具的使用01</div>
        <div class="video">video</div>
      </div>
      <div class="discriped">
        <div class="group_btn">
          <div @click="swichIndex(true)" :class="choseIndex?'chose':''">课程信息</div>
          <div @click="swichIndex(false)" :class="choseIndex?'':'chose'">课程目录</div>
        </div>
        <div class="content">
          <div v-if="choseIndex" class="msg">
            <div
              class="msg_detail"
            >本课程主要介绍excel中各种工具、表格的应用，让你即使对这款办公软件零基础，也能在学习了这门课程以后，能够快速上手使用这款软件 。真正实现从小白到高手的转变。</div>
            <div>学习人数：222人</div>
            <div>更新时间：2018-12-11</div>
            <div>视频时长：30分钟</div>
            <div>使用工具</div>
            <div>插入 页面布局 视图</div>
            <div>快捷键</div>
            <div>CTRL + C</div>
          </div>
          <div v-if="!choseIndex" class="ds">
            <div v-for="(item,index) in list" :key="index" class="group">
              <div @click=" item.chose = !item.chose " class="title">
                {{item.title}}
                <span>icon</span>
              </div>
              <div
                v-if="item.chose"
                v-for="(items,indexs) in item.children"
                :key="indexs"
                class="class_detail"
              >
                {{items.class}}
                <span>icon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottoms">
      <div class="coll">
        <div class="share">icon 分享</div>
        <div class="sc">icon 收藏</div>
        <div class="exptxt">我的学习进度</div>
        <div class="exp"> <span v-exp='50'></span> </div>
      </div>
      <div class="study_class">
        <div class="study_time">24课时</div>
        <div class="after_time">已学习1课时</div>
        <div class="goOn">继续学习</div>
      </div>
    </div>
    <div class="mt20"></div>
    <foots></foots>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sitmap: [
        "首页",
        "24节课，实现Excel从小白到高手的转变",
        "基础工具的使用01"
      ],
      choseIndex: false,
      list: [
        {
          title: "第一部分 Excel基础工具的认识与使用",
          chose: false,
          children: [
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            }
          ]
        },
        {
          title: "第一部分 Excel基础工具的认识与使用",
          chose: false,
          children: [
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            }
          ]
        },
        {
          title: "第一部分 Excel基础工具的认识与使用",
          chose: false,
          children: [
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            },
            {
              class: "第1课时：基础工具01"
            }
          ]
        }
      ]
    };
  },
  components: {
    sitmap: () => import("./../common/sitmap.vue"),
    foots: () => import('./../common/foot.vue')
  },
  methods: {
    swichIndex(res) {
      this.choseIndex = res;
    }
  },
};
</script>

<style lang='less' scoped >
.player {
  background: @bgcol;
  width: 100%;
  padding: 18px 0 20px 0;
  .play {
    width: 1200px;
    margin: 25px auto 0 auto;
    background: white;
    .Both;
    .vdo {
      width: 920px;
      float: left;
      background: blanchedalmond;
      .title {
        height: 92px;
        padding-left: 29px;
        box-sizing: border-box;
        line-height: 92px;
        color: @txt;
        font-size: 20px;
      }
      .video {
        height: 473px;
        background: red;
      }
    }
    .discriped {
      overflow: hidden;
      .group_btn {
        height: 92px;
        div {
          float: left;
          height: 92px;
          line-height: 92px;
          text-align: center;
          color: @col333;
          width: 50%;
          cursor: pointer;
        }
      }
      .content {
        height: 473px;
        overflow: auto;
        width: 100%;
        color: @txt;
        & > div {
          width: 100%;
        }
        .msg {
          & > div {
            padding: 0 40px;
            margin-top: 12px;
          }
          .msg_detail {
            padding: 0 13px;
            font-size: 14px;
            line-height: 22px;
            margin-top: 33px;
          }
        }
        .ds {
          .group {
            .title {
              cursor: pointer;
              padding-left: 13px;
              color: @col333;
              box-sizing: border-box;
              font-size: 13px;
              margin: 38px 0 22px 0;
              position: relative;
              span {
                position: absolute;
                right: 10px;
              }
            }
            .class_detail {
              cursor: pointer;
              color: @txt;
              font-size: 12px;
              box-sizing: border-box;
              padding-left: 40px;
              margin-top: 15px;
              position: relative;
              span {
                position: absolute;
                right: 70px;
              }
            }
          }
        }
      }
    }
  }
  .bottoms {
    margin:0 auto;
    width:1200px;
    .Both;
    .coll {
      margin-top: 30px;
      & > div {
        color: @col333;
        float: left;
      }
      .sc {
        margin-left: 32px;
      }
      .exptxt {
        margin-left: 590px;
      }
      .exp {
        background: white;
        height: 7px;
        width: 290px;
        position: relative;
        top:6px;
        left:10px;
        span{
          position: absolute;
          left:0;
          height:100%;
          background:#FAC62E;
        }
      }
    }
    .study_class{
      box-sizing: border-box;
      padding: 20px 0 0 890px;
      color:@txt;
      .Both;
      &>div{
        float: left;
      }
      .after_time{
        margin-left: 20px;
      }
      .goOn{
        margin-left: 90px;
      }
    }
  }
}
.chose {
  background: @mainCol !important;
  color: white !important;
}
.mt20{
  height:40px;
  width:100%;
  background: white;
  margin-top: 20px;
}
</style>

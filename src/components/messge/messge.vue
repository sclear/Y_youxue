<template>
  <div class="messge">
    <sitmap class="sitMap" :sitmap="sitmap"></sitmap>
    <div class="box">
      <div class="content">
        <div v-for="(item,index) in list" :key="index" class="detail">
          <div class="title">{{item.title}} <span class="dot">●</span></div>
          <div class="msg">
            <div @click="seeMsg(index)" class="showMsg">{{item.detail | return_txt}}</div>
            <div>icon</div>
          </div>
        </div>
      </div>
    </div>
    <foots class="mt"></foots>
    <!-- 查看信息 -->
    <showMsg v-if="model" @CLOSE='CLOSE' :tableModel='tableModel'></showMsg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sitmap: ["首页", "站内信"],
      model:false,
      list:[
          {
              title:'站内消息',
              detail:'亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……'
          },
          {
              title:'站内消息',
              detail:'亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……'
          },
          {
              title:'站内消息',
              detail:'亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……'
          },
          {
              title:'站内消息',
              detail:'亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……亲爱的用户，欢迎你注册某某教育视频网站。我们将会为你提供优质的教育视频，让你能够学习到真下的知识……'
          },
      ],
      tableModel:{}
    };
  },
  methods: {
    CLOSE() {
        this.model = !this.model;
    },
    seeMsg(res) {
        this.CLOSE(),
        this.tableModel = JSON.parse(JSON.stringify(this.list[res]))
    }
  },
  components: {
    foots: () => import("./../common/foot.vue"),
    sitmap: () => import("./../common/sitmap.vue"),
    showMsg: () => import('./showmsg/showMsg.vue')
  }
};
</script>

<style lang='less' scoped >
.sitMap {
  margin: 24px auto 23px auto !important;
}
.chose {
  color: @mainCol !important;
  border-left: 5px solid @mainCol !important;
}
.box {
  padding: 30px 0 46px 0;
  width: 100%;
  background: @bgcol;
  .content {
    width: 1200px;
    margin: 0 auto;
    background: white;
    box-sizing: border-box;
    padding: 46px 0 202px 146px;
    .detail {
      margin-top: 30px;
      .title {
        color: @col333;
        font-size: 20px;
        font-weight: 400;
        position: relative;
        .dot{
            position: absolute;
            color:@red;
            margin-top: -10px;           
        }
      }
      .msg {
        margin: 10px 0 0 16px;
        width:830px;
        padding: 12px 0 12px 7px;
        font-size: 12px;
        color: @txt;
        background: @bgcol;
        .Both;
        .showMsg{
            cursor: pointer;
        }
        div:first-child {
          float: left;
        }
        div:last-child {
          float: right;
        }
      }
    }
  }
}
.mt {
  margin-top: 37px;
}
</style>

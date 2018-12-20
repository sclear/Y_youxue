<template>
  <div class="center">
      <sitmap class="sitmap" :sitmap='sitmap'></sitmap>
      <div class="box">
          <div class="content">
              <div class="menu">
                  <div :class="menu === 0?'choseMenu':''" @click="swichMenu(0)">个人信息</div>
                  <div :class="menu === 1?'choseMenu':''"  @click="swichMenu(1)">课程管理</div>
                  <div :class="menu === 2?'choseMenu':''"  @click="swichMenu(2)">订单管理</div>
                  <div :class="menu === 3?'choseMenu':''"  @click="swichMenu(3)">我的收藏</div>
              </div>
              <div class="group">
                  <router-view></router-view>
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
        sitmap:['首页','个人中心'],
        menu:0,
    }
  },
  components: {
      sitmap: () => import('./../common/sitmap.vue'),
      foots: () => import('./../common/foot.vue'),
  },
  methods: {
      swichMenu(res) {
          this.menu = res;
          switch(this.menu){
              case 0:this.$router.push('/center/personal'); break;
              case 1:this.$router.push('/center/classs'); break;
              case 2:this.$router.push('/center/order'); break;
              case 3:this.$router.push('/center/coll'); break;
          }
      }
  }
}
</script>

<style lang='less' scoped >
.box{
    width:100%;
    padding:28px 0 46px 0;
    background: @bgcol;
    .content{
        margin: 0 auto;
        width:1200px;
        .Both;
        .menu{
            float: left;
            background: white;
            width:160px;
            height:583px;
            div{
                width:100%;
                height:50px;
                margin-top:50px;
                line-height: 50px;
                text-align:center;
                color:@col333;
                cursor: pointer;
                transition: all .3s linear;
                &:hover{
                    color:#fff;
                    background: @mainCol;
                }
            }
            div:first-child{ margin-top: 0; }
            .choseMenu{
                color:#fff;
                background: @mainCol;
            }
        }
        .group{
            width:945px;
            height:580px;
            float: right;
            background:white;
            overflow: auto;
        }
    }
}
.sitmap{
    margin:24px auto 23px auto !important;
}
.foots{
    margin-top: 30px;
}
</style>

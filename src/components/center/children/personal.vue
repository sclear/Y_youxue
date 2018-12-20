<template>
  <div class="personal">
      <div class="base">
          <div class="title">基本资料</div>
          <div class="port">
              <div>头像:</div>
              <div><img src="./../../../assets/logo.png" alt=""></div>
          </div>
          <div class="login">
              <div>登录账号:</div>
              <div>微信登录</div>
          </div>
          <div class="user">
              <div>用户名:</div>
              <div class="userNum">1233456</div>
              <div class="change">修改用户名</div>
          </div>
          <div class="save">保存</div>
      </div>
      <hr>
      <div class="classify">
          <div>兴趣爱好</div>
          <div>
              <div class="dbg">重新选择</div>
              <div class="gourp_chose">
                  <div>英语语法</div>
                  <div>英语六级</div>
                  <div>四六级考试</div>
              </div>
          </div>
      </div>
      <div class="content">
          <div>测评记录</div>
          <div>
              <div class="dbg">重新选择</div>
              <div class="getF"> <span>2018-5-2</span> <span>英语水平中等等级</span> </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
      foots: () => import('./../../common/foot.vue')
  }
}
</script>

<style lang='less' scoped >
.personal{
    padding-top:29px;
    color:@txt;
    .base{
        padding-left: 100px;
        box-sizing: border-box;
        .title{
            font-size: 20px;
            color:@col333;
            font-weight: 400;
            border-bottom: 4px solid @mainCol;
            display: inline-block;
        }
        .port{
            margin-top: 31px;
            .Both;
            div:first-child{
                float: left;
                line-height: 60px;
                width:80px;
                text-align: right;
            }
            div:last-child{
                float: left;
                height:60px;
                width:60px;
                border-radius: 50%;
                margin-left: 70px;
                overflow: hidden;
                img{
                    width:100%;
                    height:100%;
                }
            }
            
        }
        .login{
            margin-top: 10px;
            .Both;
            div:first-child{
                float: left;
                line-height: 60px;
                width:80px;
                text-align: right;
            }
            div:last-child{
                float: left;
                margin-left: 70px;
                line-height: 60px;
            }
            
        }
        .user{
            margin-top: 10px;
            .Both;
            div:first-child{
                float: left;
                line-height: 60px;
                width:80px;
                text-align: right;
            }
            .userNum{
                float: left;
                margin-left: 70px;
                line-height: 60px;
            }
            .change{
                float: left;
                margin-left: 35px;
                line-height: 60px;
                color:@dtxt;
            }
            
        }
        .save{
            height:43px;
            width:115px;
            line-height: 43px;
            text-align: center;
            color:@txt;
            background: @yel;
            font-size: 16px;
            margin: 35px auto auto 190px;
        }
    }
    hr{
        border-top: 1px solid #D3D3D3;
        margin: 24px auto 29px auto;
    }
    .classify{
        .Both;
        &>div:first-child{
            width:200px;
            text-align: right;
            float: left;
        }
        &>div:last-child{
            margin-left: 50px;
            float: left;
            .gourp_chose{
                padding:10px 0;
                .Both;
                &>div{
                    float: left;
                    color:@col333;
                    margin-left: 20px;
                }
                &>div:first-child{
                    margin-left: 15px;
                }
            }
        }
    }
    .content{
        .Both;
        &>div:first-child{
            width:200px;
            text-align: right;
            float: left;
        }
        &>div:last-child{
            margin-left:55px;
            float: left;
            .getF{
                padding:10px 0 15px 15px;
                span{
                    margin-right: 51px;
                }
            }
        }
    }
}
.dbg{
    color:@dtxt;
}
</style>

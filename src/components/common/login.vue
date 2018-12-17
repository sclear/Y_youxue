<template>
  <div>
    <div class="showdn"></div>
    <div class="login">
      <div class="head">登录</div>
      <div class="phone">
        <span>手机号</span>
        <input type="text">
      </div>
      <div class="phone">
        <span>密码</span>
        <input type="password">
      </div>
      <div class="pass">
        <div class="forget">
          <input type="checkbox">
          <span>记住密码</span>
        </div>
        <div class="forgetPass">忘记密码?</div>
      </div>
      <div class="login_sign">
        <div class="loginBtn">立即登录</div>
        <div class="sign">没有账号去  <span>注册</span></div>
      </div>
      <div class="chose">
          <input type="checkbox">
          <span>勾选代表你同意《注册声明》 《版权声明》</span>
      </div>
      <hr class="hr">
      <div class="fast_group">
          <div class="fastLogin">快速登录</div>
          <div>qq</div>
          <div>wx</div>
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

.login {
  animation: login .6s linear forwards;
  width: 649px;
  height: 450px;
  border-radius: 8px;
  background: white;
  position: fixed;
  top: 50%;
  margin-top: -225px;
  left: 50%;
  margin-left: -325px;
  .head {
    height: 89px;
    width: 100%;
    background: #1dbca6;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-align: center;
    line-height: 89px;
    font-size: 39px;
    color: #fbfbfb;
  }
  .phone {
    width: 540px;
    margin: 0 auto;
    font-size: 16px;
    margin-top: 24px;
    span {
      width: 15%;
      text-align: right;
      display: inline-block;
    }
    input {
      height: 38px;
      outline: none;
      width: 60%;
      margin-left: 2%;
      border-radius: 4px;
      border: 1px solid #a0a0a0;
    }
  }
  .phone:first-child {
    margin-top: 40px;
  }
  .pass {
    overflow: hidden;
    margin-top: 20px;
    .forget {
      float: left;
      margin-left: 180px;
      input {
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
    .forgetPass {
      margin-right: 180px;
      float: right;
    }
  }
  .login_sign {
      overflow: hidden;
      margin-top: 30px;
    .loginBtn {
      float: left;
      height: 40px;
      width: 100px;
      background: #1dbca6;
      line-height: 40px;
      color: #ffffff;
      text-align: center;
      margin-left: 240px;
      cursor: pointer;
    }
    .sign{
        float: left;
        margin-top: 20px;
        margin-left: 30px;
        span{
            color:#1DBCA6;
            font-size: 14px;
        }
    }
  }
  .chose{
      margin-top: 10px;
      text-align: center;
      input,span{
          vertical-align: middle;
      }
  }
  .hr{
      border-top:1px solid #1DBCA6;
      margin-top: 20px;
  }
  .fast_group{
      display: flex;
      justify-content: center;
      div{
          margin:20px;
      }
      .fastLogin{
          color:#1DBCA6;
          cursor: pointer;
        //   line-height: 50px;
      }
  }

}
.showdn {
  animation: boxs .3s linear forwards;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.45);
}
</style>

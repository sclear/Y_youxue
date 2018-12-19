<template>
  <div class="cus">
    <header>
      <div class="logo"></div>
      <div class="serch">
        <input placeholder="搜索课程或者老师" type="text">
        <span class="iconfont">&#xe632;</span>
      </div>
      <div class="hint">
        <i class="iconfont hin">&#xe600;</i>
      </div>
      <div class="center">个人中心</div>
      <div class="login_sign"><span>登录</span>|<span>注册</span></div>
    </header>
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
header {
  width: 1300px;
  margin: 0 auto;
  height: 118px;
  box-sizing: border-box;
  padding-top: 33px;
  color:@txt;
  & > div {
    float: left;
  }
  .logo {
    height: 98px;
    width: 166px;
    background: burlywood;
    margin-top: -25px;
  }
  .serch {
    height: 52px;
    width: 760px;
    margin-left: 70px;
    & > input {
      float: left;
      width: 655px;
      height: 52px;
      border: none;
      outline: none;
      border: 1px solid rgba(181, 181, 181, 1);
      border-right: none;
      padding-left: 73px;
      box-sizing: border-box;
    }
    & > span {
      float: left;
      width: 104px;
      height: 100%;
      background: rgba(250, 198, 46, 1);
      font-size: 40px;
      text-align: center;
      line-height: 52px;
      color:rgb(241, 234, 234);
      cursor: pointer;
    }
  }
  .login_sign,
  .hint,
  .center {
    line-height: 52px;
    float: right;
    margin-right: 30px;
  }
  .login_sign{
    span{
      margin:auto 2px;
      cursor: pointer;
    }
  }
}
.hin{
  font-size: 34px;
  color:@txt;
  cursor: pointer;
}
//白色背景 阻止影响
.cus{
    background: white;
}
</style>

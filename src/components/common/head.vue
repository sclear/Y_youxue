<template>
  <header>
      <div class="logo"></div>
      <div class="serch">
          <input placeholder="搜索课程或者老师" type="text">
          <span>icon</span>
      </div>
      <div class="hint"><i>icon</i></div>
      <!-- <div class="login_sign">登录|注册</div> -->
      <div class="center">个人中心</div>
      <div class="login_sign">登录|注册</div>

      <!-- <div class="hint"><i>icon</i></div> -->
  </header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang='less' scoped >
header{
    width:1300px;
    margin:0 auto;
    height:118px;
    box-sizing: border-box;
    padding-top: 33px;
    & > div{
        float: left;
    }
    .logo{
        height:98px;
        width:166px;
        background:burlywood;
        margin-top: -25px;
    }
    .serch{
        height:52px;
        width:760px;
        margin-left: 70px;
        & > input{
            float: left;
            width:655px;
            height:52px;
            border:none;
            outline: none;
            border:1px solid rgba(181,181,181,1);
            border-right: none;
            padding-left: 73px;
            box-sizing: border-box;
        }
        & > span{
            float: left;
            // display: inline-block;
            width:104px;
            height:100%;
            background:rgba(250,198,46,1);
        }
    }
    .login_sign,.hint,.center{
        line-height: 52px;
        float: right;
        margin-right: 30px;
    }
}
</style>

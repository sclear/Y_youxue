<template>
  <div>
    <div class="showdn"></div>
    <div class="login">
      <div class="head">快速登录</div>
      <div class="chose">选择登录方式</div>
      <div class="fastLogin">
          <div>1</div>
          <div>1</div>
      </div>
      <div class="deal">登录即代表同意 <span>《用户服务协议》</span></div>
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
  height: 500px;
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
    font-size: 24px;
    color: #fbfbfb;
  }
  .chose{
      color:@txt;
      margin: 53px 0 0 84px;
  }
  .fastLogin{
      height:150px;
      width:330px;
      margin: 20px auto 0 auto;
      div{
          background: red;
      }
      div:first-child{
          height:150px;
          float: left;
          width:150px;
      }
      div:last-child{
          height:150px;
          float: right;
          width:150px;
      }
  }
  .deal{
      text-align: center;
      margin-top: 60px;
      span{
          color:@mainCol;
          cursor: pointer;
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

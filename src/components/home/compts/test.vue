<template>
  <div class="tests">
    <div class="showd"></div>
    <div class="textDmemo">
      <div class="close">X</div>
      <div class="choseF">根据您选择的分类，请您完成以下测评，提交以后我们将会为您推荐适合你的课程，谢谢！</div>
      <div class="action">测评</div>
      <div class="topic_gourp">
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
        <div class="toppic">
          <div class="title">1、—Tom: Nice to meet you! ( )</div>
          <div class="return">Tony:_________</div>
          <div class="choses">
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
            <span>A:Thank you</span>
          </div>
        </div>
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
.tests {
  .showd {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.45);
  }
  .textDmemo {
    margin: 0 auto;
    width: 849px;
    // height: 500px;
    padding-bottom: 30px;
    background: white;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -424.5px;
    border-radius: 7px;
    .close {
      box-sizing: border-box;
      text-align: right;
      padding: 10px 10px 0 0;
    }
    .choseF,
    .action {
      border-left: 4px solid #1dbca6;
      margin-left: 50px;
      padding-left: 15px;
      box-sizing: border-box;
      font-size: 16px;
      color: #262627;
      margin-top: 9px;
    }
    .topic_gourp {
      width: 100%;
      padding: 0 50px;
      box-sizing: border-box;
      .toppic {
        margin-top: 40px;
        font-size: 14px;
        .return {
          margin:10px 0 0 20px;
        }
        .choses {
          margin:10px 0 0 20px;
          span {
            margin-left: 50px;
          }
          span:first-child {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>

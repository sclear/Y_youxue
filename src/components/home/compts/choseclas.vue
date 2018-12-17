<template>
  <div class="choseclass">
      <div class="chose">
          <div class="Close">X</div>
          <div class="bor_left">选择你要学习的课程分类</div>
          <div class="bor_left">至少选择1个，最多选择3个，可随时调整。我们将会根据你选择的分类请你填写一份测评！</div>
          <div class="bor_left">所有课程分类</div>
          <div class="group">
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
              <div class="detail">小初课程</div>
          </div>
          <div class="next">选好了,下一步</div>
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

  }
}
</script>

<style lang='less' scoped >
.choseclass{
    height:100vh;
    width:100vw;
    position:fixed;
    top:0;
    left:0;
    background: rgba(0, 0, 0, 0.45);
    animation: boxs .3s linear forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    .chose{
        animation: chose .3s linear forwards;
        width:849px;
        height:600px;
        background:white;
        border-radius: 6px;
        .Close{
            padding:10px 10px 0 0;
            text-align: right;
            font-weight: 400px;
        }
        .bor_left{
            border-left: 4px solid #1DBCA6;
            margin-left: 50px;
            padding-left: 15px;
            box-sizing: border-box;
            font-size: 16px;
            color:#262627;
            margin-top: 9px;
        }
        .bor_left:last-child{
            margin-top: 18px;
        }
        .group{
            width:calc(~"100% - 100px");
            margin-left: 50px;
            // background: #1DBCA6;
            height:300px;
            margin-top: 40px;
            .detail{
                float: left;
                margin:8px;
                background:#EDEDEF;
                border-radius: 7px;
                width:90px;
                height:30px;
                line-height: 30px;
                font-size: 16px;
                text-align: center;
                color:#262627;
            }
        }
        .next{
            height:40px;
            width:200px;
            background: #1DBCA6;
            font-size: 18px;
            margin:0 auto;
            color:white;
            text-align: center;
            line-height: 40px;
            border-radius: 6px;
            margin-top: 40px;
            cursor: pointer;
        }
    }
}
</style>

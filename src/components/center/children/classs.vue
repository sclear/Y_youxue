<template>
  <div class="classs">
    <div class="menu">
      <span @click="swichMenu(0)" :class="chose === 0?'chose':''">已购课程</span>
      <span @click="swichMenu(1)" :class="chose === 1?'chose':''">正在学习</span>
      <span @click="swichMenu(2)" :class="chose === 2?'chose':''">已学课程</span>
    </div>
    <div class="group">
      <div class="fir">1</div>
      <div class="sec">
        <div class="sec_title">24节课，实现EXCEL小白到高手的转变</div>
        <div class="sec_stu">24课时
          <span>|</span> 30分钟每课时
        </div>
      </div>
      <div class="thr">
        <div class="yel">正在学习</div>
        <div v-if="0" class="red">已经学习</div>
        <div class="after_stu">已学 <span class="redsum">1</span> 课时，还有 <span class="redsum">20</span>  个课时待学</div>
      </div>
    </div>
    <div class="group">
      <div class="fir">1</div>
      <div class="sec">
        <div class="sec_title">24节课，实现EXCEL小白到高手的转变</div>
        <div class="sec_stu">24课时
          <span>|</span> 30分钟每课时
        </div>
      </div>
      <div class="thr">
        <div class="yel">正在学习</div>
        <div v-if="0" class="red">已经学习</div>
        <div class="after_stu">已学 <span class="redsum">1</span> 课时，还有 <span class="redsum">20</span>  个课时待学</div>
      </div>
    </div>
    <div class="group">
      <div class="fir">1</div>
      <div class="sec">
        <div class="sec_title">24节课，实现EXCEL小白到高手的转变</div>
        <div class="sec_stu">24课时
          <span>|</span> 30分钟每课时
        </div>
      </div>
      <div class="thr">
        <div class="yel">正在学习</div>
        <div v-if="0" class="red">已经学习</div>
        <div class="after_stu">已学 <span class="redsum">1</span> 课时，还有 <span class="redsum">20</span>  个课时待学</div>
      </div>
    </div>
    <div class="group">
      <div class="fir">1</div>
      <div class="sec">
        <div class="sec_title">24节课，实现EXCEL小白到高手的转变</div>
        <div class="sec_stu">24课时
          <span>|</span> 30分钟每课时
        </div>
      </div>
      <div class="thr">
        <div class="yel">正在学习</div>
        <div v-if="0" class="red">已经学习</div>
        <div class="after_stu">已学 <span class="redsum">1</span> 课时，还有 <span class="redsum">20</span>  个课时待学</div>
      </div>
    </div>
    <div class="group">
      <div class="fir">1</div>
      <div class="sec">
        <div class="sec_title">24节课，实现EXCEL小白到高手的转变</div>
        <div class="sec_stu">24课时
          <span>|</span> 30分钟每课时
        </div>
      </div>
      <div class="thr">
        <div class="yel">正在学习</div>
        <div v-if="0" class="red">已经学习</div>
        <div class="after_stu">已学 <span class="redsum">1</span> 课时，还有 <span class="redsum">20</span>  个课时待学</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chose: 0
    };
  },
  methods: {
    swichMenu(res) {
      this.chose = res;
    }
  }
};
</script>

<style lang='less' scoped >
.classs {
  padding: 24px 0 0 100px;
  box-sizing: border-box;
  .menu {
      margin-bottom: 50px;
    span {
      display: inline-block;
      border-bottom: 4px solid white;
      font-size: 20px;
      margin-right: 72px;
      cursor: pointer;
    }
    .chose {
      border-bottom: 4px solid @mainCol;
    }
  }
  .group {
    height: 90px;
    margin-bottom: 32px;
    padding-bottom: 45px;
    border-bottom: 1px solid #BFBFBF;
    & > div {
      .Both;
      float: left;
    }
    .fir {
      width: 145px;
      height: 90px;
      background: @mainCol;
    }
    .sec {
      height: 90px;
      width: 300px;
      position: relative;
      left:30px;
      .sec_title {
        font-size: 16px;
        color: @col333;
        position: absolute;
        top: 0;
      }
      .sec_stu {
        position: absolute;
        font-size: 12px;
        color: @txt;
        bottom: 0;
      }
    }
    .thr {
        text-align: center;
        margin-left: 50px;
      & > div:first-child {
        margin-top: 21px;
      }
      & > div:last-child {
        margin-top: 27px;
      }
      .yel{
          font-size: 20px;
          color:@yel;
      }
      .red{
          font-size: 20px;
          color:@red;
      }
      .after_stu{
          color:@txt;
      }
    }
  }
}
.redsum{
    color:@red;
}
</style>

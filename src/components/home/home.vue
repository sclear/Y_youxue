<template>
  <div class="home">
    <!-- header -->
    <headr></headr>
    <div class="banner_nav">
      <div class="swiper"></div>
      <div class="nav">
        <nav>
          <div class="title">课程分类</div>
          <ul>
            <li>小初课程
              <div class="detail">
                
              </div>
            </li>
            <li>高中课程</li>
            <li>大学课程</li>
            <li>考研课程</li>
            <li>成人课程</li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- 更多课程 -->
    <more></more>
    <!-- 推荐课程 -->
    <refer></refer>
    <!-- 精品课程 -->
    <goods></goods>
    <!-- 热门课程 -->
    <hot></hot>
    <!-- 广告 -->
    <ad></ad>
    <!-- 相关介绍 -->
    <letter></letter>
    <!-- footer -->
    <foots></foots>
    <!-- 登录 -->
    <login v-if="login"></login>
    <!-- 选择课程 -->
    <choseclass v-if="chose"></choseclass>
    <!-- 评测 -->
    <test v-if="test"></test>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login:false,
      chose:false,
      test:false,
    };
  },
  components: {
    'headr': () => import('./../common/head.vue'),
    'foots': () => import('./../common/foot.vue'),
    'login': () => import('./../common/login.vue'),
    'more': () => import('./compts/more.vue'),
    'refer': () => import('./compts/refer.vue'),
    'goods': () => import('./compts/goods.vue'),
    'hot': () => import('./compts/hot.vue'),
    'ad': () => import('./compts/ad.vue'),
    'letter': () => import('./compts/letter.vue'),
    'choseclass': () => import('./compts/choseclas.vue'),
    'test': () => import('./compts/test.vue'),
  }
};
</script>

<style lang='less' scoped >
header {
  height: 118px;
}
.home{
  // position: relative;
}
.banner_nav {
  height: 577px;
  position: relative;
  .swiper {
    height: 577px;
    width: 100%;
    background: burlywood;
  }
  .nav {
    position: absolute;
    bottom: 0;
    height: 120px;
    width: 100%;
    background: rgba(0, 0, 0, 0.32);
    nav {
      height: 120px;
      width: 1200px;
      margin: 0 auto;
      .title {
        height: 37px;
        float: left;
        border-left: 5px solid rgba(51, 204, 153, 1);
        margin-top: 42px;
        line-height: 37px;
        box-sizing: border-box;
        padding-left: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        font-size: 29px;
      }
      ul {
        float: right;
        width:793px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-top: 60px;
        li {
          list-style: none;
          font-weight:400;
          color:rgba(255,255,255,1);
          font-size: 16px;
          padding:8px 20px;
          cursor: pointer;
          transition: all .1s linear;
          &:hover{
            background: #FFFFFF;
            color:#1DBCA6;
          }
        }
      }
    }
  }
}
</style>

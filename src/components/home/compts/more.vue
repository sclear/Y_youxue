<template>
  <div class="more">
    <div class="curse_gourp">
      <div class="curse"></div>
      <div class="content">英语口语</div>
    </div>
    <div class="curse_gourp">
      <div class="curse"></div>
      <div class="content">英语口语</div>
    </div>
    <div class="curse_gourp">
      <div class="curse"></div>
      <div class="content">英语口语</div>
    </div>
    <div class="curse_gourp">
      <div class="curse"></div>
      <div class="content">英语口语</div>
    </div>
    <div class="curse_gourp">
      <div class="curse"></div>
      <div class="content">英语口语</div>
    </div>
    <div class="curse_gourp">
      <div class="curse"></div>
      <div class="content">英语口语</div>
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
.more {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 15px 0 80px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .curse_gourp {
    width: 380px;
    font-size: 20px;
    color: #333;
    margin-top: 49px;
    .curse {
      height: 173px;
      width: 380px;
      background: bisque;
    }
    .content {
      margin-top: 27px;
      text-align: center;
    }
  }
}
</style>

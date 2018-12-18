<template>
  <div class="classify">
      <sitmap :sitmap='sitmap'></sitmap>
      <div class="content">
          <div class="box">
              <div class="menu">
                  <div class="chose_menu chose">考研英语</div>
                  <div class="chose_menu">考研英语</div>
                  <div class="chose_menu">考研英语</div>
                  <div class="chose_menu">考研英语</div>
              </div>
              <div class="class_group"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sitmap:['首页','考研课程']
    }
  },
  components: {
      sitmap: () => import("./../common/sitmap.vue"),
  }
}
</script>

<style lang='less' scoped >
.chose{
    color:@mainCol !important;
    border-left: 5px solid @mainCol !important;
}
.content{
    width:100%;
    background: @bgcol;
    margin-top: 23px;
    padding: 49px 0 51px 0;
    .box{
        width:1200px;
        margin: 0 auto;
        .menu{
            height:580px;
            width:182px;
            background: white;
            padding-top: 1px;
            .chose_menu{
                width:100px;
                padding-left: 22px;
                height:35px;
                line-height: 35px;
                color:@txt;
                font-size: 16px;
                border-left:5px solid white;
                margin:40px 0 0 40px;
            }
        }
    }
}
</style>

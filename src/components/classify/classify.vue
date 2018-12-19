<template>
  <div class="classify">
    <sitmap class="sitMap" :sitmap="sitmap"></sitmap>
    <div class="content">
      <div class="box">
        <div class="menu">
          <div @click='choseMenu(index)' v-for="(item,index) in list" :key="index" class="chose_menu" :class="indexs === index?'chose':''">{{item.name}}</div>
        </div>
        <div class="class_group">
            <div v-for="(item,index) in list[indexs].children" :key="index" class="class_detail">
                <div class="c_title">{{item.name}}</div>
                <div class="c_name">{{item.tea}}</div>
                <div class="c_npx">{{item.yearss}}</div>
                <div class="pri">
                    <div class="prize">￥{{item.money}}</div>
                    <div class="study">{{item.study}}人已报名</div>
                </div>
            </div>

        </div>
      </div>
    </div>
    <foots class="mt"></foots>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sitmap: ["首页", "考研课程"],
      list:[
          {
              name:'考研英语',
              children:[
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  }
              ]
          },
          {
              name:'考研英语',
              children:[
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  },
              ]
          },
          {
              name:'考研英语',
              children:[
                  {
                      name:'考研英语',
                      tea:'刘一老师',
                      yearss:'8年教学经验',
                      money:'666',
                      study:'66'
                  }
              ]
          },
      ],
      indexs:0,
    };
  },
  methods: {
      choseMenu(res) {
          this.indexs = res;
      }
  },
  components: {
    foots: () => import("./../common/foot.vue"),
    sitmap: () => import("./../common/sitmap.vue")
  }
};
</script>

<style lang='less' scoped >
.sitMap{
    margin:24px auto 23px auto !important;
}
.chose {
  color: @mainCol !important;
  border-left: 5px solid @mainCol !important;
}
.content {
  width: 100%;
  background: @bgcol;
  margin-top: 23px;
  padding: 49px 0 51px 0;
  .Both;
  .box {
    width: 1200px;
    margin: 0 auto;
    .menu {
      float: left;
      width: 182px;
      background: white;
      padding-bottom: 30px;
      .chose_menu {
        width: 100px;
        padding-left: 22px;
        height: 35px;
        line-height: 35px;
        color: @txt;
        font-size: 16px;
        border-left: 5px solid white;
        margin: 40px 0 0 40px;
        cursor: pointer;
      }
    }
    .class_group {
      float: right;
      width: 966px;
      background: white;
      height: auto;
      padding-bottom: 94px;
      .class_detail{
          width:267px;
          height:168px;
          box-shadow:0px 2px 6px 0px rgba(174,172,172,0.6);
          margin: 48px 0 0 55px;
          float: left;
          box-sizing: border-box;
          padding:18px 27px 0 26px;
          &>div{
              margin-bottom: 12px;
          }
          .c_title{
              color:@col333;
              font-size: 18px;
          }
          .c_name{
              color:@txt;
          }
          .c_npx{
              color:@txt;
          }
          .pri{
              .prize{
                  float: left;
                  font-size: 24px;
                  color:@red;
              }
              .study{
                  float: right;
                  color:@txt;
                  margin-top: 8px;
              }
          }
      }
    }
  }
}
.mt{
    margin-top: 37px;
}
</style>

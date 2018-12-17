<template>
  <div class="letter">
    <div class="title">相关介绍</div>&nbsp;
    <div class="group">
        <div class="txt">
            <div class="txt_group">
                <div class="txt_title">教育部颁发的高考新政策自2018年起正式实施</div>        
                <div class="see_detail">教育部颁发的高考新政策自2018年起正式实施社会的变化，所以教育部门一起在研讨如何改革高考制度。而这次……  <span class="btn">[详细]</span></div>

            </div>
            <div class="txt_group">
                <div class="txt_title">教育部颁发的高考新政策自2018年起正式实施</div>        
                <div class="see_detail">教育部颁发的高考新政策自2018年起正式实施社会的变化，所以教育部门一起在研讨如何改革高考制度。而这次……  <span class="btn">[详细]</span></div>

            </div>
            <div class="txt_group">
                <div class="txt_title">教育部颁发的高考新政策自2018年起正式实施</div>        
                <div class="see_detail">教育部颁发的高考新政策自2018年起正式实施社会的变化，所以教育部门一起在研讨如何改革高考制度。而这次……  <span class="btn">[详细]</span></div>

            </div>
        </div>
        <div class="img"></div>
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
.letter {
  width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 145px;
  &::after {
    content: "";
    height: 0;
    width: 0;
    display: block;
    clear: both;
  }
  .title {
    font-size: 29px;
    color: #262627;
    border-bottom: 2px solid #33cc99;
    padding-bottom: 5px;
    float: left;
  }
  .group{
      width:1180px;
      margin-left: 20px;
      height:451px;
      margin-top: 42px;
      .txt{
          float: left;
          width:696px;
          height:100%;
      }
      .img{
          width:367px;
          height:451px;
          float: right;
          background: bisque;
      }
      .txt_group{
          margin-top: 70px;
          .txt_title{
              color:#333333;
              font-size: 20px;
          }
          .see_detail{
              margin-top: 20px;
              color:#333333;
              font-size: 13px;
              line-height: 30px;
              .btn{
                  color:#1DBCA6;
                  cursor: pointer;
              }
          }
      }
      .txt_group:first-child{
          margin-top: 0 !important;
      }
  }
}
.mt0{
    margin-top: 0 !important;
}
</style>

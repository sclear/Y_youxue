<template>
  <div class="order">
      <div class="title">我的订单</div>
      <table border="1" cellspacing="0" cellpadding="0">
          <thead>
              <tr>
                  <td>订单编号</td>
                  <td>课程名称</td>
                  <td>实付金额</td>
                  <td>下单时间</td>
                  <td>状态</td>
                  <td>操作</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td class="max-w100">123456789987654321</td>
                  <td class="min-w150">24节课，实现EXCEL小白到高手的转变</td>
                  <td>￥689.00</td>
                  <td>
                      <div>2018-12-11</div>
                      <div class="mt15">08：00</div>
                  </td>
                  <td>购买成功</td>
                  <td>
                      <div>删除</div>
                      <div class="redTxt">立即评价</div>
                  </td>
              </tr>
              <tr>
                  <td class="max-w100">123456789987654321</td>
                  <td class="min-w150">24节课，实现EXCEL小白到高手的转变</td>
                  <td>￥689.00</td>
                  <td>
                      <div>2018-12-11</div>
                      <div class="mt15">08：00</div>
                  </td>
                  <td>购买成功</td>
                  <td>
                      <div>删除</div>
                      <div class="redTxt">立即评价</div>
                  </td>
              </tr>
              <tr>
                  <td class="max-w100">123456789987654321</td>
                  <td class="min-w150">24节课，实现EXCEL小白到高手的转变</td>
                  <td>￥689.00</td>
                  <td>
                      <div>2018-12-11</div>
                      <div class="mt15">08：00</div>
                  </td>
                  <td>购买成功</td>
                  <td>
                      <div>删除</div>
                      <div class="redTxt">立即评价</div>
                  </td>
              </tr>
          </tbody>
      </table>
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
.order{
    padding:24px 0 0 100px;
    box-sizing:border-box;
    .title{
        border-bottom: 4px solid #33CC99;
        font-size: 20px;
        display: inline-block;
        cursor: pointer;
        color:@col333;
    }
}
thead>tr>td{
    background: @bgcol;
    width:200px;
    height:39px;
    border:1px solid @bgcol;
    font-size: 14px;
    text-align: center;
}
tbody>tr>td{
    width:200px;
    height:39px;
    font-size: 14px;
    text-align: center;
    padding:30px 20px;
}
table tr th, table tr td { border-color:@bgcol; color:@txt;  }
.redTxt{
    color:@red;
    margin-top: 15px;
}
.max-w100{
    padding:auto 10px !important;
    // max-width: 20px;
}
.min-w150{
    // min-width: 100px;
}
table{
    border-collapse: collapse;
    border:1px solid @bgcol;
    margin-top: 31px;
}
</style>

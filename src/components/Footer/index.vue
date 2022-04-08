<template>
  <div class="footer-root">
      <div class="footer-up">
          <div class="footer-list">
              <h5>购物指南</h5>
              <a href="">购物流程</a>
              <a href="">会员介绍</a>
              <a href="">生活旅行</a>
              <a href="">常见问题</a>
              <a href="">大家电</a>
              <a href="">联系客服</a>
          </div>
          <div class="footer-list">
              <h5>配送方式</h5>
              <a href="">上门自提</a>
              <a href="">211限时达</a>
              <a href="">配送服务查询</a>
              <a href="">配送费收取标准</a>
              <a href="">海外配送</a>
          </div>
          <div class="footer-list">
              <h5>支付方式</h5>
              <a href="">货到付款</a>
              <a href="">在线支付</a>
              <a href="">分期付款</a>
              <a href="">公司转账</a>
          </div>
          <div class="footer-list">
              <h5>售后服务</h5>
              <a href="">售后政策</a>
              <a href="">价格保护</a>
              <a href="">退款说明</a>
              <a href="">返修/退换货</a>
              <a href="">取消订单</a>
          </div>
          <div class="footer-list">
              <h5>特色服务</h5>
              <a href="">夺宝岛</a>
              <a href="">DIY装机</a>
              <a href="">延保服务</a>
              <a href="">京东E卡</a>
              <a href="">京东通信</a>
              <a href="">京鱼座智能</a>
          </div>
          <div class="footer-list">
              <h5>京东自营覆盖区县</h5>
              <p>京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</p>
              <a href="" id='chakan'>查看详情</a>
          </div>
      </div>
      <div class="footer-down" >
          <a href="">关于我们</a>
          <span> | </span>
          <a href="">联系我们</a>
          <span> | </span>
          <a href="">联系客服</a>
          <span> | </span>
          <a href="">合作招商</a>
          <span> | </span>
          <a href="">商家帮助</a>
          <span> | </span>
          <a href="">营销中心</a>
          <span> | </span>
          <a href="">手机京东</a>
          <span> | </span>
          <a href="">友情链接</a>
          <span> | </span>
          <a href="">销售联盟</a>
          <span> | </span>
          <a href="">京东社区</a>
          <span> | </span>
          <a href="">风险监测</a>
          <span> | </span>
          <a href="">隐私政策</a>
          <span> | </span>
          <a href="">京东公益</a>
          <span> | </span>
          <a href="">English Site</a>
          <span> | </span>
          <a href="">Media & IR</a>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer-root{
        background-color: rgb(234 234 234);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        
    }
    .footer-up{
        height: 160px;
        overflow: hidden;
        border-bottom: 1px black solid;
        margin-bottom: 10px;
    }
    .footer-list{
        float: left;
        width: 198px;
    }
    .footer-list h5{
        height: 25px;
        font-weight: bolder;
    }
    .footer-list a{
        display: block;
        height: 20px;
        font-size: 13px;
    }
    #chakan{
        float: right;
    }
</style>
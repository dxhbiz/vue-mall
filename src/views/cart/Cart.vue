<template>
  <div>
    <div class="m-cartHd">
      <span class="logo">购物车</span>
      <span class="right"></span>
    </div>
    <div>
      <ul class="m-servicePolicy">
        <li class="item" v-for="(item, index) in serviceList" :key="index">
          <i class="u-icon u-icon-servicePolicy"></i>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="m-defaultPage m-defaultPage-noCart">
      <div class="container">
        <div class="img"></div>
        <div class="txt">去添加点什么吧</div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'

  export default {
    data () {
      return {
        serviceList: [
          {
            title: '30天无忧退货'
          },
          {
            title: '48小时快速退款'
          },
          {
            title: '满88元免邮费'
          }
        ]
      }
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 3)
    }
  }
</script>

<style scoped>
  .m-cartHd {
    height: 88px;
    padding: 0 30px;
    line-height: 88px;
    text-align: center;
    background-color: #fff;
    position: relative;
  }
  .m-cartHd .logo {
    display: inline-block;
    font-size: 36px;
  }
  .m-cartHd .right {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 30px;
  }
  .m-cartHd:after {
    content: '';
    position: absolute;
    background-color: #d9d9d9;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
    bottom: 0;
  }
  .m-servicePolicy {
    position: relative;
    z-index: 1;
    height: 70px;
    padding: 0 30px;
    background: #f4f4f4;
    display: -moz-flex;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
  }
  .m-servicePolicy .item {
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    font-size: 24px;
    color: #666;
  }
  .m-comment header, .m-servicePolicy .item {
    display: -moz-flex;
    -webkit-box-align: center;
  }
  .m-servicePolicy, .m-servicePolicy .item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
  }
  .m-defaultPage {
    top: 88px;
    z-index: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center;
  }
  .fixed, .m-defaultPage {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .m-defaultPage .container {
    position: absolute;
    top: -50px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 300px;
    margin: auto;
  }
  .m-defaultPage-noCart .img {
    background-image: url(../../assets/images/nullCart.png);
  }
  .m-defaultPage .img {
    display: inline-block;
    vertical-align: middle;
    width: 248px;
    height: 248px;
    margin-bottom: 8px;
    background-size: 248px 248px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .m-defaultPage .txt {
    font-size: 28px;
    line-height: 1;
    color: #999;
  }
  .m-servicePolicy .item .u-icon-servicePolicy, .m-servicePolicy .item .u-icon-servicePolicySolid {
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  .u-icon-servicePolicy {
    display: inline-block;
    vertical-align: middle;
    background-image: url(../../assets/images/dian.png);
    background-repeat: no-repeat;
    background-size: 10px 10px;
    width: 10px;
    height: 10px;
  }
</style>

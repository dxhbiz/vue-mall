<template>
  <div class="footer">
    <div class="footer-item" :class="footItems[0].itemClass" @click="goFooterPath(0)">
      <i class="icon" :class="footItems[0].iconClass"></i>
      <span class="txt">首页</span>
    </div>
    <div class="footer-item" :class="footItems[1].itemClass" @click="goFooterPath(1)">
      <i class="icon" :class="footItems[1].iconClass"></i>
      <span class="txt">专题</span>
    </div>
    <div class="footer-item" :class="footItems[2].itemClass" @click="goFooterPath(2)">
      <i class="icon" :class="footItems[2].iconClass"></i>
      <span class="txt">分类</span>
    </div>
    <div class="footer-item" :class="footItems[3].itemClass" @click="goFooterPath(3)">
      <i class="icon" :class="footItems[3].iconClass"></i>
      <span class="txt">购物车</span>
    </div>
    <div class="footer-item" :class="footItems[4].itemClass" @click="goFooterPath(4)">
      <i class="icon" :class="footItems[4].iconClass"></i>
      <span class="txt">个人中心</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'footItems',
        'footIdx'
      ])
    },
    methods: {
      goFooterPath (idx) {
        let curPath = this.$route.path
        let redirectPath = this.footItems[idx].path
        if (this.footIdx === idx && curPath === redirectPath) {
          return
        }
        this.$router.push({path: redirectPath})
      }
    }
  }
</script>

<style scoped>
  .footer {
    display: flex;
    -moz-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -ms-flex-pack: distribute;
    -webkit-justify-content: space-around;
    -moz-justify-content: space-around;
    justify-content: space-around;
    position: fixed;
    z-index: 9999;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 99px;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
  }
  .footer-item {
    position: relative;
    text-align: center;
    color: #666;
  }
  .footer-item-hot {
    color: #b4282d;
  }
  .icon {
    display: inline-block;
    vertical-align: middle;
    background-image: url(../../assets/images/foot-icon.png);
    background-repeat: no-repeat;
    background-size: 40px 490px;
    width: 40px;
    height: 49px;
  }
  .icon1 {
    background-position: 0 -245px;
  }
  .hicon1 {
    background-position: 0 -196px;
  }
  .icon2 {
    background-position: 0 -343px;
  }
  .hicon2 {
    background-position: 0 -294px;
  }
  .icon3 {
    background-position: 0 -147px;
  }
  .hicon3 {
    background-position: 0 -98px;
  }
  .icon4 {
    background-position: 0 -49px;
  }
  .hicon4 {
    background-position: 0 0;
  }
  .icon5 {
    background-position: 0 -441px;
  }
  .hicon5 {
    background-position: 0 -392px;
  }
  .txt {
    display: block;
    margin-top: 7px;
    font-size: 24px;
    line-height: 1;
  }
</style>

<template>
  <div class="footer">
    <div class="footer-item" :class="footItems[0].itemClass" @click="goFooterPath(0)">
      <div class="icon" :class="footItems[0].iconClass"></div>
      <span>首页</span>
    </div>
    <div class="footer-item" :class="footItems[1].itemClass" @click="goFooterPath(1)">
      <div class="icon" :class="footItems[1].iconClass"></div>
      <span>专题</span>
    </div>
    <div class="footer-item" :class="footItems[2].itemClass" @click="goFooterPath(2)">
      <div class="icon" :class="footItems[2].iconClass"></div>
      <span>分类</span>
    </div>
    <div class="footer-item" :class="footItems[3].itemClass" @click="goFooterPath(3)">
      <div class="icon" :class="footItems[3].iconClass"></div>
      <span>购物车</span>
    </div>
    <div class="footer-item" :class="footItems[4].itemClass" @click="goFooterPath(4)">
      <div class="icon" :class="footItems[4].iconClass"></div>
      <span>个人中心</span>
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
    height: 100px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    z-index: 9999;
    display: flex;
  }
  .footer-item {
    flex: 1;
    align-items: center;
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 20%;
    font-size: 28px;
    font-weight: bold;
    color: #666;
  }
  .footer-item-hot {
    color: #b4282d;
  }
  .icon {
    width: 63px;
    height: 63px;
    background-size: cover;
    display: inline-block;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .icon1 {
    background: url(../../assets/images/icon_home_normal.png) no-repeat;
  }
  .hicon1 {
    background: url(../../assets/images/icon_home_hot.png) no-repeat;
  }
  .icon2 {
    background: url(../../assets/images/icon_topic_normal.png) no-repeat;
  }
  .hicon2 {
    background: url(../../assets/images/icon_topic_hot.png) no-repeat;
  }
  .icon3 {
    background: url(../../assets/images/icon_home_normal.png) no-repeat;
  }
  .hicon3 {
    background: url(../../assets/images/icon_home_hot.png) no-repeat;
  }
  .icon4 {
    background: url(../../assets/images/icon_cart_normal.png) no-repeat;
  }
  .hicon4 {
    background: url(../../assets/images/icon_cart_hot.png) no-repeat;
  }
  .icon5 {
    background: url(../../assets/images/icon_me_normal.png) no-repeat;
  }
  .hicon5 {
    background: url(../../assets/images/icon_me_hot.png) no-repeat;
  }
</style>

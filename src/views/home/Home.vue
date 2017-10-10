<template>
  <div>
    <div class="banner">
      <van-swipe auto-play>
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <img :src="banner.image_url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="menu">
      <div class="menu-item" v-for="(channel, index) in channels" :key="index">
        <img :src="channel.icon_url">
        <span>{{channel.name}}</span>
      </div>
    </div>
    <div class="brand">
      <div class="brand-title">
        <span>品牌制造商直供</span>
        <i class="brand-icon"></i>
      </div>
      <div class="brand-container">
        <ul class="brand-list">
          <li>sss</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import api from '../../api/index'

  export default {
    data () {
      return {
        banners: [],
        channels: [],
        brands: []
      }
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 0)
      const rst = await api.getHomeInfo()
      if (rst.errno === 0) {
        this.banners = rst.data.banner
        this.channels = rst.data.channel
        this.brands = rst.data.brandList
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .banner {
    height: 417px;
  }
  .menu {
    display: flex;
    height: 181px;
    width: 100%;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }
  .menu-item {
    flex: 1;
    display: block;
    padding: 20px 0;
  }
  .menu-item img {
    display: block;
    width: 58px;
    height: 58px;
    margin: 0 auto;
    margin-bottom: 12px;
  }
  .menu span {
    display: block;
    font-size: 28px;
    text-align: center;
    margin: 0 auto;
    line-height: 30px;
    color: #333;
  }
  .brand {
    color: #333;
    margin-top: 20px;
  }
  .brand-title {
    font-size: 32px;
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
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    height: 100px;
  }
  .brand-icon {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/go2-3e511991d6.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
  }
  .brand-container {
    padding-bottom: 10px;
  }
  .brand-list {
    margin: 15px;
    height: 460px;
    overflow: hidden;
  }
  .brand-item {
    display: inline-block;
    margin-bottom: 10px;
    width: 354px;
    height: 225px;
    overflow: hidden;
    background-color: #f4f4f4;
  }
</style>

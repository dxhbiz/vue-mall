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
          <li class="brand-item" v-for="(brand, index) in brands" :key="index">
            <div class="brand-cnt">
              <h4 class="title">{{brand.name}}</h4>
              <div>
                <span class="price1">{{brand.floor_price}}</span>
                <span class="price1">元起</span>
              </div>
            </div>
            <img :src="brand.new_pic_url">
          </li>
        </ul>
      </div>
    </div>
    <div class="newGoods">
      <div class="newGoods-hd">
        <div class="newGoods-txt">
          <span>周一周四 · 新品首发</span>
          <div class="newGoods-all">
            <span>查看全部</span>
            <i class="arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="newGoods-item">
        <swiper class="newGoods-swiper" :options="swiperOption">
          <swiper-slide class="newGoods-slide" v-for="(goods, index) in newGoods" :key="index">
            <a class="good" href="javascript:;">
              <div class="good-img"><img :src="goods.list_pic_url"></div>
              <div class="good-name">{{goods.name}}</div>
              <div class="good-price">¥{{goods.retail_price}}</div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import api from '../../api/index'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        banners: [],
        channels: [],
        brands: [],
        newGoods: [],
        swiperOption: {
          slidesPerView: 2.5,
          spaceBetween: 10,
          setWrapperSize: true
        }
      }
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 0)
      const rst = await api.getHomeInfo()
      if (rst.errno === 0) {
        this.banners = rst.data.banner
        this.channels = rst.data.channel
        this.brands = rst.data.brandList
        this.newGoods = rst.data.newGoodsList
      }
      console.log(this.newGoods)
    },
    methods: {
    }
  }
</script>

<style scoped>
  .banner {
    height: 360px;
  }
  .menu {
    display: flex;
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
    margin-bottom: 10px;
  }
  .menu span {
    display: block;
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
    line-height: 24px;
    color: #333;
  }
  .brand {
    color: #333;
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
    height: 80px;
  }
  .brand-icon {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(../../assets/images/ppzzszg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
  }
  .brand-container {
    padding-bottom: 10px;
  }
  .brand-list {
    margin: 0 16px;
    height: 468px;
    overflow: hidden;
  }
  .brand-item {
    display: inline-block;
    position: relative;
    margin-bottom: 8px;
    width: 355px;
    height: 236px;
    overflow: hidden;
    background-color: #f4f4f4;
  }
  .brand-item:nth-child(odd)
  {
    margin-right: 8px;
  }
  .brand-cnt {
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px 0 0 20px;
    width: 100%;
    z-index: 4;
  }
  .brand-item img {
    width: 355px;
    height: 236px;
  }
  .brand-cnt .title {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 6px;
  }
  .brand-cnt .price1 {
    color: #333;
    font-size: 26px;
    line-height: 34px;
  }
  .brand-cnt .price2 {
    color: #333;
    font-size: 27px;
    line-height: 34px;
  }
  .newGoods {
    margin-bottom: 20px;
    background-color: #fff;
  }
  .newGoods-hd {
    background: url(../../assets/images/zofjx.png);
    background-size: 750px 260px;
    margin-bottom: 32px;
    height: 260px;
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
    font-size: 32px;
  }
  .newGoods-txt {
    display: block;
    text-align: center;
    font-size: 36px;
    color: #8BA0B6;
  }
  .newGoods-all {
    margin: 30px auto 0;
    width: 240px;
    height: 56px;
    font-size: 28px;
    line-height: 56px;
    background: #D8E5F1;
  }
  .arrow-right {
    background: url(../../assets/images/arrow-right.png);
    background-size: 10px 22px;
    display: inline-block;
    height: 22px;
    width: 10px;
    margin-left: 6px;;
  }
  .newGoods-item {
    width: 100%;
    height: 388px;
    overflow: hidden;
  }
  .newGoods-swiper {
    padding: 0 15px;
    overflow: visible;
  }
  .newGoods-slide {
    float: left;
    width: 280px;
  }
  .good-img {
    background-color: #f4f4f4;
    width: 280px;
    height: 280px;
  }
  .good img {
    width: 100%;
    height: 100%;
  }
  .good-name {
    margin-bottom: 10px;
    padding: 0 10px;
    font-size: 28px;
    line-height: 28px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .good-price {
    padding: 0 10px;
    font-size: 28px;
    line-height: 28px;
    text-align: left;
    color: #b4282d;
  }
</style>

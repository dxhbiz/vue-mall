<template>
  <div>
    <div class="banner">
      <swiper class="banner-swiper" :options="bannerSwiperOption">
        <swiper-slide class="banner-img" v-for="(banner, index) in banners" :key="index">
          <img v-lazy="banner.picUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="cateMenu">
      <swiper :options="menuSwiperOption">
        <swiper-slide class="cateMenu-item" v-for="(cate, index) in cateList" :key="index">
          <a href="javascript:;">
            <div>
              <img v-lazy="cate.iconUrl">
            </div>
            <div>
              <span>{{cate.name}}</span>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="brand">
      <div class="brand-title">
        <span>品牌制造商直供</span>
        <i class="brand-icon"></i>
      </div>
      <div class="brand-container">
        <ul class="brand-list">
          <li class="brand-item" v-for="(tag, index) in tagList" :key="index">
            <div class="brand-cnt">
              <h4 class="title">{{tag.name}}</h4>
              <div>
                <span class="price1">{{tag.floorPrice}}</span>
                <span class="price1">元起</span>
              </div>
            </div>
            <img v-lazy="tag.picUrl">
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
          <swiper-slide class="newGoods-slide" v-for="(item, index) in newItemList" :key="index">
            <a class="good" href="javascript:;">
              <div class="good-img"><img v-lazy="item.listPicUrl"></div>
              <div class="good-name">{{item.name}}</div>
              <div class="good-price">¥{{item.retailPrice}}</div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="popularItem">
      <div class="newGoods-hd popularItem-hd">
        <div class="newGoods-txt popularItem-more">
          <span>人气推荐 · 好物精选</span>
          <div class="newGoods-all popularItem-all">
            <span>查看全部</span>
            <i class="arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="newGoods-item">
        <swiper class="newGoods-swiper" :options="swiperOption">
          <swiper-slide class="newGoods-slide" v-for="(item, index) in popularItemList" :key="index">
            <a class="good" href="javascript:;">
              <div class="good-img"><img v-lazy="item.listPicUrl"></div>
              <div class="good-name">{{item.name}}</div>
              <div class="good-price">¥{{item.retailPrice}}</div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="welfare">
      <a class="welfare-more" href="javascript:;"></a>
    </div>
    <div class="brand">
      <div class="brand-title">
        <span>专题精选</span>
        <i class="brand-icon"></i>
      </div>
      <div class="topics">
        <swiper class="topics-swiper" :options="topicsSwiperOption">
          <swiper-slide class="topics-slide" v-for="(topic, index) in topicList" :key="index">
            <a class="topics-slide-item" href="javascript:;">
              <div class="topics-slide-img">
                <img v-lazy="topic.itemPicUrl">
              </div>
              <div class="topics-hd">
                <h4 class="topics-title">{{topic.title}}</h4>
                <span class="topics-price">
                  <span>{{topic.priceInfo}}</span>
                  <span>元起</span>
                </span>
              </div>
              <div class="topics-desc">
                {{topic.subtitle}}
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="cate" v-for="(cate, index) in cateList" :key="index">
      <div class="cate-grid">
        <h3 class="title">{{cate.name}}好物</h3>
        <div class="cate-goods">
          <ul class="list">
            <li class="item" v-for="(item, idx) in cate.itemList" :key="idx">
              <a class="good" href="javascript:;">
                <div class="hd">
                  <div class="wraper">
                    <img v-lazy="item.listPicUrl">
                  </div>
                  <div class="desc">{{item.simpleDesc}}</div>
                </div>
                <div class="name">{{item.name}}</div>
                <div class="price">¥{{item.retailPrice}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import model from './HomeModel'

  export default {
    data () {
      return {
        cateList: [],
        tagList: [],
        newItemList: [],
        popularItemList: [],
        topicList: [],
        bannerSwiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          setWrapperSize: true,
          autoplay: 3000,
          updateOnImagesReady: true,
          autoplayDisableOnInteraction: false
        },
        menuSwiperOption: {
          slidesPerView: 5,
          spaceBetween: 10,
          setWrapperSize: true
        },
        swiperOption: {
          slidesPerView: 2.5,
          spaceBetween: 10,
          setWrapperSize: true
        },
        topicsSwiperOption: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          setWrapperSize: true
        }
      }
    },
    async created () {
      document.title = '移动端商城--首页'
      this.$store.commit(types.CLICK_FOOT_ICON, 0)
      this.banners = model.focusList
      this.tagList = model.tagList
      this.newItemList = model.newItemList
      this.popularItemList = model.popularItemList
      this.topicList = model.topicList
      this.cateList = model.cateList
    },
    methods: {
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    overflow: hidden;
  }
  .banner-swiper {
    height: 360px;
  }
  .banner-img img {
    width: 750px;
    height: 360px;
  }
  .cateMenu {
    background-color: #fff;
    height: 100px;
    overflow: hidden;
    margin: 20px 0;
    text-align: center;
  }
  .cateMenu-item {
    margin-top: 8px;
    float: left;
    display: block;
  }
  .cateMenu-item img {
    width: 54px;
    height: 54px;
  }
  .cateMenu-item span {
    color: #333;
    font-size: 24px;
    line-height: 28px;
  }
  .brand {
    color: #333;
    background-color: #fff;
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
  }
  .brand-item:nth-child(2n+1)
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
    background-color: #f4f4f4;
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
    margin: 15px 0;
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
  .popularItem {
    margin-bottom: 20px;
    background-color: #fff;
  }
  .popularItem-hd {
    background: url(../../assets/images/rqtj.png);
  }
  .popularItem-more {
    color: #B4A078;
  }
  .popularItem-all {
    background: #F4E9CB;
  }
  .welfare {
    width: 750px;
    height: 300px;
    margin-bottom: 20px;
  }
  .welfare-more {
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(../../assets/images/yxfl.png);
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .topics {
    padding: 0 30px 36px;
    overflow: hidden;
  }
  .topics-swiper {

  }
  .topics-slide {
    float: left;
    width: 575px;
  }
  .topics-slide-item {
    display: block;
  }
  .topics-slide-img {
    width:  575px;
    height: 322px;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
  }
  .topics-slide-img img {
    height: 100%;
    width: auto;
    position: relative;
    left: 50%;
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .topics-hd {
    height: 41px;
    margin-bottom: 2px;
    zoom: 1;
    text-decoration: none;
    outline: 0;
  }
  .topics-title {
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    width: 410px;
    float: left;
    font-size: 28px;
    color: #333;
  }
  .topics-price {
    float: right;
    font-size: 28px;
    color: #b4282d;
  }
  .topics-desc {
    white-space: nowrap;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    width: 575px;
    font-size: 24px;
    color: #7F7F7F;
  }
  .cate {
    margin-bottom: 20px;
    background-color: #fff;
  }
  .cate-grid {
    background-color: #f4f4f4;
  }
  .cate-grid .title {
    line-height: 120px;
    text-align: center;
    font-size: 28px;
    color: #333;
    background-color: #fff;
  }
  .cate-goods {
    background-color: #fff;
  }
  .cate-goods .list {
    position: relative;
    z-index: 0;
    overflow: hidden;
  }
  .cate-goods .list .item {
    float: left;
    position: relative;
    width: 345px;
    padding: 0 10px 33px;
    overflow: hidden;
    background-color: #fff;
  }
  .cate-goods .list .item:nth-child(2n+1) {
    padding: 0 10px 33px 20px;
  }
  .cate-goods .list .item .good {
    width: 100%;
  }
  .cate-goods .list .item .hd {
    border-radius: 4px;
    position: relative;
    z-index: 0;
    background-color: #f4f4f4;
  }
  .cate-goods .list .item .good .wraper {
  }
  .cate-goods .list .item .hd img{
    display: block;
    width: 100%;
    height: 345px;
    border-radius: 4px 4px 0 0;
    background-color: #f4f4f4;
  }
  .cate-goods .list .item .hd .desc{
    background: #F1ECE2;
    border-radius: 0 0 4px 4px;
    font-size: 24px;
    color: #9F8A60;
    letter-spacing: 0;
    line-height: 29px;
    padding: 20px 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .cate-goods .list .item .name {
    margin: 20px auto 10px;
    padding: 0 10px;
    line-height: 1;
    text-align: left;
    font-size: 28px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #333;
  }
  .cate-goods .list .item .price {
    line-height: 1;
    font-size: 33px;
    text-align: left;
    color: #b4282d;
    padding: 0 10px;
  }
</style>

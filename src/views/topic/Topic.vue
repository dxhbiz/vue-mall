<template>
  <div>
    <div class="exploreChannels">
      <swiper :options="columnSwiperOptions">
        <swiper-slide v-for="(item, index) in columns" :key="index">
          <a class="item" href="javascript:;">
            <div class="channelPic" v-lazy:background-image="item.picUrl">
            </div>
            <div class="channelCount">
              <div class="topNum">{{item.articleCount}}</div>
            </div>
            <div class="title">{{item.title}}</div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="exploreRcmds">
      <div class="container">
        <div class="module-title">为你推荐</div>
        <a class="mainPosItem">
          <div class="imgContainer" v-lazy:background-image="recommendOne.picUrl">
            <div class="topicTag">
              <div class="exploreTag">{{recommendOne.typeName}}</div>
            </div>
          </div>
          <div class="topicInfo">
            <div class="line1">
              <div class="title">{{recommendOne.title}}</div>
              <div class="price">{{recommendOne.priceInfo}}元起</div>
            </div>
            <div class="line1">
              <div class="subTitle">{{recommendOne.subTitle}}</div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="recommendTwo.avatar">
                </div>
                <div class="nickname">{{recommendTwo.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{recommendTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="recommendTwo.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="recommendThree.avatar">
                </div>
                <div class="nickname">{{recommendThree.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="recommendThree.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="exploreRcmds">
      <div class="container">
        <div class="module-title">严选甄品</div>
        <a class="mainPosItem">
          <div class="imgContainer" v-lazy:background-image="zhenOne.picUrl">
            <div class="topicTag">
              <div class="exploreTag">{{zhenOne.typeName}}</div>
            </div>
          </div>
          <div class="topicInfo">
            <div class="line1">
              <div class="title">{{zhenOne.title}}</div>
              <div class="price">{{zhenOne.priceInfo}}元起</div>
            </div>
            <div class="line1">
              <div class="subTitle">{{zhenOne.subTitle}}</div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="zhenTwo.avatar">
                </div>
                <div class="nickname">{{zhenTwo.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{zhenTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{zhenTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="zhenTwo.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{zhenTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
        <a class="minorPosItem">
          <div class="topicInfo">
            <div class="author-container">
              <div class="author">
                <div class="avatar">
                  <img v-lazy="zhenThree.avatar">
                </div>
                <div class="nickname">{{zhenThree.nickname}}</div>
              </div>
            </div>
            <div class="line1">
              <div class="title">{{zhenThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle twoLines">{{zhenThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer" v-lazy:background-image="zhenThree.picUrl">
              <div class="topicTag">
                <div class="exploreTag">{{zhenThree.typeName}}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="exploreGlobal">
      <div class="module-title">严选全球</div>
      <a class="mainPosItem" href="javascript:;">
        <div class="imgContainer" v-lazy:background-image="yxGlobal.picUrl"></div>
        <div class="topicInfo">
          <div class="line1">
            <div class="title">{{yxGlobal.title}}</div>
          </div>
          <div class="line2">
            <div class="subTitle">{{yxGlobal.subTitle}}</div>
          </div>
        </div>
      </a>
    </div>
    <i class="gotoTop" v-if="gotoTop"></i>
    <div class="exploreMore">
      <div class="line-title">
        <div class="inner">更多精彩</div>
      </div>
      <div class="content">
        <a class="topicItem" href="javascript:;" v-for="(item, index) in findMore" :key="index">
          <div class="threePics" v-if="item.picList.length > 2">
            <div class="pic1" v-lazy:background-image="item.itemPicUrl"></div>
            <div class="right">
              <div class="pic2" v-lazy:background-image="item.picList[1]"></div>
              <div class="pic3" v-lazy:background-image="item.picList[2]"></div>
            </div>
          </div>
          <div class="onePic" v-lazy:background-image="item.itemPicUrl" v-else></div>
          <div class="desc">{{item.subTitle}}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import * as types from '../../vuex/mutation-types'
  import model from './TopicModel'

  export default {
    data () {
      return {
        gotoTop: false,
        columns: [],
        recommendOne: {},
        recommendTwo: {},
        recommendThree: {},
        zhenOne: {},
        zhenTwo: {},
        zhenThree: {},
        yxGlobal: {},
        yxLook: {},
        findMore: [],
        columnSwiperOptions: {
          slidesPerView: 3.75,
          setWrapperSize: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false
        }
      }
    },
    async created () {
      window.addEventListener('scroll', this.handleScroll)
      document.title = '移动端商城--专题'
      this.$store.commit(types.CLICK_FOOT_ICON, 1)
      this.columns = model.column
      this.recommendOne = model.recommendOne
      this.recommendTwo = model.recommendTwo
      this.recommendThree = model.recommendThree
      this.zhenOne = model.zhenOne
      this.zhenTwo = model.zhenTwo
      this.zhenThree = model.zhenThree
      this.yxGlobal = model.yxGlobal
      this.yxLook = model.yxLook
      this.findMore = model.findMore
    },
    methods: {
      handleScroll () {
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop >= 200) {
          this.gotoTop = true
        } else {
          this.gotoTop = false
        }
      }
    }
  }
</script>
<style>
  .exploreChannels {
    overflow: hidden;
    padding: 30px 30px 54px;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .exploreChannels .item {
    position: relative;
    width: 164px;
    height: 210px;
    display: block;
  }
  .exploreChannels .item .channelPic {
    width: 164px;
    height: 164px;
    margin-bottom: 22px;
    border-radius: 4px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .exploreChannels .item .channelCount {
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    width: 116px;
    height: 32px;
    display: inline-block;
    background-size: 100%;
    vertical-align: middle;
    background-size: 100%;
    background: url(./../../assets/images/count-bg.png) no-repeat;
  }
  .exploreChannels .item .channelCount .topNum {
    position: absolute;
    top: 0;
    right: 8px;
    width: 150px;
    height: 32px;
    line-height: 32px;
    text-align: right;
  }
  .exploreChannels .item .title {
    color: #333;
    font-size: 24px;
    line-height: 1;
    text-align: center;
  }
  .exploreRcmds {
    padding: 30px 40px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .exploreRcmds .module-title {
    background-color: #fff;
    text-align: center;
    font-size: 32px;
    height: 120px;
    line-height: 120px;
  }
  .exploreRcmds .mainPosItem {
    display: block;
    position: relative;
    color: #333;
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .exploreRcmds .mainPosItem .imgContainer {
    position: relative;
    height: 386px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .exploreRcmds .mainPosItem .imgContainer .topicTag {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .exploreRcmds .mainPosItem .imgContainer .topicTag .exploreTag {
    display: inline-block;
    padding: 0 16px;
    height: 36px;
    line-height: 36px;
    background-color: rgba(255,255,255,.9);
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 20px;
    color: #333;
  }
  .exploreRcmds .mainPosItem .topicInfo {
    overflow: hidden;
    position: relative;
    padding: 24px 20px 0;
    background-color: #fff;
  }
  .exploreRcmds .mainPosItem .topicInfo .line1{
    margin-bottom: 19px;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    line-height: 1.2;
  }
  .exploreRcmds .mainPosItem .topicInfo .line1 .title{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-right: 30px;
    font-size: 36px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .mainPosItem .topicInfo .line1 .price {
    line-height: 1;
    font-size: 32px;
    text-align: center;
    min-width: 115px;
  }
  .exploreRcmds .mainPosItem .topicInfo .line2 .subTitle {
    position: relative;
    font-size: 28px;
    line-height: 1.2;
    color: #7f7f7f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .minorPosItem {
    display: flex;
    background-color: #fff;
    color: #333;
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 4px;
    margin-bottom: 30px;
  }
  .exploreRcmds .minorPosItem .topicInfo {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    padding-left: 20px;
    padding-right: 30px;
  }
  .exploreRcmds .minorPosItem .topicInfo .author-container {
    margin-bottom: 25px;
  }
  .author {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
  }
  .author .avatar {
    overflow: hidden;
    border: 1px solid #d9d9d9;/*no*/
    width: 48px;
    height: 48px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .author .avatar img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .author .nickname {
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .minorPosItem .topicInfo .line1 {
    margin-bottom: 14px;
    line-height: 1.2;
  }
  .exploreRcmds .minorPosItem .topicInfo .line1 .title {
    margin-right: 30px;
    font-size: 32px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreRcmds .minorPosItem .topicInfo .line2 .subTitle {
    position: relative;
    font-size: 24px;
    line-height: 1.5;
    color: #7f7f7f;
  }
  .exploreRcmds .minorPosItem .topicInfo .line2 .subTitle .twoLines {
    display: block;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  .exploreRcmds .minorPosItem .minorPic {
    position: relative;
    width: 280px;
    height: 272px;
  }
  .exploreRcmds .minorPosItem .minorPic .imgContainer{
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
  }
  .exploreRcmds .minorPosItem .minorPic .imgContainer .topicTag {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .exploreRcmds .minorPosItem .minorPic .imgContainer .topicTag .exploreTag {
    display: inline-block;
    padding: 0 16px;
    height: 36px;
    line-height: 36px;
    background-color: rgba(255,255,255,.9);
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 20px;
    color: #333;
  }
  .gotoTop {
    position: fixed;
    right: 23px;
    bottom: 120px;
    vertical-align: middle;
    width: 82px;
    height: 82px;
    background-image: url(../../assets/images/gotoTop.png);
    background-size: 82px 82px;
    border: 1px solid #d9d9d9;/*no*/
    border-radius: 50%;
    z-index: 2;
  }
  .exploreGlobal {
    margin-bottom: 20px;
  }
  .exploreGlobal .module-title {
    background-color: #fff;
    text-align: center;
    font-size: 32px;
    height: 120px;
    line-height: 120px;
  }
  .exploreGlobal .mainPosItem {
    display: block;
    position: relative;
    color: #333;
    overflow: hidden;
  }
  .exploreGlobal .mainPosItem .imgContainer{
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    height: 420px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }
  .exploreGlobal .mainPosItem .topicInfo{
    background-color: #fff;
    padding: 20px 30px 61px;
    border: none;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    padding: 24px 20px 0;
    background-color: #fff;
  }
  .exploreGlobal .mainPosItem .topicInfo .line1{
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    line-height: 1.2;
    margin-bottom: 18px;
  }
  .exploreGlobal .mainPosItem .topicInfo .line1 .title{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-right: 30px;
    font-size: 36px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreGlobal .mainPosItem .topicInfo .line2 .subTitle{
    display: block;
    display: -webkit-box;
    overflow: hidden;
    white-space: pre-wrap;
    position: relative;
    font-size: 28px;
    line-height: 1.2;
    color: #7f7f7f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .exploreMore {
    margin: 0 30px 30px;
  }
  .exploreMore .line-title:before {
    content: ' ';
    display: block;
    width: 265px;
    height: 1px;/*no*/
    background-color: #d9d9d9;
  }
  .exploreMore .line-title {
    height: 140px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
  }
  .exploreMore .line-title .inner {
    margin: 0 24px;
    font-size: 28px;
    color: #333;
  }
  .exploreMore .line-title:after{
    content: ' ';
    display: block;
    width: 265px;
    height: 1px;/*no*/
    background-color: #d9d9d9;
  }
  .exploreMore .content {
    display: block;
    color: #333;
  }
  .exploreMore .topicItem {
    display: block;
    padding: 24px;
    margin-bottom: 30px;
    background-color: #fff;
    color: #333;
  }
  .exploreMore .topicItem .imgContainer {
    background-color: #f4f4f4;
  }
  .exploreMore .topicItem .threePics {
    overflow: hidden;
  }
  .exploreMore .topicItem .pic1 {
    float: left;
    width: 460px;
    height: 360px;
    margin-right: 4px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .exploreMore .topicItem .right {
    float: right;
    width: 178px;
  }
  .exploreMore .topicItem .right .pic2 {
    margin-bottom: 4px;
    height: 178px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .exploreMore .topicItem .right .pic3 {
    height: 178px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .exploreMore .topicItem .onePic {
    width: 642px;
    height: 360px;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    -moz-background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .exploreMore .topicItem .desc {
    background-color: #fff;
    font-size: 28px;
    padding-top: 29px;
    padding-bottom: 28px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>

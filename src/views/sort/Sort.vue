<template>
  <div>
    <div class="m-itemCateListHd">
      <div class="m-topSearchIpt ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共9405款好物</span>
      </div>
    </div>
    <div class="m-cateNavVertWrap" style="left:0;">
      <div class="sort-swiper">
        <swiper :options="swiperOption">
          <swiper-slide class="item" v-for="(item, index) in itemList" :class="{active: item.isActive}" :key="index">
            <a class="txt" href="javscript:;" @click="changeItem(item.id)">{{item.name}}</a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="m-subCateList">
      <div class="banner" v-lazy:background-image="subInfo.currentCategory.wapBannerUrl">
        <div class="cnt"></div>
      </div>
      <div class="cateList">
        <div class="hd">
          <span class="text">
            <span>{{subName}}</span>
          </span>
        </div>
        <ul class="list">
          <li class="cateItem" v-for="(item, index) in subInfo.categoryL2List" :key="index">
            <a href="javascript:;">
              <div class="cateImgWrapper">
                <img :src="item.wapBannerUrl" alt="" class="cateImg">
              </div>
              <div class="name">{{item.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import model from './SortModel'

  export default {
    data () {
      return {
        swiperOption: {
          direction: 'vertical',
          height: 50
        },
        itemList: model.categoryList,
        subInfo: null,
        subName: ''
      }
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 2)
      this.refreshSubCategory()
    },
    mounted () {
      const htmlEle = document.getElementsByTagName('html')[0]
      const fontSize = parseInt(htmlEle.style.fontSize.replace('px', ''))
      const contentWidth = fontSize * 10
      if (window.innerWidth > contentWidth) {
        const wrap = document.getElementsByClassName('m-cateNavVertWrap')[0]
        const leftLen = (window.innerWidth - contentWidth) / 2
        wrap.style.left = leftLen + 'px'
        const cateListHd = document.getElementsByClassName('m-itemCateListHd')[0]
        cateListHd.style.left = leftLen + 'px'
      }
    },
    methods: {
      refreshSubCategory () {
        let categoryList = this.itemList
        for (let k in categoryList) {
          let category = categoryList[k]
          if (category.isActive) {
            this.subInfo = model.subCategoryList[category.id]
            this.subName = category.name + '分类'
          }
        }
      },
      changeItem (id) {
        let categoryList = this.itemList
        for (let k in categoryList) {
          let category = categoryList[k]
          if (category.id === id) {
            this.itemList[k].isActive = true
          } else {
            this.itemList[k].isActive = false
          }
        }
        this.refreshSubCategory()
      }
    }
  }
</script>

<style scoped>
  .m-itemCateListHd {
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
    height: 88px;
    padding: 0 30px;
    background-color: #fff;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 101;
    border-bottom: 1px solid #d9d9d9; /* no */
  }
  .m-topSearchIpt {
    width: 690px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
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
    height: 56px;
    font-size: 28px;
    background-color: #ededed;
    border-radius: 8px;
  }
  .m-topSearchIpt .icon {
    vertical-align: middle;
    background-image: url(../../assets/images/search.png);
    background-repeat: no-repeat;
    background-size: 28px 28px;
    margin-right: 10px;
    display: inline-block;
    width: 28px;
    height: 28px;
  }
  .m-topSearchIpt .placeholder {
    color: #666;
  }
  .m-cateNavVertWrap {
    position: fixed;
    top: 88px;
    left: 0;
    bottom: 0;
    z-index: 4;
    width: 162px;
    background-color: #fff;
  }
  .item {
    width: 100%;
    height: 50px;
    text-align: center;
    border: none;
  }
  .item .txt {
    display: block;
    color: #333;
    font-size: 28px;
    line-height: 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .item+.item {
    margin-top: 40px;
  }
  .item.active:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 6px;
    height: 50px;
    background-color: #ab2b2b;
  }
  .item.active {
    position: relative;
  }
  .item.active .txt {
    font-size: 36px;
    color: #ab2b2b;
  }
  .m-cateNavVertWrap:after {
    content: '';
    position: absolute;
    background-color: rgba(0,0,0,.15);
    top: 0;
    bottom: 0;
    width: 1px;/*no*/
    -webkit-transform-origin: 100% 50% 0;
    transform-origin: 100% 50% 0;
    right: 0;
  }
  .sort-swiper {
    margin-top: 40px;
    margin-bottom: 138px;
  }
  .sort-swiper .swiper-container .swiper-slide {
    height: 50px;
  }
  .m-subCateList {
    margin-top: 88px;
    background-color: #fff;
    margin-left: 162px;
    padding: 30px 30px 21px;
  }
  .m-subCateList .banner {
    position: relative;
    width: 100%;
    height: 192px;
    display: table;
    background: center no-repeat #f4f4f4;
    background-size: cover;
    border-radius: 4px;
  }
  .m-subCateList .banner .cnt {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 28px;
    color: #fff;
  }
  .m-subCateList .hd {
    height: 108px;
    line-height: 108px;
    text-align: center;
    font-size: 24px;
    color: #333;
  }
  .m-subCateList .cateItem {
    display: inline-block;
    margin-right: 34px;
    font-size: 0;
    width: 144px;
    vertical-align: top;
  }
  .m-subCateList .cateItem .cateImgWrapper {
    width: 144px;
    height: 144px;
  }
  .m-subCateList .cateItem .cateImg {
    display: block;
    width: 100%;
    background: #fff;
  }
  .m-subCateList .cateItem .name {
    height: 72px;
    font-size: 24px;
    color: #333;
    text-align: center;
    line-height: 34px;
  }
  .m-subCateList .hd .text:before {
    left: -56px;
  }
  .m-subCateList .hd .text:after, .m-subCateList .hd .text:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1px;
    width: 40px;
    background-color: #d9d9d9;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
    -webkit-tap-highlight-color: transparent;
  }
  .m-subCateList .hd .text:after {
    right: -56px;
  }
  .m-subCateList .cateItem:nth-child(3n) {
    margin-right: -10px;
  }
  .m-subCateList .hd .text {
    position: relative;
  }
  .m-subCateList .hd .text span {
    box-sizing: border-box;
  }
</style>

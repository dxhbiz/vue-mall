<template>
  <div>
    <div class="g-row">
      <div class="m-profile">
        <div class="g-row">
          <div class="left">
            <img class="avatar" v-lazy="userInfo.avatar">
            <div class="info">
              <p class="nickname">{{userInfo.nickname}}</p>
              <div class="membershipLevel">
                <span class="memberTitle0">{{userInfo.levelTag}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-row">
      <div class="m-uMenu">
        <ul class="list">
          <li class="item" v-for="(item, index) in menuList" :class="Math.ceil((index + 1) / 3) === Math.ceil(menuList.length / 3) ? 'item-bottom' : ''"  :key="index">
            <a class="m-uMenuItem" :href="item.path">
              <i class="img u-icon" :class="item.icon"></i>
              <span class="txt">{{item.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="g-row">
      <div class="w-button" @click="logout">退出登录</div>
    </div>
    <div class="logoutModal" v-if="showModal">
      <div class="logoutModal-layer">
        <div class="logoutModal-content" tabindex="-1">
          <div class="m-modal m-modal-confirm">
            <p class="txt">退出登录?</p>
            <div class="m-table btns">
              <div class="tr">
                <div class="td">
                  <a href="javascript:void(0);" class="w-btn" @click="logoutCancel">取消</a>
                </div>
                <div class="td">
                  <a href="javascript:void(0);" class="w-btn w-btn-1 nb" @click="logoutConfirm">确定</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'
  import model from './MeModel'

  export default {
    data () {
      return {
        showModal: false,
        userInfo: {},
        menuList: [
          {
            title: '我的订单',
            path: 'javascript:;',
            icon: 'u-icon-ulist'
          },
          {
            title: '周六一起拼',
            path: 'javascript:;',
            icon: 'u-icon-upin'
          },
          {
            title: '售后服务',
            path: 'javascript:;',
            icon: 'u-icon-uaftersale'
          },
          {
            title: '优惠券',
            path: 'javascript:;',
            icon: 'u-icon-ucoupon'
          },
          {
            title: '我的红包',
            path: 'javascript:;',
            icon: 'u-icon-uredpacket'
          },
          {
            title: '优先购',
            path: 'javascript:;',
            icon: 'u-icon-upreemption'
          },
          {
            title: '礼品卡',
            path: 'javascript:;',
            icon: 'u-icon-ugiftcard'
          },
          {
            title: '会员福利',
            path: 'javascript:;',
            icon: 'u-icon-umembershipBenefits'
          },
          {
            title: '地址管理',
            path: 'javascript:;',
            icon: 'u-icon-uaddress'
          },
          {
            title: '帐号安全',
            path: 'javascript:;',
            icon: 'u-icon-usecurity'
          },
          {
            title: '联系客服',
            path: 'javascript:;',
            icon: 'u-icon-ukefu'
          },
          {
            title: '帮助中心',
            path: 'javascript:;',
            icon: 'u-icon-uhelp'
          },
          {
            title: '意见反馈',
            path: 'javascript:;',
            icon: 'u-icon-ufeedback'
          }
        ]
      }
    },
    async created () {
      this.userInfo = model
      this.$store.commit(types.CLICK_FOOT_ICON, 4)
    },
    methods: {
      logout () {
        this.showModal = true
      },
      logoutCancel () {
        this.showModal = false
      },
      logoutConfirm () {
        this.showModal = false
      }
    }
  }
</script>

<style scoped>
  .g-row {
    width: 750px;
    margin-right: auto;
    margin-left: auto;
  }
  .m-profile {
    height: 270px;
    background-color: #000000;
    background-size: 100%;
    padding: 0 30px;
    overflow: hidden;
  }
  .m-profile .g-row {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
  }
  .m-profile .left {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    -moz-justify-content: flex-start;
    justify-content: flex-start;
    padding: 64px 0;
    width: 540px;
  }
  .m-profile .left .avatar {
    vertical-align: middle;
    width: 142px;
    height: 142px;
    border-radius: 50%;
  }
  .m-profile .left .info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -moz-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: .4rem;
    line-height: 1;
    overflow: hidden;
  }
  .m-profile .left .info .nickname {
    color: #fff;
    font-size: 36px;
    line-height: 1.2;
    text-align: left;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .m-profile .left .info .membershipLevel span {
    color: #b4a078;
    font-size: 28px;
    vertical-align: middle;
  }
  .m-profile .left .info .membershipLevel span.memberTitle0 {
    color: #7f7f7f;
  }
  .m-uMenu {
    margin-bottom: 40px;
    background: #fff;
  }
  .m-uMenu .list {
    zoom: 1;
  }
  .m-uMenu .item {
    float: left;
    width: 33%;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
  }
  .m-uMenu .item-bottom {
    border-bottom: none;
  }
  .m-uMenu .list:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
  }
  .m-uMenuItem {
    display: block;
    height: 180px;
    padding-top: 45px;
    text-align: center;
  }
  .m-uMenuItem .img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-bottom: 16px;
  }
  .u-icon-ulist {
    background-position: 0 -480px;
  }
  .u-icon-uaddress, .u-icon-uaftersale, .u-icon-ucoupon, .u-icon-ufeedback, .u-icon-ugiftcard, .u-icon-uhelp, .u-icon-ukefu, .u-icon-ulead, .u-icon-ulist,
  .u-icon-upin, .u-icon-upreemption, .u-icon-uredpacket, .u-icon-usecurity, .u-icon-umembershipBenefits{
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(../../assets/images/me-icon.png);
    background-repeat: no-repeat;
    background-size: 50px 822px;
    width: 50px;
  }
  .m-uMenuItem .txt {
    display: block;
    font-size: 24px;
    line-height: 1;
    color: #333;
  }
  .u-icon-upin {
    background-position: 0 -592px;
  }
  .m-uMenu .item:nth-of-type(3n) {
    border-right: 0;
  }
  .u-icon-uaftersale {
    background-position: 0 -60px;
  }
  .u-icon-ucoupon {
    background-position: 0 -120px;
  }
  .u-icon-uredpacket {
    background-position: 0 -712px;
  }
  .u-icon-upreemption {
    background-position: 0 -652px;
  }
  .u-icon-ugiftcard {
    background-position: 0 -240px;
  }
  .u-icon-umembershipBenefits {
    background-position: 0 -540px;
  }
  .u-icon-uaddress {
    background-position: 0 0;
  }
  .u-icon-usecurity {
    background-position: 0 -772px;
  }
  .u-icon-ukefu {
    background-position: 0 -360px;
  }
  .u-icon-uhelp {
    background-position: 0 -300px;
  }
  .u-icon-ufeedback {
    background-position: 0 -180px;
  }
  .w-button {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    text-align: center;
    height: 96px;
    line-height: 96px;
    font-size: 28px;
    background-color: #fff;
    overflow: hidden;
    color: #333;
  }
  .logoutModal-layer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 19999;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .logoutModal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .m-modal {
    width: 600px;
    background: #fff;
    border-radius: 8px;/*no*/
    overflow: hidden;
  }
  .m-modal .txt {
    font-size: 32px;
    text-align: center;
    padding: 80px 0;
  }
  .m-modal .btns, .m-modal-list {
    border-top: 1px solid #d9d9d9;/*no*/
  }
  .m-table {
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .m-table .tr {
    display: table-row;
  }
  .m-table .td {
    display: table-cell;
    text-align: center;
  }
  .m-modal .w-btn {
    width: 100%;
    height: 104px;
    line-height: 104px;
    display: block;
    color: #333;
    font-size: 28px;
    text-align: center;
    border-right: 1px solid #d9d9d9;/*no*/
  }
  .m-modal .btns .nb {
    border-right: none;
  }
  .m-modal .w-btn-1 {
    color: #b4282d;
  }
</style>

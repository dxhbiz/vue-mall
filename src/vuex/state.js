/**
 * Created by Administrator on 2017/7/13.
 */

const state = {
  footIdx: 0,
  headTitle: '首页',
  footItems: [
    {
      path: '/home',
      itemClass: '',
      iconClass: 'icon1',
      title: '首页'
    },
    {
      path: '/topic',
      itemClass: '',
      iconClass: 'icon2',
      title: '专题'
    },
    {
      path: '/sort',
      itemClass: '',
      iconClass: 'icon3',
      title: '分类'
    },
    {
      path: '/cart',
      itemClass: '',
      iconClass: 'icon4',
      title: '购物车'
    },
    {
      path: '/me',
      itemClass: '',
      iconClass: 'icon5',
      title: '个人中心'
    }
  ],
  icons: [
    true,
    false,
    false,
    false,
    false
  ],
  navArr: [
    {
      router: 'home',
      title: '首页'
    },
    {
      router: 'new',
      title: '新游'
    },
    {
      router: 'rank',
      title: '排行'
    },
    {
      router: 'news',
      title: '资讯'
    },
    {
      router: 'profile',
      title: '个人中心'
    }
  ]
}

export default state

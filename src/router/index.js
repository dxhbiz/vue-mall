import Vue from 'vue'
import Router from 'vue-router'

const Default = r => require.ensure([], () => r(require('../views/layout/Default.vue')), 'Default')
const Home = r => require.ensure([], () => r(require('../views/home/Home.vue')), 'Home')
const Topic = r => require.ensure([], () => r(require('../views/topic/Topic.vue')), 'Topic')
const Sort = r => require.ensure([], () => r(require('../views/sort/Sort.vue')), 'Sort')
const Cart = r => require.ensure([], () => r(require('../views/cart/Cart.vue')), 'Cart')
const Me = r => require.ensure([], () => r(require('../views/me/Me.vue')), 'Me')

Vue.use(Router)

const AppRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: '',
      component: Default,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/topic',
          name: 'topic',
          component: Topic
        },
        {
          path: '/sort',
          name: 'sort',
          component: Sort
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/me',
          name: 'me',
          component: Me
        }
      ]
    }
  ]
})

// const whiteRouterList = ['/login']
AppRouter.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

AppRouter.afterEach(() => {
})

export default AppRouter

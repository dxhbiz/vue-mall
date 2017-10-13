// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Vue from 'vue'
import './assets/css/reset.css'
import App from './App'
import router from './router'
import store from './vuex/index'
import FastClick from 'fastclick'

const cnzzProtocol = ((document.location.protocol === 'https:') ? "https://" : "http://")
document.write(unescape("%3Cspan id='cnzz_stat_icon_1264769167'%3E%3C/span%3E%3Cscript src='" + cnzzProtocol + "s13.cnzz.com/z_stat.php%3Fid%3D1264769167' type='text/javascript'%3E%3C/script%3E"))
document.getElementById("cnzz_stat_icon_1264769167").style.display = "none"

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

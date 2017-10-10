/**
 * Created by Administrator on 2017/7/13.
 */
import * as types from './mutation-types'

const mutations = {
  [types.CLICK_TABBAR] (state, idx) {
    state.icons = [false, false, false, false, false]
    state.icons[idx] = true
    state.navTitle = state.navArr[idx].title
  },
  [types.CLICK_FOOT_ICON] (state, idx) {
    for (let k in state.footItems) {
      k = parseInt(k)
      let index = k + 1
      let iconClass = 'icon' + index
      if (k === idx) {
        state.footItems[k].itemClass = 'footer-item-hot'
        state.footItems[k].iconClass = 'h' + iconClass
      } else {
        state.footItems[k].itemClass = ''
        state.footItems[k].iconClass = iconClass
      }
    }
    state.headTitle = state.footItems[idx].title
    state.footIdx = idx
  }
}

export default mutations

/**
 * Created by Administrator on 2017/7/13.
 */
export const stateIcon1 = state => {
  return state.icons[0] ? 'aicon1' : 'icon1'
}

export const stateIcon2 = state => {
  return state.icons[1] ? 'aicon2' : 'icon2'
}

export const stateIcon3 = state => {
  return state.icons[2] ? 'aicon3' : 'icon3'
}

export const stateIcon4 = state => {
  return state.icons[3] ? 'aicon4' : 'icon4'
}

export const stateIcon5 = state => {
  return state.icons[4] ? 'aicon5' : 'icon5'
}

export const titleInfo = state => {
  return state.navTitle
}

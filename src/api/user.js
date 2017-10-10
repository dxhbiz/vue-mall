/**
 * Created by Administrator on 2017/8/23.
 */
import config from './config'
import http from './http'
const api = {}

/**
 * 获取所有头像
 */
api.getAllHeads = function () {
  let url = config.apiurl + '/api/v2/getAllheads'
  return http.request(url, 'get', {})
}

/**
 * 更新用户信息
 * @param params
 */
api.updateUserInfo = function (params) {
  let url = config.apiurl + '/api/v2/updateUserInfo'
  return http.request(url, 'post', params)
}

/**
 * 获取用户信息
 */
api.getUserInfo = function () {
  let url = config.apiurl + '/api/v2/getUserInfo'
  return http.request(url, 'get', {})
}

/**
 * 获取玩家游戏选择
 */
api.getUserGames = function () {
  let url = config.apiurl + '/api/v2/getUsergamesinfo'
  return http.request(url, 'get', {})
}

/**
 * 获取所有游戏列表
 */
api.getAllGames = function () {
  let url = config.apiurl + '/api/v2/getAllgamesinfo'
  return http.request(url, 'get', {})
}

/**
 * 更新玩家游戏选择
 * @param params
 */
api.updateUserGames = function (params) {
  let url = config.apiurl + '/api/v2/updateUsergames'
  return http.request(url, 'post', params)
}

/**
 * 登录游戏
 * @param params
 */
api.loginGame = function (params) {
  let url = config.apiurl + '/api/v2/loginGame'
  return http.request(url, 'post', params)
}

export default api

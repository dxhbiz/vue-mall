/**
 * Created by Administrator on 2017/9/20.
 */
import config from './config'
import http from './http'
const api = {}

/**
 * 获取所有头像
 */
api.getWeixinInfo = function (params) {
  let url = config.apiurl + '/api/v1/getWeixinInfo'
  return http.request(url, 'post', params)
}

export default api

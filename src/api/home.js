/**
 * Created by Administrator on 2017/10/9.
 */
import config from './config'
import http from './http'
const api = {}

/**
 * 获取首页信息
 */
api.getHomeInfo = function (params) {
  const url = config.apiurl + '/api/index/index'
  return http.request(url, 'get', params)
}

export default api

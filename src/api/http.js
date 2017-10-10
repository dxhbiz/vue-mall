/**
 * Created by Administrator on 2017/8/16.
 */
import axios from 'axios'
import router from '../router/index'
import qs from 'qs'
const Http = {}

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Http.request = (url, method, params, headers) => {
  if (!headers) {
    headers = {}
  }
  method = method.toUpperCase()
  var body = ''
  if (method === 'POST') {
    body = qs.stringify(params)
    params = {}
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      params: params,
      data: body,
      headers: {
        'X-xtw-token': headers['token'] || '',
        'X-xtw-id': headers['id'] || ''
      }
    }).then((res) => {
      let data = res.data
      if (data.code === 403) {
        router.push({path: '/login'})
        return
      }
      if (data.code === 405) {
        router.push({path: '/create'})
        return
      }
      resolve(res.data)
    }, (err) => {
      console.log(err)
      resolve({
        code: 1000,
        msg: '服务器异常'
      })
    })
  })
}

export default Http


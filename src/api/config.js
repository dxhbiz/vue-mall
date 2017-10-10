/**
 * Created by Administrator on 2017/8/16.
 */
const Config = {}

let env = process.env.NODE_ENV
Config.apiurl = 'http://127.0.0.1:8360'
if (env === 'production') {
  let apiurl = window.location.protocol + '//'
  apiurl += window.location.hostname
  if (window.location.port !== '80' || window.location.port !== '443' || window.location.port !== '') {
    apiurl += ':' + window.location.port
  }
  Config.apiurl = apiurl
}

export default Config

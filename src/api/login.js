/**
 * Created by Administrator on 2017/8/16.
 */
import config from './config'
import http from './http'
const Login = {}

/**
 * 获取验证码
 * @returns {string}
 */
Login.captchaUrl = function () {
  return config.apiurl + '/api/v1/captcha' + '?rand' + new Date().getTime()
}

/**
 * 校验验证码
 * @param params
 */
Login.checkCaptcha = function (params) {
  let url = config.apiurl + '/api/v1/checkCaptcha'
  return http.request(url, 'post', params)
}

/**
 * 登录
 * @param params
 */
Login.doLogin = function (params) {
  let url = config.apiurl + '/api/v1/login'
  return http.request(url, 'post', params)
}

export default Login

/**
 * Created by Administrator on 2017/8/16.
 */
import Home from './home'
import Login from './login'
import User from './user'
import Weixin from './weixin'
var api = {}

api = Object.assign(api, Home)
api = Object.assign(api, Login)
api = Object.assign(api, User)
api = Object.assign(api, Weixin)

export default api

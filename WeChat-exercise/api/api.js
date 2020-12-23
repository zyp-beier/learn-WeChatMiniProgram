import {getuserInfo, requestUrl} from "../constants/api";

let baseUrl = 'http://image.baidu.com'
import {GET,POST} from '../utils/util.js'
/**
 * 页面显示图片
 */
const show = function(data,callback){
 return GET(baseUrl + '/i', data, callback)
}
/**
 * 搜索
 */
const search =function(data,callback){
  return POST(baseUrl,data,callback)
}
/**
 *登录
 */
const Login = function(data,callback,done){
    return GET(requestUrl,data,callback,done)
}
const GetUserInfo = function(data,callback,done){
    return GET(getuserInfo,data,callback,done)
}
module.exports = {
    show,
    search,
    Login,
    GetUserInfo
}
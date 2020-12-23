//app.js
import {Login} from "./api/api";

App({
  data:{
    appid: 'wx6a2fc9c872aeaa09'
  },
  onLaunch: function () {
    let _this = this
    wx.checkSession({
    success(){
      if (!wx.getStorageSync('token')){
        _this.login(_this.getappid())
      }
    },
    fail(){
      _this.login(_this.getappid())
    },
  })
  },
  getappid(){
    return this.data.appid
  },
  // 登录
  login(getappid){
    wx.login({
      success(res){
        let code = res.code;
        if(code){
          Login({code,getappid},function(err,res){
            if(err){
              console.log('err'+err)
              return
            }
            wx.setStorageSync('token',res.data.data.token)
          },
              function(){
              console.log("请求完成")
            })
        }else{
          console.log("获取不到code")
        }
      },
      fail(){
        console.log("获取code出错")
      }
    })
  }
})
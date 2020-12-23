//获取应用实例
const app = getApp()
import url from '../../api/api.js'


Page({
  data: {
    data:''
  },

  onLoad: function () {
    let _this = this
    url.show({},function(res){
      console.log(res)
/*      _this.setData({
        data: res.data
      })*/
    })
  },
  search(){
    wx.navigateTo({
      url: '../search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  logintwo(){
    wx.checkSession({
      success() {
        // session_key 未过期，并且在本生命周期一直有效
        console.log(147)
        if(!wx.getStorageSync('token')){
        console.log('token不存在or失效')
        }
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        wx.login({
          success(res){
            console.log(res)
            wx.request({
              url: 'http://zmtzwb.oicp.net:8080/wx/user/wx6a2fc9c872aeaa09/login',
              data:{
                code:res.code,
                AppID:'wx6a2fc9c872aeaa09'
              },
              success(res){
                wx.setStorage({
                  key: 'token',
                  data: res.data.token,
                })
                  console.log(res)
              }
            })
          },
          fail(err){
                console.log("登录失败"+err)
          }
        }) // 重新登录
      }
    })
  },
  getstorge(){
    wx.getStorage({
      key:"token",
      // key:"userinfo",
      success(res){
        console.log(res)
        // console.log(res.data)
      },
      fail(err){
        console.log(err)
      }
    })
  }
})

//logs.js
import {GetUserInfo, Login} from "../../api/api";

const util = require('../../utils/util.js')

Page({
  data: {
    list:[
      {
        icon: "../../resource/icon/guanzhu.png",
        title: "关注的博主",
        id: 0
      },
      {
        icon: "../../resource/icon/shoucang.png",
        title: "收藏的搭配",
        id: 1
      },
      {
        icon: "../../resource/icon/msg.png",
        title: "消息",
        id: 2
      },
      {
        icon: "../../resource/icon/findUser.png",
        title: "查找用户",
        id: 3
      },
      {
        icon: "../../resource/icon/dingdan.png",
        title: "我的订单",
        id: 4
      }
    ],
    avatarUrl: ''
  },
  getstorage(){
    wx.getStorage({
      key: 'userinfo',
      success: function(res) {
        console.log(res.avatarUrl)
      },
      fail(err){
        console.log(err+1)
      }
    })
  },
  onLoad: function () {
  },
  login(){
      wx.login({
        success(res) {
         if (res.code) {
            Login(res.code,function(err,res){
                if(err){
                    console.log('err'+err)
                    return
                }
                console.log(res);
                GetUserInfo(null,function(err,res){
                    if(err){
                        console.log('err'+err)
                        return
                    }
                    console.log(res)
                })
            })
         } else {
            console.log('获取code失败' + res.errMsg)
          }
        }
     })
  }
})

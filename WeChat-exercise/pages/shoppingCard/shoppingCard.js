// pages/shoppingCard/shoppingCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  list:{
    title:'购物车',
    msg:'购物车里渲染'
  },
  avatarUrl:''
  },

  
  bindGetUserInfo(e){
    console.log(e)
    if(e.detail.userInfo){
      //  consloe.log(e.detail.userInfo.nickName)
      wx.setStorage({
        key: 'userinfo',
        data: e.detail,
      })
       this.setData({
         avatarUrl:e.detail.userInfo.avatarUrl
       })
    }else{
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  }
})
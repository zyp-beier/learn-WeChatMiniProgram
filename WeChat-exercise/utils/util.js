const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const request = function(url,method,data,callback,done){
  let token = wx.getStorageSync("token")
  data = data || {}
  if(token){
    if(!data.token){
      data.token = token
    }
  }
  return wx.request({
    url:url,
    method:method,
    data:data,
    success(res){
      if(res.data.code===0){
        callback(null,res);
        return
        }
      callback(new Error("Error for api response code not equals 0"))
    },
    fail(res){
      callback(res,null)
    },
    complete(){
        done && typeof done==="function" && done()
    }
  })
}

module.exports = {
  formatTime: formatTime,
  // request: request
  GET:function(url,data,callback,done){
    return request(url,'GET',data,callback,done)
  },
  POST:function(url,data,callback,done){
    return request(url,'POST',data,callback,done)
  }
}

// app.js
App({
  globalData: {
    token:null//保存token
  },

  onLaunch: function () {
    this.login()
  },
  login: function () {
    wx.login({
      success: res => {
        console.log('login code: ' + res.code)
        wx.request({
          url: 'http://127.0.0.1:3000/login',
          method: 'post',
          data: {
            code: res.code
          },
          success: res => {
            console.log('token: ' + res.data.token)
           
            this.globalData.token = res.data.token
           
            wx.setStorage({
              key: 'token',
              data: res.data.token
            })
          }
        })
      }
    })
  }
})

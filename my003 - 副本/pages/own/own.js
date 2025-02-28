const app = getApp()
const defaultAvatar = '/images/2.jpg'
Page({
  data: {
    avatarUrl: defaultAvatar,
  },
  //跳转到非tabBar页面  
  gotoPage: function (options) {
    wx.navigateTo({
          url: '/pages/gengduo/gengduo',//要跳转到的页面路径
  })  
  },
  credit: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/media',
      data: {
        token: app.globalData.token
      },
      success: res => {
        console.log(res.data)
      }
    })
  },
  onChooseAvatar: function (e) {
    console.log(e)
    const { avatarUrl } = e.detail
    this.setData({ avatarUrl })
  },  
})
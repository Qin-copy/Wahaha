// pages/test/test.js
const mapCtx=wx.createMapContext('myMap')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[{
      'id':1,
      'latitude':'38.049151',
      'longitude':'114.517245',
      'iconPath':'/images/location.png',
      width:50,
      height:40
    },
  {
    'id':2,
    'latitude':'38.049151',
    'longitude':'114.517245',
    'iconPath':'/images/location.png'
  }
],
longitude:'114.517245',
latitude:'38.049151'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
mapCtx.getCenterLocation({
  success:res=>{
    console.log(res)
    this.data.longitude=res.longitude,
    this.data.latitude=res.latitude
  }
})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  movemap(){
    mapCtx.moveToLocation({
      longitude:this.data.latitude,
      latitude:this.data.latitude
    })
  },
  getLocation(){
    wx.getLocation({
      type:'gcj02',
      success:res=>{
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  }
})
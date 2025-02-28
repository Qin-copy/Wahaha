// pages/map/map.js
const key='IJNBZ-QCZ3I-HTWGA-U3TYQ-XUSZO-MOBRS'
const QQMapWX=require('../../libs/qqmap-wx-jssdk')
const qqmapsdk=new QQMapWX({key:'95db16760f6f0f6f80764d84cbfa0a68'
})
Page({
  getFood:function(longitude,latitude){
    qqmapsdk.search({
      keyword:'餐厅',
      location:{
        longitude:longitude,
        latitude:latitude
      },
      success:res=>{
        var markers=[]
        for(let i in res.data){
          markers.push({
            iconPath:'/images/food.png',
            id:markers.length,
           /** latitude:res.data[i].location.lat,
            longitude:res.data[i].location.lng,*/ 
            latitude:latitude,
            longitude:longitude,
            width:15,
            height:40
          })
        }
        markers.push({
          iconPath:'/images/center.png',
          id:res.data.length,
          latitude:latitude,
          longitude:longitude,
          width:15,
          height:40
        })
        this.setData({markers})
      }
    })
  },
  data: {
    scale:18,
    longitude:0,
    latitude:0,
    markers:[]
  },
  mapCtx:null,

  /**
   * 生命周期函数--监听页面加载
  onLoad:function() { */
    onLoad(options) {
    wx.getLocation({
      type:'gcj02',
      success:res=>{
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
    this.mapCtx=wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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
  bannerTap:function(){
    wx.navigateTo({
      url: '/pages/coupon/coupon',
    })
  },
  regionChange:function(e){
    if(e.type==='end'){
      this.mapCtx.getCenterLocation({
        success:res=>{
          this.getFood(res.longitude,res.latitude)
        }
      })
    }
  },
  controlTap:function(e){
    this.mapCtx.moveToLocation()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
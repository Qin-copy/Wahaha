// pages/map/map.js
const key='CTNBZ-5QXWJ-RNPFZ-XC3GI-6QUBZ-AEBZC'
const QQMapWX=require('../../libs/qqmap-wx-jssdk')
const qqmapsdk=new QQMapWX({key})
Page({
  //getFood:function(longitude,latitude){
  getFood(longitude,latitude){  
    qqmapsdk.search({
      keyword:'电影院',//搜索关键词
      location:{
        longitude:longitude,
        latitude:latitude
      },
      success:res=>{
        var markers=[]
        for(let i in res.data){
          markers.push({
            iconPath:'/images/food.png',
            id:res.data.length,
            latitude:latitude,
            longitude:longitude,
            width:15,
            height:40
          })
          //将搜索结果显示在地图上
          this.setData({markers})
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
    scale:18,//缩放
    longitude:0,//地图中心点经度
    latitude:0,//地图中心点纬度
    markers:[]//标记点
  },
  mapCtx:null,//保护MapContext实例

  onLoad(options){
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
  //onReady:function() {
  onReady(){
    this.mapCtx=wx.createMapContext('myMap')
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
  //controlTap:function(e){
  controlTap(e){  
    this.mapCtx.moveToLocation()
  }

})
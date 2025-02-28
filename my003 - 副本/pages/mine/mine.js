// pages/mine/mine.js
//背景音乐
const backgroundAudioManager = wx.getBackgroundAudioManager();
Page({
  data: {
    //横向滑动列表数据
    nav_list:['6', '5', '4', '3', '2', '1'],
    currentTab: '' //当前选中的目标下标从0开始
  },

  onLoad(options) {
    this.playMusic();//建立函数用于背景音乐||||
  },
  playMusic(){
    backgroundAudioManager.src="http://music.163.com/song/media/outer/url?id=2155900341.mp3";//网易云音乐地址
    backgroundAudioManager.title="背景音乐";
    backgroundAudioManager.play();
    //实现循环播放
    backgroundAudioManager.onEnded(() => { 
      this.playMusic();
    });
  },
  pause() {
    backgroundAudioManager.pause();//暂停
  },
  stop() {
    backgroundAudioManager.stop();
  },//（end）
  
  // 小程序隐藏时候停止播放（不加页面将一直播放）
  /*
  onHide() {
    backgroundAudioManager.stop();
  },
  // 页面卸载时候停止播放（不加页面将一直播放）
  onUnload() {
    backgroundAudioManager.stop();
  },
  */
  //横向滑动函数实现
  async swichNav(e) {
    var current = e.target.dataset.index
    if (this.data.currentTab != current) {
      this.setData({ currentTab: current })
    }
    // 点击的目标
    var mon = 6 - current
    if (mon < 4) {
      mon = '0' + mon
    }
    console.log('当前目标：' + mon)
  },
  //js部分示例代码
 //跳转到tabBar页面  
  gotoPage: function (options) {   
    wx.switchTab({      
        url: '/pages/wplay/wplay',    //要跳转到的页面路径
    })  
  },

})
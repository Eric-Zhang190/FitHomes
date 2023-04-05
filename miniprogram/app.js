// app.js

App({

  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env:"cloud1-6g2eaes788ded79b"
      });
      
    }
  // //
  //   const logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)
  
  // //
  // wx.login({
  //   success: res => {

  //   }
  // })

  
   // this.globalData = {};
  },
  globalData: {
    outerIndex: 0
    },
});

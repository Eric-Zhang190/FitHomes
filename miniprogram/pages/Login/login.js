const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
// pages/User/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    avatarUrl: defaultAvatarUrl,
    nickName: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      // const userinfo = wx.getStorageSync('userinfo');
      // this.setData({userinfo})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onChooseAvatar(res) {
    const { avatarUrl } = res.detail 
    this.setData({
      avatarUrl,
    })
  },

  loginSys: function() {
    let that = this;
    wx.cloud.uploadFile({
      cloudPath: this.data.nickName+ this.data.avatarUrl.substring(this.data.avatarUrl.lastIndexOf(".")),
      filePath: this.data.avatarUrl, 
      success: res => {
        // get resource ID
        console.log(res.fileID)

        let user = {
          user_nickname: that.data.nickName,
          user_photo: res.fileID,
          user_regtime: new Date()
        }

        const db = wx.cloud.database();
        db.collection('login_users').add({
          data: user
        }).then(res => {
          console.log('新增成功', res);
          user._id = res._id;
          app.globalData.cur_user=user;
          wx.switchTab({
            url: '/pages/Login/login',
          })
        })


      },
      fail: err => {
        // handle error
      }
    })
  },

  
  toIndex: function () {
    wx.switchTab({
      url: '/pages/homepage/homepage'
    })

  },


  toHousing: function () {
    wx.switchTab({
      url: '/pages/list/list'
    })
  },

  handleApplyService: function () {
    wx.navigateTo({
      url: '/pages/ServiceApplication/service_application',
    })
  },

  handleServiceHistory: function () {
    wx.navigateTo({
      url: '/pages/ServiceHistory/service_history',
    })
  },

  handleMyService: function () {
    wx.navigateTo({
      url: '/pages/MyService/my_service',
    })
  },
})
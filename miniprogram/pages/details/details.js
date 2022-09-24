// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    house1: [
      {value: 'Airbnb型公寓，设有大部分家具（床/床垫，沙发，餐桌椅，书桌椅等）欢迎拎包入住'},
      {value: '屋内设有独立洗衣机和烘干机，无需跟别的公寓租户共用公用洗衣房'},
      {value: '公寓管理费用已经包括了水电冷暖气，只需房租一项无需担心额外账单，价格绝对合理公道'},
      {value: '我们有专业管理团队负责，可以随时告诉我们您的需求'},
    ],
    house2: [
      {value: '2B1B'},
      {value: '禁止宠物'},
      {value: '禁止吸烟'},
      {value: '不限男女'},
      {value: '有停车位'},
    ],
    img1: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5750-transformed.jpg",
    img2: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5751-transformed.jpg",
    img3: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5763-transformed.jpg",
    img4: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5757-transformed.jpg"
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

  toDetails(){
    wx.navigateTo({
      url: '/pages/appication/appication'
    })
  }
})
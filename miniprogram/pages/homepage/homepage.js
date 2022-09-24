// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    img1: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/fit logo white w bg.jpg",
    img2: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/home-swiper2.jpg",
    swiperImgUrls: [
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/home-swiper3 (1).jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/home-swiper5.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/home-swiper4 (2).jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/home-swiper5.jpg"
    ],
    swiperIndex: 0
  },

  // data: {
  //   img1: "https://636c-cloud1-6g2eaes788ded79b-1308659050.tcb.qcloud.la/fit%20logo%20black%20w%20bg.png?sign=57c6f1a4803c0abbbc81a5f0cf599707&t=1662816494",
  //   img2: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5750-transformed.jpg",
  //   img3: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5751-transformed.jpg",
  //   img4: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5763-transformed.jpg",
  //   img5: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/IMG_5757-transformed.jpg"
  // },

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

  /**
   * 轮播滑动时，获取当前的轮播id
   */
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  }
})
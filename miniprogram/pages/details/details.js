// pages/details/details.js

var app = getApp();


Page({
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
    img: [
      [
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview1.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview2.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview3.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview4.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview5.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview6.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview7.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_preview8.jpg"
      ],
      [
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview1.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview2.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview3.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview4.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview5.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview6.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview7.jpg",
        "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_preview8.jpg"
      ]
    ],
    imgArray: [
      [
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big1.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big2.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big3.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big4.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big5.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big6.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big7.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_big8.jpg"
    ],
    [
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big1.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big2.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big3.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big4.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big5.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big6.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big7.jpg",
      "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_big8.jpg"
    ]
    ],
    detailObj: [],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let index = options.index;

    this.setData({
      detailObj: this.data.img[index],
      index  
    })

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
      url: '/pages/appication_test/appication_test'
    })
  },

  toTour(){
    wx.navigateTo({
      url: '/pages/Tour/tour'
    })
  },

  previewImg: function(e) {
        // console.log(e);
        
        let index = e.currentTarget.dataset.index;
        let img = this.data.imgArray[app.globalData.outerIndex];
       
        wx.previewImage({
          current: img[index],
          urls: img,
        })
  }
})
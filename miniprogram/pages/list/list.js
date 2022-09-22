// pages/list/list.js
let datas = require('../../data/list-data.js');
console.log(datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listArr: [],
      temArr: [],
      items: [
        {value: 'All', name: 'All', checked: 'true'},
        {value: 'UMD', name: 'UMD'},
        {value: 'GBS', name: 'GBS'},
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
    this.setData({
      listArr : datas.list_data
    })
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

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    console.log(e);

    

    if (e.detail.value == "GBS") {


      this.setData({
        listArr : []
      })
    } else {
      this.setData({
        listArr : datas.list_data
      })
    }

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  },

  toDetails(){
    wx.navigateTo({
      url: '/pages/details/details'
    })
  }


})
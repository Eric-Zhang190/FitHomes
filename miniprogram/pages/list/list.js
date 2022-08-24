// pages/list/list.js
let datas = require('../../data/list-data.js');
console.log(datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listArr: [],
      items: [
        {value: 'All', name: 'All', checked: 'true'},
        {value: 'UMD', name: 'UMD'},
        {value: 'GBS', name: 'GBS'},
      ]
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
      url: 'pages/d',
    })
  }


})
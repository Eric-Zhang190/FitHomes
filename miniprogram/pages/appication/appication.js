// pages/details/detail.js
let data = require('../../data/list-data');
let showTV = true;

Page({


  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    pickerHidden: true,
    showTV: false,
    showRental: false,
    chosen: '',
    array: ['整租', '分租'],
      objectArray: [
        {
          id: 0,
          name: '整租'
        },
        {
          id: 1,
          name: '单间'
        }
      ],
      index: 0
  },

   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let index = options.index;
    this.setData({
      detailObj: data.list_data[index],
      index: index
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

  
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

  //---------------------------------------------- //
  // data: {
  //   array: ['整租', '单间'],
  //   objectArray: [
  //     {
  //       id: 0,
  //       name: '整租'
  //     },
  //     {
  //       id: 1,
  //       name: '单间'
  //     }
  //   ],
  //   index: 0
  
  // },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  handleTv: function() {
    // var that = this;
    // that.setData({
    //   showTV: (!that.data.showTV)
    // })
    this.setData({
      showTV: (!this.data.showTV)
    })
  },

  handleRental: function() {
    // var that = this;
    // that.setData({
    //   showTV: (!that.data.showTV)
    // })
    this.setData({
      showRental: (!this.data.showRental)
    })
  },

  handleRentalFalse: function() {
    // var that = this;
    // that.setData({
    //   showTV: (!that.data.showTV)
    // })
    this.setData({
      showRental: false
    })
  },

  backToDetails: function() {
    wx.navigateTo({
      url: '/pages/details/details'
    });

    wx.showToast({
      title:'成功',
      icon:'success',
      duration:2000
      })
  },


  

  // ------------------------------------------//
})
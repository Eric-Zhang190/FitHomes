// pages/details/detail.js
// let data = require('../../data/list-data');
// let showTV = true;
const db = wx.cloud.database()

let data_sample = require('../../data/goods_data_sample');

var app = getApp();

Page({
  data: {
    detailObj: {},
    item2P2C: {},
    index: null,
    pickerHidden: true,
    showTV: false,
    showRental: false,
    chosen: '',
    chooseArray: [],
    array: ['整租', '分租'],
    objectArray: [{
        id: 0,
        name: '整租'
      },
      {
        id: 1,
        name: '单间'
      }
    ],
    chosedItem: [],

    leftMenuList: [],
    rightContent: [],
    rightContentNew: [],
    index: 0,
    // 被点击的左侧菜单
    currentIndex: 0,
    imgUrl: "../../icon/QR.png",
    bottomDialogIndex: 0,
    bottomContent: [{
        "cate_bid": 0,
        "cate_bicon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/tv2.png",
        "cate_bdes": "this is one!!"
      },
      {
        "cate_bid": 1,
        "cate_bicon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/tv1.png",
        "cate_bdes": "this is second!!"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let leftMenuList = data_sample.goods_data_sample.map(v => v.cat_name);
    let rightContent = data_sample.goods_data_sample[0].children;
    this.setData({
      data_sample: data_sample.goods_data_sample,
      leftMenuList,
      rightContent
    })

    // console.log('goods data is:', data_sample);
    // console.log('leftMenuList is:', leftMenuList);
    // console.log('rightContent is:', rightContent);
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

  handleItemTap(e) {
    const {
      index
    } = e.currentTarget.dataset;

    console.log('e.currentTarget.dataset - handle item tap', e.currentTarget.dataset);
    console.log("Index is:", index);

    let rightContent = data_sample.goods_data_sample[index].children;
    console.log("rightContent is:", rightContent);

    this.setData({
      currentIndex: index,
      rightContent
    })
  },

  onClick: function (e) {
    // console.log('e.currentTarget.dataset', e.currentTarget.dataset);
    const {
      index2,
      item2
    } = e.currentTarget.dataset;
    // console.log('index2', index2);
    // console.log('item2', item2);

    this.setData({
      item2P2C: item2
    })

    // console.log('item2p2c is:', this.data.item2P2C);

    this.selectComponent('#bottomFrame').showFrame();

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

  formSubmit(res) {
    console.log(res.detail.value);
    var {
      所在小区,
      报修描述,
      报修问题,
      备注,
    } = res.detail.value;
    db.collection("service_details").add({
      data: {
        service_area: 所在小区,
        service_detail: 报修描述,
        service_title: 报修问题,
        service_note: 备注,
      }
    }).then(res => {
      console.log(res)
    })

    wx.switchTab({
      url: '/pages/Login/login',
    });

    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  handleTv: function () {
    // var that = this;
    // that.setData({
    //   showTV: (!that.data.showTV)
    // })
    this.setData({
      showTV: (!this.data.showTV)
    })
  },

  handleRental: function () {
    // var that = this;
    // that.setData({
    //   showTV: (!that.data.showTV)
    // })
    this.setData({
      showRental: (!this.data.showRental)
    })
  },

  handleRentalFalse: function () {
    // var that = this;
    // that.setData({
    //   showTV: (!that.data.showTV)
    // })
    this.setData({
      showRental: false
    })
  },

  backToDetails: function () {
    // wx.switchTab({
    //   url: '/pages/list/list'
    // });

    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },


  // onclick here

  chooseItem: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      ['deviceList[' + index + '].isCheck']: !this.data.deviceList[index].isCheck
    })
    console.log("点击了:", this.data.deviceList[index].name)
  },

  //点击取消之后
  onCancel() {
    //恢复选中的数据
    wx.showToast({
      icon: "none",
      title: '对这个产品没有兴趣',
    })
  },

  //点击确定之后
  onConfirm(e) {
    wx.showToast({
      icon: "none",
      title: '产品已经加入家电选项',
    })
    console.log('item2P2C name is:', this.data.item2P2C.cat_name);

    let that = this;
    let chosedItemEle = this.data.item2P2C.cat_name;
    let chosedItem = that.data.chosedItem;

    if (!this.data.chosedItem.includes(chosedItemEle)) {
      chosedItem.push(chosedItemEle);
    }


    // console.log('chosedItemEle is:', chosedItemEle);
    // console.log('chosed Item array is:', this.data.chosedItem)

    this.setData({
      chosedItem
    })
  },

  previewImg: function (e) {
    // console.log(e);

    let imgUrl = this.data.imgUrl;

    wx.previewImage({
      current: '',
      urls: [imgUrl],
    })
  },

  handleCancel(e) {
    console.log('handle cancel e is:', e);
    const {
      index
    } = e.currentTarget.dataset;

    let that = this;

    let chosedItemEleIndex = index;

    let chosedItem = that.data.chosedItem.filter((item, index1) => {
      console.log('index1', index1);
      return chosedItemEleIndex != index1;
    })

    this.setData({
      chosedItem
    })
  },


  // ------------------------------------------//
})
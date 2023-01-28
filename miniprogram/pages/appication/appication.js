// pages/details/detail.js
let data = require('../../data/list-data');
let showTV = true;

Page({
  data: {
    detailObj: {},
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
    leftMenuList: ['娱乐设施', '厨卫电器', '生活用具', '生活电器'],
    // leftMenuList: ['娱乐设施', '生活用具', '生活电器'],
    rightContent: [
      {
        "cate_name": '电视',
        "id": 0,
        "children": [{
            "cate_id": 1,
            "cate_name": "大彩电",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/tv1.png"
          },
          {
            "cate_id": 2,
            "cate_name": "曲面电视",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/tv2.png"
          }
        ]
      },
      {
        "cate_name": '吸尘器',
        "id": 1,
        "children": [{
            "cate_id": 1,
            "cate_name": "小型号",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/vaccum1-min.png"
          },
          {
            "cate_id": 2,
            "cate_name": "中型号",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/vaccum2-min.png"
          }
        ]
      },
      {
        "cate_name": '餐具',
        "id": 2,
        "children": [{
            "cate_id": 1,
            "cate_name": "餐具1",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/canju1-min.png"
          },
          {
            "cate_id": 2,
            "cate_name": "餐具2",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/canju2-min.png"
          }
        ]
      },
      {
        "cate_name": '热水壶',
        "id": 3,
        "children": [{
            "cate_id": 1,
            "cate_name": "热水壶1",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/teapot1-min.png"
          },
          {
            "cate_id": 2,
            "cate_name": "热水壶2",
            "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/teapot2-min.png"
          }
        ]
      }
    ],
    rightContentNew: [
      {
      "cate_name": '电视',
      "id": 0,
      "children": [{
          "cate_id": 1,
          "cate_name": "大彩电",
          "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/tv1.png"
        },
        {
          "cate_id": 2,
          "cate_name": "曲面电视",
          "cate_icon": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/tv2.png"
        },
      ]
    }
  ],
    index: 0,
    // 被点击的左侧菜单
    currentIndex: 0,
    imgUrl: "../../icon/QR.png",
    bottomDialogIndex: 0,
    bottomContent: [
      {
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
  onLoad: function (options) {
    // console.log(options);
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

  handleItemTap(e) {
    const {
      index
    } = e.currentTarget.dataset;

    console.log('e.currentTarget.dataset - handle item tap', e.currentTarget.dataset);

    // let rightContentNew = [];
    // this.setData({
    //   rightContentNew : this.data.rightContent.filter(item => item.id== index)
    // })

    let rightContentNew = this.data.rightContent.filter(item => item.id == index)
    // console.log("right content:", rightContentNew);

    console.log("currentIndex is:", this.data.currentIndex);

    this.setData({
      currentIndex: index,
      rightContentNew
    })
  },

  onClick: function (e) {
    let {
      index
    } = e.currentTarget.dataset;

    const x = e.detail.x;

    console.log("e is:", e);
    console.log("e.currentTarget.dataset is:", e.currentTarget.dataset);
    
    console.log("x is:", x);

    if (x > 230 ) {
      index = 1;
    } else {
      index = 0;
    }
    console.log("index is:", index);


    let bottomContent = this.data.bottomContent.filter(item => item.cate_bid == index)
    console.log("bottomContent is:", bottomContent);

    console.log("bottomDialogIndex is:", this.data.bottomDialogIndex);

    this.setData({
      bottomDialogIndex: index,
      bottomContent
    })

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

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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
    wx.navigateTo({
      url: '/pages/details/details'
    });

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
  onConfirm() {
    wx.showToast({
      icon: "none",
      title: '产品已经加入家电选项',
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




  // ------------------------------------------//
})
// pages/list/list.js
let datas = require('../../data/list-data.js');

var app = getApp();
// var outerIndex = app.globalData.outerIndex;
// console.log(app.globalData);
// console.log("outerindex in lists:" + outerIndex);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    universityItems: [{
        id: 0,
        name: 'UMD',
        isActive: false
      },
      {
        id: 1,
        name: 'GWU',
        isActive: false
      },
      {
        id: 2,
        name: 'GMU',
        isActive: false
      },
      {
        id: 3,
        name: 'JHU',
        isActive: false
      }
    ],
    regionItems: [
      // {id: 0, name: 'All', isActive: true},
      {
        id: 1,
        name: 'Westchester Park',
        isActive: false
      },
      {
        id: 2,
        name: 'GBS',
        isActive: false
      },
    ],
    typeItems: [{
        id: 0,
        name: 'Townhouse',
        isActive: false
      },
      {
        id: 1,
        name: 'Apartment',
        isActive: false
      },
      {
        id: 2,
        name: 'Studio',
        isActive: false
      }
    ],
    modeItems: [{
        id: 0,
        name: '1B1B',
        isActive: false
      },
      {
        id: 1,
        name: '2B1B',
        isActive: false
      },
      {
        id: 2,
        name: '3B1B',
        isActive: false
      },
      {
        id: 3,
        name: '5B3.5B',
        isActive: false
      }
    ],
    postsList: [{
        "id": 1,
        "categories": [
          0
        ],
        "post_thumbnail_image": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_Overview.jpg",

      },
      {
        "id": 2,
        "categories": [
          1
        ],
        "post_thumbnail_image": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_Overview.jpg",
      },
      {
        "id": 3,
        "categories": [
          2
        ],
        "post_thumbnail_image": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_Overview.jpg",
      },
      {
        "id": 4,
        "categories": [
          3
        ],
        "post_thumbnail_image": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_Overview.jpg",
      },
      {
        "id": 5,
        "categories": [
          4
        ],
        "post_thumbnail_image": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_Overview.jpg",
      },
      {
        "id": 6,
        "categories": [
          5
        ],
        "post_thumbnail_image": "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6002_Overview.jpg",
      }
    ],
    showList: false,
    univValue: "UMD",
    regionValue: "",
    typeValue: "",
    modeValue: "",
    currentIndexU: 0,
    currentIndexR: null,
    currentIndexT: null,
    currentIndexM: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
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

  toDetails(event) {

    let indexOuter = event.currentTarget.dataset.index;
    // console.log("index in lists:" + indexOuter);

    app.globalData.outerIndex = indexOuter;

    // console.log('outerIndex updated:'  + app.globalData.outerIndex);

    wx.navigateTo({
      url: '/pages/details/details?index=' + indexOuter,
    })
  },

  handleClickUniv(e) {
    console.log('handleclick e is:', e);

    let {
      index
    } = e.currentTarget.dataset;
    const typeItem = e.currentTarget.dataset.item;

    if (typeItem == " ") {
      this.setData({
        listArr: datas.list_data.filter(item => item.univ == "UMD"),
        // univValue: "UMD",
      })
    }
    // 一元
    if (this.data.regionValue != "" && this.data.typeValue == "" && this.data.modeValue == "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.typeValue != "" && this.data.modeValue == "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.typeValue == "" && this.data.modeValue != "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == this.data.modeValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == this.data.modeValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == this.data.modeValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == this.data.modeValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    //二元
    if (this.data.regionValue != "" && this.data.typeValue != "" && this.data.modeValue == "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue != "" && this.data.typeValue == "" && this.data.modeValue != "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.typeValue != "" && this.data.modeValue != "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    //三元
    if (this.data.regionValue != "" && this.data.typeValue != "" && this.data.modeValue != "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "UMD"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "GWU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "GMU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue &&
              item.univ == "JHU"
            )
          }),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

    //0元
    if (this.data.regionValue == "" && this.data.typeValue == "" && this.data.modeValue == "") {
      if (typeItem == "UMD") {
        this.setData({
          listArr: datas.list_data.filter(item => item.univ == "UMD"),
          univValue: typeItem,
          currentIndexU: index,
        })
      } else if (typeItem == "GWU") {
        this.setData({
          listArr: datas.list_data.filter(item => item.univ == "GWU"),
          univValue: typeItem,
          currentIndexU: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else if (typeItem == "GMU") {
        this.setData({
          listArr: datas.list_data.filter(item => item.univ == "GMU"),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => item.univ == "JHU"),
          univValue: typeItem,
          currentIndexU: index,
          // isActive: !isActive
        })
      }
    }

  },

  handleClickRegion(e) {
    console.log('handleclick e is:', e);
    let {
      index
    } = e.currentTarget.dataset;

    const typeItem = e.currentTarget.dataset.item;
    console.log('typeItem is:', typeItem);
    console.log('region value is:', this.data.regionValue);
    if (typeItem == " ") {
      this.setData({
        listArr: datas.list_data.filter(item => item.univ == "UMD"),
      })
    }

    // 一元
    if (this.data.univValue != "" && this.data.typeValue == "" && this.data.modeValue == "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.univ == this.data.univValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.univ == this.data.univValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.univValue == "" && this.data.typeValue != "" && this.data.modeValue == "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.type == this.data.typeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.type == this.data.typeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.univValue == "" && this.data.typeValue == "" && this.data.modeValue != "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    //二元
    if (this.data.univValue != "" && this.data.typeValue != "" && this.data.modeValue == "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.univValue != "" && this.data.typeValue == "" && this.data.modeValue != "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.univ == this.data.univValue &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.univ == this.data.univValue &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.univValue == "" && this.data.typeValue != "" && this.data.modeValue != "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.type == this.data.typeValue &&
              item.type == this.data.typeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    //三元
    if (this.data.univValue != "" && this.data.typeValue != "" && this.data.modeValue != "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "Westchester Park" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.area == "GBS" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue &&
              item.mode == this.data.modeValue
            )
          }),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }

    //0元
    if (this.data.univValue == "" && this.data.typeValue == "" && this.data.modeValue == "") {
      if (typeItem == "Westchester Park") {
        this.setData({
          listArr: datas.list_data.filter(item => item.area == "Westchester Park"),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "GBS") {
        this.setData({
          listArr: datas.list_data.filter(item => item.area == "GBS"),
          regionValue: typeItem,
          currentIndexR: index,
          // isActive: !isActive
        })
      }
    }
  },


  handleClicktype(e) {
    console.log('handleclick e is:', e);
    let {
      index
    } = e.currentTarget.dataset;

    console.log('current index', index);

    const typeItem = e.currentTarget.dataset.item;
    console.log('typeItem is:', typeItem);
    console.log('region value is:', this.data.regionValue);
    if (typeItem == " ") {
      this.setData({
        // listArr: datas.list_data,
        listArr: datas.list_data.filter(item => item.univ == "UMD"),
        // isActive: !data.isActive
      })
    }

    // 一元
    if (this.data.regionValue != "" && this.data.univValue == "" && this.data.modeValue == "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.area == this.data.regionValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.area == this.data.regionValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.area == this.data.regionValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.univValue != "" && this.data.modeValue == "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.univValue == "" && this.data.modeValue != "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    //二元
    if (this.data.regionValue != "" && this.data.univValue != "" && this.data.modeValue == "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.area == this.data.regionValue &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.area == this.data.regionValue &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.area == this.data.regionValue &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue != "" && this.data.univValue == "" && this.data.modeValue != "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.univValue != "" && this.data.modeValue != "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.mode == this.data.modeValue &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.mode == this.data.modeValue &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.mode == this.data.modeValue &&
              item.univ == this.data.univValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    //三元
    if (this.data.regionValue != "" && this.data.univValue != "" && this.data.modeValue != "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Townhouse" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Apartment" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.type == "Studio" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.mode == this.data.modeValue
            )
          }),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }

    //0元
    if (this.data.regionValue == "" && this.data.univValue == "" && this.data.modeValue == "") {
      if (typeItem == "Townhouse") {
        this.setData({
          listArr: datas.list_data.filter(item => item.type == "Townhouse"),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "Apartment") {
        this.setData({
          listArr: datas.list_data.filter(item => item.type == "Apartment"),
          typeValue: typeItem,
          currentIndexT: index,
          // isActiveU2: (!this.data.isActiveU2)
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => item.type == "Studio"),
          typeValue: typeItem,
          currentIndexT: index,
          // isActive: !isActive
        })
      }
    }
  },

  handleClickMode(e) {
    console.log('handleclick e is:', e);
    let {
      index
    } = e.currentTarget.dataset;

    const typeItem = e.currentTarget.dataset.item;
    console.log('typeItem is:', typeItem);
    console.log('type value is:', this.data.modeValue);


    if (typeItem == " ") {
      this.setData({
        listArr: datas.list_data.filter(item => item.univ == "UMD"),
        // isActive: !data.isActive
      })
    }

    //一元
    if (this.data.regionValue == "" && this.data.univValue != "" && this.data.typeValue == "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.univ == this.data.univValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.univ == this.data.univValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.univ == this.data.univValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.univ == this.data.univValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue !== "" && this.data.univValue == "" && this.data.typeValue == "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.univValue == "" && this.data.typeValue != "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    //二元
    if (this.data.regionValue != "" && this.data.univValue != "" && this.data.typeValue == "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue !== "" && this.data.univValue == "" && this.data.typeValue != "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.univ == this.data.univValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    if (this.data.regionValue == "" && this.data.univValue != "" && this.data.typeValue != "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    //三元
    if (this.data.regionValue != "" && this.data.univValue != "" && this.data.typeValue != "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B" &&
              item.univ == this.data.univValue &&
              item.area == this.data.regionValue &&
              item.type == this.data.typeValue
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

    //0元
    if (this.data.regionValue == "" && this.data.univValue == "" && this.data.typeValue == "") {
      if (typeItem == "1B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "1B1B"
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !data.isActive
        })
      } else if (typeItem == "2B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "2B1B"
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else if (typeItem == "3B1B") {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "3B1B"
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      } else {
        this.setData({
          listArr: datas.list_data.filter(item => {
            return (
              item.mode == "5B3.5B"
            )
          }),
          modeValue: typeItem,
          currentIndexM: index,
          // isActive: !isActive
        })
      }
    }

  },

  handleClearAll() {
    this.setData({
      listArr: datas.list_data.filter(item => item.univ == "UMD"),
      currentIndexU: 0,
      currentIndexR: null,
      currentIndexT: null,
      currentIndexM: null,
      univValue: "UMD",
      regionValue: "",
      typeValue: "",
      modeValue: "",
    })

  }


})
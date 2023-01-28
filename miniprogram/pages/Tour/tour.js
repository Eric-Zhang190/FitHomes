// pages/Tour/tour.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrl: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/vacuum2.png",
      deviceList:[{
          name:"家电01",
          isCheck: false
      },
      {
          name:"家电02",
          isCheck: false
      },
      {
          name:"家电03",
          isCheck: false
      },
      {
          name:"家电04",
          isCheck: false
      }
      ,   
      {
      name:"家电05",
      isCheck: false
   }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onClick: function(e){
      this.selectComponent('#bottomFrame').showFrame();
  },

  
chooseItem: function(e){
  let index = e.currentTarget.dataset.index;
  this.setData({
    ['deviceList[' + index + '].isCheck']:!this.data.deviceList[index].isCheck
  })
  console.log("点击了:",this.data.deviceList[index].name)
},

//点击取消之后
onCancel(){
  //恢复选中的数据
  wx.showToast({
      icon:"none",
      title: '对这个产品没有兴趣',
  })
},
//点击确定之后
onConfirm(){
  wx.showToast({
      icon:"none",
      title: '产品已经加入家电选项',
  })
},

previewImg: function(e) {
  // console.log(e);

  let imgUrl = this.data.imgUrl;
 
  wx.previewImage({
    current: '',
    urls: [imgUrl],
  })
}


})
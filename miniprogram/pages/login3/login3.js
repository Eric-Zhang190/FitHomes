// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    avatarUrl: "cloud://cloud1-6g2eaes788ded79b.636c-cloud1-6g2eaes788ded79b-1308659050/6034_Overview.jpg",
    nickName: ""
  },
  onChooseAvatar(e) {

    console.log(e);
    const { avatarUrl } = e.detail 
    // const avatarUrl = e.detail.avatarUrl;
    this.setData({
      avatarUrl,
    })
  },

  loginSys() {
    let that = this;
    wx.cloud.uploadFile({
      cloudPath: this.data.nickName+this.data.avatarUrl.substring(this.data.avatarUrl.lastIndexOf(".")),
      filePath: this.data.avatarUrl, // 文件路径
      success: res => {
        // get resource ID
        console.log(res.fileID)

        let user = {
          user_nickname: that.data.nickName,
          user_photo: res.fileID,
          user_regtime: new Date()

        }

        wx.cloud.database().collection('login_users').add({
          data: user,
          success: (res) => {
            console.log(res);
          }
        })
      },
      fail: err => {
        // handle error
      }
    })

    // wx.redirectTo({
    //   url: '/pages/homepage/homepage',
    // })

    wx.switchTab({
      url: '/pages/homepage/homepage'
    });
  }

  
})
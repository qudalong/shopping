// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },

  getWxAddress() {
    const that=this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success(res) {
              that.setData({
                userName: res.userName,
                telNumber: res.telNumber,
                countyName: res.provinceName + res.cityName + res.countyName,
                detailInfo: res.detailInfo,
              })
            }
          })
        } else {
          if (res.authSetting['scope.address'] == false) {
            wx.openSetting({
              success(res) {
              }
            })
          } else {
            wx.chooseAddress({
              success(res) {
                that.setData({
                  userName: res.userName,
                  telNumber: res.telNumber,
                  countyName: res.provinceName + res.cityName + res.countyName,
                  detailInfo: res.detailInfo,
                })
              }
            })
          }
        }
      }
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

  }
})
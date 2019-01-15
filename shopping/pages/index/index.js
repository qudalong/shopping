// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/image/img/banner01.jpg', '/image/img/banner02.jpg', '/image/img/banner03.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 400,
    list:[1,1,1,1,1,1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toProduceDetail() {
    wx.navigateTo({
      url: `/pages/productDetail/productDetail`
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
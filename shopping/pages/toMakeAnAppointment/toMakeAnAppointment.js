// pages/toMakeAnAppointment/toMakeAnAppointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: ['/image/img/banner04.jpg', '/image/img/banner02.jpg'],
    activeIndex: 0, //默认选中商品详情
    producType: false, //默认隐藏
  },

  changed(e) {
    const activeIndex = e.currentTarget.dataset.index;
    this.setData({
      activeIndex
    })
  },

  toHome() {
    wx.switchTab({
      url: `/pages/index/index`
    })
  },

  appointment() {
    wx.navigateTo({
      url: `/pages/submitTheBooking/submitTheBooking`
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
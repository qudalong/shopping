// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  getPhoneNumber(e) {
    if (e.detail.errMsg == 'getPhoneNumber:fail user deny') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '未授权',
        success: function(res) {}
      })
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '同意授权',
        success: function(res) {}
      })
    }
  },

  tel() {
    wx.makePhoneCall({
      phoneNumber: '18768871896',
    })
  },

  toOrderList(e) {
    const activeIndex = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/orderList/orderList?activeIndex=${activeIndex}`
    })
  },

  topUp() {
    wx.navigateTo({
      url: `/pages/topUp/topUp`
    })
  },

  toPointsFor() {
    wx.navigateTo({
      url: `/pages/pointsFor/pointsFor`
    })
  },

  toAboutUs() {
    wx.navigateTo({
      url: `/pages/aboutUs/aboutUs`
    })
  },

  toAddress() {
    wx.navigateTo({
      url: `/pages/addAddress/addAddress`
    })
  },

  toCollect() {
    wx.navigateTo({
      url: `/pages/collect/collect`
    })
  },

  toMyCart() {
    wx.navigateTo({
      url: `/pages/myCard/myCard`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
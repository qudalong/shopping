// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    imgList: ['/image/img/banner01.jpg', '/image/img/banner02.jpg'],
    list: [1, 1, 1, 1, 1, 1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const title = options.title;
    wx.setNavigationBarTitle({
      title
    })
  },

  selectItem(e) {
    const activeIndex = e.currentTarget.dataset.index;
    this.setData({
      activeIndex
    })
  },


  toMakeAnAppointment() {
    wx.navigateTo({
      url: `/pages/toMakeAnAppointment/toMakeAnAppointment`
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
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: ['/image/img/banner01.jpg', '/image/img/banner02.jpg', '/image/img/banner03.jpg'],
    list: [1, 1, 1, 1, 1, 1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  toSearch() {
    wx.navigateTo({
      url: `/pages/search/search`
    })
  },

  toHotMore() {
    wx.navigateTo({
      url: `/pages/hotMore/hotMore`
    })
  },

  toGroupMore(e) {
    const title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: `/pages/more/more?title=${title}`
    })
  },

  toAppointment(e) {
    const title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: `/pages/appointment/appointment?title=${title}`
    })
  },

  toShops() {
    wx.navigateTo({
      url: `/pages/goodStoreRecommend/goodStoreRecommend`
    })
  },

  toAgent() {
    wx.navigateTo({
      url: `/pages/agent/agent`
    })
  },

  topUp() {
    wx.navigateTo({
      url: `/pages/topUp/topUp`
    })
  },

  toFishon() {
    wx.navigateTo({
      url: `/pages/fashion/fashion`
    })
  },

  toSign() {
    wx.navigateTo({
      url: `/pages/checktheCalendar/checktheCalendar`
    })
  },

  toShop() {
    wx.navigateTo({
      url: `/pages/stores/stores`
    })
  },

  toProduceDetail() {
    wx.navigateTo({
      url: `/pages/productDetail/productDetail`
    })
  },

  toPointsFor() {
    wx.navigateTo({
      url: `/pages/pointsFor/pointsFor`
    })
  },

  toCoupon() {
    wx.navigateTo({
      url: `/pages/couponRedemptionCentre/couponRedemptionCentre`
    })
  },
  
  toTeamDetail() {
    wx.navigateTo({
      url: `/pages/teamDetail/teamDetail`
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
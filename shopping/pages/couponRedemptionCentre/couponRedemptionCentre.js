// pages/couponRedemptionCentre/couponRedemptionCentre.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      price: 20.00,
      full: 200,
      status: 0,
    }, {
      price: 30.00,
      full: 220,
      status: 0,
    }, {
      price: 1000.00,
      full: 900,
      status: 1,
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


  getCoupon(e) {
    const activeIndex = e.currentTarget.dataset.index;
    this.data.list.forEach((cur, index) => {
      if (activeIndex === index) {
        cur.status = 1;
        this.setData({
          list: this.data.list
        })
      }
      wx.showToast({
        title: '领取成功'
      })
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
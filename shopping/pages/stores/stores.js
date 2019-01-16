// pages/stores/stores.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      img: '/image/img/banner01.jpg',
      raking: [1, 1, 1, 1],
      name: '大卫城',
      tel: '18768874896',
      distance: 541
    }, {
      img: '/image/img/banner02.jpg',
      raking: [1, 1, 1],
      name: '国贸360',
      tel: '15159844557',
      distance: 954
    }, {
      img: '/image/img/banner03.jpg',
      raking: [1, 1, 1, 1, 1],
      name: '二七广场',
      tel: '19726546544',
      distance: 200
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    search:false//默认不显示搜索
  },

  bindEnter(){
    this.setData({
      search:true
    })
  },

  shopDetails() {
    wx.navigateTo({
      url: `/pages/shopDetail/shopDetail`
    })
  },

  getAdress() {
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
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
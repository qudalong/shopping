// pages/productDetail/productDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/image/img/banner04.jpg', '/image/img/banner02.jpg'],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 400,
    activeIndex: 0, //默认选中商品详情
    producType: false, //默认选中商品详情
    list: [1, 1, 1, 1],
    producItem: {
      img: '/image/img/banner01.jpg',
      price: 260,
      inventory: 100,
      color: ['红色', '米色', '蓝色'],
      type: ['默认', '大码'],
      count: 4
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  selectColor(e) {
    const activeIndexC = e.currentTarget.dataset.index;
    this.setData({
      activeIndexC
    })
  },
  selectType(e) {
    const activeIndexT = e.currentTarget.dataset.index;
    this.setData({
      activeIndexT
    })
  },

  changed(e) {
    const activeIndex = e.currentTarget.dataset.index;
    this.setData({
      activeIndex
    })
  },

  //  选择商品规格
  selectTypeOpt() {
    this.setData({
      producType: true
    })
  },
  buyNow() {
    if(this.data.producType){
      wx.navigateTo({
        url: `/pages/settlement/settlement`
      })
    }
    this.setData({
      producType: true
    })
  },


  //  关闭商品规格
  closeProductType() {
    this.setData({
      producType: false
    })
  },

  toHome() {
    wx.switchTab({
      url: `/pages/index/index`
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
// pages/offSet/offSet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    discountsMoney:0,//优惠多少钱
     list:[1,1,1,1,1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  notUse(){
    wx.navigateBack({
      delta:1
    })
  },

  discounts(e){
    const discountsMoney = e.currentTarget.dataset.money;
    this.setData({
      discountsMoney
    });
    wx.navigateBack({
      delta:1
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
    const pages = getCurrentPages();
    const currPage = pages[pages.length - 1];   //当前页面
    const prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      discountsMoney: this.data.discountsMoney
    });
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
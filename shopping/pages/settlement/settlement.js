// pages/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payStyle:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toOffSet(){
   wx.navigateTo({
     url: '/pages/offSet/offSet',
   })
  },

  addAddress(){
   wx.navigateTo({
     url: '/pages/address/address',
   })
  },
  
  payType(){
    this.setData({
      payStyle:true
    })
  },

  closePayType(e){
    const activeIndex = e.currentTarget.dataset.index;
    const payType = e.currentTarget.dataset.txt;
    this.setData({
      payStyle:false,
      activeIndex,
      payType
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
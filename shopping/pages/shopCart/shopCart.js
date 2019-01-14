// pages/shopCart/shopCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:0,//默认不全选
    list: [{
      status: 1,
      img: '/image/img/banner01.jpg',
      name: '三只小松鼠',
      type: ['默认', '大码'],
      price: 260,
      count: 4
    }, {
      status: 0,
      img: '/image/img/banner02.jpg',
      name: '短袖衬衣',
      type: ['默认', '短袖'],
      price: 840,
      count: 1
    }, {
      status: 0,
      img: '/image/img/banner03.jpg',
      name: '波司登羽绒服',
      type: ['默认'],
      price: 450,
      count: 7
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  //选中商品
  selected(e) {
    const curIndex = e.currentTarget.dataset.index;
    this.data.list.forEach((cur, index, list) => {
      if (index === curIndex) {
        cur.status ? cur.status = 0 : cur.status = 1
        this.setData({
          list: this.data.list
        })
      }
    })
  },

  //全选
  selectAll(e) {
    let status = e.currentTarget.dataset.status;
    status ? status = 0 : status = 1
    console.log(status)
    this.setData({
      status
    })
    // this.data.list.forEach((cur, index, list) => {
    //     // cur.status ? cur.status = 0 : cur.status = 1
    //      cur.status = 1
    //     this.setData({
    //       list: this.data.list
    //     })
    // })
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
// pages/shopCart/shopCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      status: 0,
      img: '/image/img/banner01.jpg',
      name: '三只小松鼠',
      type: ['默认', '大码'],
      price: 100,
      count: 1
    }, {
      status: 0,
      img: '/image/img/banner02.jpg',
      name: '短袖衬衣',
      type: ['默认', '短袖'],
      price: 200,
      count: 2
    }, {
      status: 0,
      img: '/image/img/banner03.jpg',
      name: '波司登羽绒服',
      type: ['默认'],
      price: 300,
      count: 3
    }],
    selectFoods: [],
    ckAll: false, //默认不全选
    totalMoney: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  toAccount(){
    wx.navigateTo({
      url: `/pages/settlement/settlement`
    })
  },

  //自定义事件
  onControl(e) {
    let {
      product,
      index
    } = e.detail;
    let {
      list,
      selectFoods
    } = this.data;
    let itemGood = list[index];
    itemGood.count = product.count;
    this.calculateMoney(selectFoods);
  },

  //选中商品
  selected(e) {
    const curIndex = e.currentTarget.dataset.index;
    let {
      totalMoney,
      list,
      selectFoods
    } = this.data;
    let itemGood = list[curIndex];
    itemGood.status ? itemGood.status = 0 : itemGood.status = 1;
    // 选中与取消
    if (itemGood.status) {
      selectFoods.push(itemGood)
    } else {
      if (selectFoods.includes(itemGood)) {
        let index = selectFoods.indexOf(itemGood)
        selectFoods.splice(index, 1);
      }
    }
    this.setData({
      list,
      selectFoods,
      totalMoney
    });
    this.calculateMoney(selectFoods);
  },

  //全选
  selectAll(e) {
    let {
      ckAll,
      selectFoods,
      list
    } = this.data;
    ckAll ? ckAll = false : ckAll = true;
    list.forEach(cur => {
      ckAll ? cur.status = 1 : cur.status = 0;
      if (cur.status) {
        selectFoods.push(cur)
      } else {
        if (selectFoods.includes(cur)) {
          let index = selectFoods.indexOf(cur)
          selectFoods.splice(index, 1);
        }
      }
    })
    this.setData({
      list,
      ckAll,
      selectFoods
    });
    this.calculateMoney(selectFoods);
  },

  /*计算总价格*/
  calculateMoney(selectFoods) {
    let totalMoney = 0;
    for (let i = 0; i < selectFoods.length; i++) {
      totalMoney += selectFoods[i].price * selectFoods[i].count;
    }
    this.setData({
      totalMoney
    });
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
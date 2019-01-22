// pages/shopCart/shopCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ckAll: false, //默认不全选
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
    totalMoney:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  onControl(e){
    let { name,count } = e.detail;
    let { list } = this.data;
    list.forEach((good)=>{
      // console.log(good)
    })
  },

  //选中商品
  selected(e) {
    const curIndex = e.currentTarget.dataset.index;
    let {totalMoney,list}=this.data;
    let selectFoods=[];
    list.forEach((cur, index) => {
      if (curIndex === index) {
        cur.status ? cur.status = 0 : cur.status = 1;
        // totalMoney = cur.price*cur.count;
      }
      if (cur.status){
        selectFoods.push(cur)
      }
    })
      // console.log(selectFoods)
    this.setData({
      list,
      totalMoney
    })
  },

  //全选
  selectAll(e) {
    let { ckAll, list } = this.data;
    ckAll ? ckAll = false :ckAll = true;
    list.forEach((cur) => {
     ckAll ? cur.status = 1 : cur.status = 0;
    })
    this.setData({
      list,
      ckAll
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
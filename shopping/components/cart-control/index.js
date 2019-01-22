// components/cart-control/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product:{
      type:Object,
      value:null,
      desc:'单个商品信息'
    },
    index: {
      type: Number,
      value: null,
      desc: '商品下标'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */

  methods: {
    add() {
      let { product,index } = this.data;
      product.count++;
      this.setData({
        product
      });
      let myEventDetail={
        product,
        index
      }
      this.triggerEvent('myControl', myEventDetail);
    },

    minus() {
      let { product, index } = this.data;
      if (product.count <= 0) {
        return
      }
      product.count--;
      this.setData({
        product
      });
      let myEventDetail = {
        product,
        index
      }
      this.triggerEvent('myControl', myEventDetail);
    }
  }
})
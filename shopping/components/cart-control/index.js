// components/cart-control/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // count: {
    //   type: Number,
    //   value: null,
    //   desc: '商品数量'
    // },
    product:{
      type:Object,
      value:null,
      desc:'单个商品信息'
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
      let { product } = this.data;
      product.count++;
      this.setData({
        product
      });
      this.triggerEvent('myControl', product);
    },

    minus() {
      let { product } = this.data;
      if (product.count <= 0) {
        return
      }
      product.count--;
      this.setData({
        product
      });
      this.triggerEvent('myControl', product);
    }
  }
})
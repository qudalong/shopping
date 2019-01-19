// components/cart-control/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: null,
      desc:'商品数量'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add() {
      let {count} = this.data;
      count++;
      this.setData({
        count
      });
      this.triggerEvent('myControl', count);
    },
    
    minus() {
      let {count} = this.data;
      if (count <= 0) {
        return
      }
      count--;
      this.setData({
        count
      });
      this.triggerEvent('myControl', count);
    },

  }
})
Component({
  externalClasses: ['my-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    imgList: {
      type: Array,
      value: [],
      desc: '轮播图片列表'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 400
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
// components/left/left.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    exit(e){
      wx.redirectTo({
        url: '/pages/login/login',
        
      });
    }
  }
})

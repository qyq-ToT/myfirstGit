// components/right/right.js
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
    scrollTop:null
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navtoContnet(e){
      wx.navigateTo({
        url: '/pages/nodecontent/nodecontent',
      });
    },

    scroll:function(e){
      this.setData({
        scrollTop:e.detail.scrollTop
      })
    },
  }
})

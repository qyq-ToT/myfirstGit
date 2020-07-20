// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:""
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
    hanldeItemTap(e){
      // 获取索引
      const {index} = e.currentTarget.dataset;
      this.triggerEvent("itemChange",{index});
      // 获取data中的数组
      // let {tabs} = this.data;
      // // 循环数组
      // tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      // this.setData({
      //   tabs
      // })

    }

  }
})

// pages/bilibili/bilibili.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
      id:0,
      name:"推荐",
      isActive:true
      },
      {
        id:1,
        name:"商品",
        isActive:false
      },
      {
        id:2,
        name:"美图",
        isActive:false
      },
      {
        id:3,
        name:"抢先看",
        isActive:false
      },
    ]
  },
  handleItemChange(e){
    // 获取索引
    const {index} = e.detail;
    // 获取data中的数组
    let {tabs} = this.data;
    // 循环数组
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
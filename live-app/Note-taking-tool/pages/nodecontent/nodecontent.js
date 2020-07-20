// pages/nodecontent/nodecontent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:[
      {
        id:0,
        url:"http://chuantu.xyz/t6/736/1590456774x989499252.png"
      },
      {
        id:1,
        url:"http://chuantu.xyz/t6/736/1590456840x989499252.png"
      }
    ]
    // http://chuantu.xyz/t6/736/1590456840x989499252.png
  },
  imgChange(e){
    console.log(e);
    
  },
  navtoChange(e){
    wx.navigateTo({
      url: '/pages/foodsText/foodsText',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
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
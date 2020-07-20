// pages/suibian/suibian.js
const app=new getApp();//引入app.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  alert:function(){
    //const 代表定义一个全局且不可改变的常量
    //var  代表定义一个全局变量
    //let  代表定义一个区域性的变量
    if(1==1){
       var a='aaa';
       let b='xxx';
    }
    console.log(a);//输出结果aaa
    console.log(b);//此地方打印let定义的区域性变量会报错
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
// pages/touch/touch.js
var touchDot = 0;
var time = 0;
var interval = "";
Page({

  /**
   * 页面的初始数据
   */
  
  data: {

  },
  // 触摸开始事件 
 touchStart: function (e) { 
  touchDot = e.touches[0].pageX; // 获取触摸时的原点 
  console.log(touchDot);
  
  // 使用js计时器记录时间  
  interval = setInterval(function () { 
   time++; 
  }, 100); 
 }, 
 // 触摸移动事件 
 touchMove: function (e) { 
  var touchMove = e.touches[0].pageX; 
  //console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot)); 
  // 向左滑动  
  if (touchMove - touchDot <= -70 && time < 10) { 
   wx.showToast({
     title: '左滑了哟',
     icon: 'none',
     image: '',
     duration: 1500,
     mask: true,
   });  
  } 
  // 向右滑动 
  if (touchMove - touchDot >= 40 && time < 10) { 
    wx.showToast({
      title: '右滑了哟',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: true,
    });  
  } 
 }, 
 // 触摸结束事件 
 touchEnd: function (e) { 
  clearInterval(interval); // 清除setInterval 
  time = 0; 
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
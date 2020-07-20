// pages/test2/test2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action:true,
    actiontwo:true
  },

  EmaiGet:function(e){

    var regNum = new RegExp('[0-9]','g');

    var rsNum=regNum.exec(e.detail.value);

    console.log(rsNum);

    if(rsNum){
      console.log("莫得问题");
      this.setData({
        action:true
      })
      
    }else{
      this.setData({
        action:false
      })
    }
  },
  passwordGet(e){
    var regEmail = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$','g');

    var rsEmail=regEmail.exec(e.detail.value);

    console.log(rsEmail);
    
    if(rsEmail){
      console.log("莫得问题");
      this.setData({
        actiontwo:true
      })
      
    }else{
      this.setData({
        actiontwo:false
      })
    }
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
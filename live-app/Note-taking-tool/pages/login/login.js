// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionP:true,
    actionE:true,
    onclick:0
  },


  EmaiGet:function(e){
    var regEmail = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$','g');

    var rsEmail=regEmail.exec(e.detail.value);

    let onclick = this.data.onclick;

    // console.log(rsEmail);
    
    if(rsEmail){
      console.log("邮箱莫得问题");
      this.setData({
        actionE:true
      })
      
    }else{
      this.setData({
        actionE:false
      })
    }
    this.setData({
      onclick:onclick+1
    })
    
  },
  passwordGet(e){
    let onclick = this.data.onclick;

    var regNum = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$','g');

    var rsNum=regNum.exec(e.detail.value);

    // console.log(rsNum);

    if(rsNum){
      console.log("密码莫得问题");
      this.setData({
        actionP:true
      })
      
    }else{
      this.setData({
        actionP:false
      })
    }
    this.setData({
      onclick:onclick+1
    })
  },
  handleLogin(e){
    let actionE = this.data.actionE;
    let actionP = this.data.actionP;
    let onclick = this.data.onclick;

    
    if(actionE==false&&actionP==false){
      console.log("邮箱密码错误");
      
    }else if(actionP==false){
      console.log("密码错误");
      
    }else if(actionE==false){
      console.log("邮箱错误");
      
    }else if(onclick==0){
      console.log("邮箱密码不能为空");
      wx.showToast({
        title: '邮箱密码不能为空',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: true,
      });
    }else if(actionE==true&&actionP==true&&onclick>1){
      wx.redirectTo({
        url: '/pages/nodelist/nodelist',
      });
    }

    if(actionE==false&&actionP==false&&onclick>0){
      wx.showToast({
        title: '邮箱或密码错误',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: true,
      });}

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
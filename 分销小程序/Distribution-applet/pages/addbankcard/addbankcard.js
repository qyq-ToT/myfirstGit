// pages/addbankcard/addbankcard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      username:'',
      bankcardnamber:'',
      bankcnmb:'',
      openbank:'',
  },
  // 获取输入姓名
  name:function(e){
      var men = e.detail.value
      this.setData({
        username:e.detail.value
      })
  },
  // 获取银行卡号
  bankcard:function(e){
    var yhkd=e.detail.value
    var yhkchange = yhkd.replace(/(\d{4})(?=\d)/g, "$1 ");//replace(/\s/g,'');
      this.setData({
        bankcardnamber:yhkchange,
        bankcnmb:yhkd
      })
  },
  // 获取开户行
  openbankname:function(e){
    this.setData({
      openbank:e.detail.value
    })
  },

  sendwdl:function(){
    console.log(this.data.username,this.data.bankcardnamber,this.data.openbank)
    var card = this.data.bankcnmb.replace(/\s|\xA0/g, "");
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(this.data.username!=''&&this.data.bankcardnamber!=''&&this.data.openbank!=''){
      if(regPos.test(card) || regNeg.test(card)) {
             if(card.length>=16&&card.length<=17){
                   wx.navigateTo({
                   url: '/pages/withdrawal/withdrawal',
                 })
             }else{
               wx.showLoading({
                 title: '卡号不正确',
               })
               setTimeout(function(){
                wx.hideLoading()
              },1000)
             }
        } else {

           wx.showLoading({
             title: '卡号格式错误',
           })
          setTimeout(function(){
            wx.hideLoading()
          },1000)
        }
           
    }else{
           wx.showLoading({
             title: '请填充完整信息',
           })

           setTimeout(function(){
              wx.hideLoading()
           },1000)
           console.log("输入全")
    }
  }
  
})
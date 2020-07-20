// pages/withdrawal/withdrawal.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      open:"",
      mnlindex:'',
      bankcardmassage:[
        {bankname:'中国农业银行',bankcalss:'储蓄卡',banknemb:'1321313131313',backcolor:"rgb(0,152,166)",image:'/image/zny.png',username:'张三'},
        {bankname:'中国邮政储蓄银行',bankcalss:'储蓄卡',banknemb:'12313',backcolor:"rgb(0,152,166)",image:'/image/zyz.png',username:'李四'},
        {bankname:'中信银行',bankcalss:'信用卡',banknemb:'131231313',backcolor:"rgb(255,100,100)",image:'/image/zx.png',username:'王五'},
      ],
  },
    
  addcardmore:function(){
      wx.navigateTo({
        url: '/pages/addbankcard/addbankcard',
      })
  },

  dellcard:function(e) {
     console.log(e)
     var user = e.currentTarget.dataset.username
     var bkname = e.currentTarget.dataset.bankname
     var bkcard = e.currentTarget.dataset.bankcard
     var bankid = e.currentTarget.dataset.id
     wx.navigateTo({
       url: '/pages/delbankcard/delbankcard?user='+user+'&bkname='+bkname+'&bkcard='+bkcard+'&bankid='+bankid,
     })
  },

  mnne:function(e){
    var nl = e.currentTarget.dataset.mn
           this.setData({
             mnlindex:nl,
             open:true
           })
  },

  bandmoney:function(e) {
       wx.navigateTo({
         url: '/pages/withdrawalrecord/withdrawalrecord',
       })
  }


})
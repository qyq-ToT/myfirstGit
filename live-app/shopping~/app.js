//app.js
App({
  //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
  onLaunch: function(options) {
    
  },
  onShow: function(options) {

  },
  onHide: function() {

  },
  onError: function(msg) {

  },
  //options(path,query,isEntryPage)
  onPageNotFound: function(options) {

  },
  msg:function(content){
    wx.showModal({
      title: '提示',
      content: content,
      success: (res) => {
       
      },
      fail:(err)=>{
          
      }
    }) 
  }
 
});
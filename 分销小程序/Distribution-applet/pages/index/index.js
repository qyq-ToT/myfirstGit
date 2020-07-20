//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  navtoTxHistory(e){
    wx.navigateTo({
      url: '/pages/withdrawalrecord/withdrawalrecord',
    });
  },
  navtoNome2(e){
    wx.navigateTo({
      url: '/pages/withdrawal/withdrawal',
    });
  },
  //下方容器的四个跳转JS
  navtoExtensionCard(e){
    wx.navigateTo({
      url: '/pages/extensionCard/extensionCard'
    });
  },
  navtoNome3(e){
    wx.navigateTo({
      url: '/pages/extensionalls/extensionalls'
    });
  },
  navtoCommission(e){
    wx.navigateTo({
      url: '/pages/commission/commission'
    });
  },
  navtoExtensionRank(e){
    wx.navigateTo({
      url: '/pages/extensionRank/extensionRank'
    });
  }
})

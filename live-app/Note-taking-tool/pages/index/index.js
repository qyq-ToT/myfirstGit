//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  goToSwiperPage:function(e){
    // wx.navigateTo({
    //   url: '/pages/Swiper/Swiper',
    // });
    wx.redirectTo({
      url: '/pages/Swiper/Swiper',
    });
  }
})

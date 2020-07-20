//index.js
var touchDot = 0;
var time = 0;
var interval = "";
Page({
  data: {
    left_width:0,
    right_width:100,
    isActive:false,
    imgSrc:"https://ae01.alicdn.com/kf/H1d98f1ebd4a94cdeb1edd83350112037N.png",
    imgsrcList:[
      "https://ae01.alicdn.com/kf/H1d98f1ebd4a94cdeb1edd83350112037N.png",
      "https://ae01.alicdn.com/kf/H3f2a07e665c244a29d5b964d80379e4aL.png"]
  },
  onclick(e){
    let lw = this.data.left_width;
    let rw = this.data.right_width;
    let isActive = this.data.isActive;
    this.setData({
      left_width:rw,
      right_width:lw,
      isActive:!isActive
    })
    this.imgChange(e);
  },
  imgChange(e){
    console.log(e);
    
    let imgsrcList = this.data.imgsrcList;
    let isActive = this.data.isActive;
    let imgSrc = this.data.imgSrc;
    if(isActive==false){
      this.setData({
        imgSrc:imgsrcList[0]
      })
    }else if(isActive==true){
      this.setData({
        imgSrc:imgsrcList[1]
      })
    }
  },
  touchStart:function(e){
    touchDot = e.touches[0].pageX; // 获取触摸时的原点 
    // console.log(touchDot);
    interval = setInterval(function () { 
      time++; 
     }, 10) ;
    //  console.log(time);
     
  },
  touchMove: function (e) { 
    let isActive = this.data.isActive;
    //左滑，滑动时间小于1秒，滑动距离小于80rpx
    var touchMove = e.touches[0].pageX; 
    console.log(touchMove-touchDot);
    
    if(touchMove-touchDot<= -30 &&time<100){
      if(isActive==true){
        this.onclick(e);
      }
      
    }
      // 向右滑动 
    if (touchMove-touchDot>=30&&time<100&&isActive==false) { 
      this.onclick(e);
    }
  },
   // 触摸结束事件 
 touchEnd: function (e) { 
  clearInterval(interval); // 清除setInterval 不去除时间会一直累加，方法就无法继续调用
  time = 0; 
 },
})

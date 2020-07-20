// pages/searchResults/searchResults.js
var bt=[]   //空数组
Page({
  data: {
    waterfall:[ //瀑布流data数据
      {"img":"https://ae01.alicdn.com/kf/H2826035e084549e5800ab4d9dea789a4T.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"我是火车王","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H379e2c1b0dc54401b6fd8e78da832a0c7.png","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"天啊！","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H2826035e084549e5800ab4d9dea789a4T.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"大威天龙","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"你十三张牌秒我","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H379e2c1b0dc54401b6fd8e78da832a0c7.png","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"营销","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word":"哈哈","word4":"12k","height":"230rpx"},
      
    ],
    swiperHeight:Number,
    color1:"block",
    color2:"#ccc",
    color3:"#ccc",
    number:4,
    display:"",     //加载图标样式
    display2:"",     //加载图标样式
    display3:"",     //加载图标样式
    arr:[]
  },
  /*go-输入框点击事件跳转到搜索页面
   */
  go:function(){
    wx.reLaunch({url: '/pages/search/search',  //跳转
 })
},
  /*onShow-监听页面显示
   * value  取出缓存数据
   * dx     缓存下标为0的数据
   */
  onShow: function () {
    var that=this
    var value = wx.getStorageSync("value");  //取出缓存数据
    var dx=value[0].word            //把缓存下标为0的数据内的word赋给dx
    var waterfall=that.data.waterfall    //获取data内waterfall数组
    // var arr=[]  
    var arr=that.data.arr 
    that.setData({valuetwo:dx})
    for(var j=0;j<waterfall.length;j++){    //循环data内waterfall数组,把word等于dx的那条数据存入arr数组
        if(waterfall[j]["word"]==dx){
          arr.push(waterfall[j])
          bt.push(waterfall[j])
        }
    }

    if(arr.length<=0){
      wx.showToast({title: '没有你要的'+"“"+dx+"”",icon:'none',duration: 3000})
    }else{
      that.setData({arr:arr})   
    }
    var length=arr.length
    that.setData({nb:length})
   //高度
    var query = wx.createSelectorQuery().in(this);   
    var that = this;
    var waterfall=this.data.waterfall   
    var number=this.data.number
    console.log(arr)
    if(arr.length==0){
    }else{
      query.select('.box').boundingClientRect(function (rect) {    //获取class为box的节点
        var box=rect.height         //盒子高度
        var length=waterfall.length  //要循环数组的数量（长度)
        var TotalHeight=(box*number+30)*2 //盒子高度 * 要循环数组的数量（长度) = 大盒子的高
        console.log(TotalHeight)
        that.setData({swiperHeight:TotalHeight})
        console.log(TotalHeight)
      }).exec();
    }
  },
  /* 
   * bian-swiper标签滑动时
   * current swiper标签当前下标
   */
  bian:function(e){
    var current=e.detail.current
     var that=this
     if(current==0){
      that.setData({color1:"block",color2:"#ccc",color3:"#ccc"})
     }else if(current==1){
      that.setData({color1:"#ccc",color2:"block",color3:"#ccc"})
     }else{
      that.setData({color1:"#ccc",color2:"#ccc",color3:"block"})
     }
     wx.pageScrollTo({   //上边距变为0
      scrollTop: 0,
       duration: 1
})
  },
/* 
   * onReachBottom-监听页面滑动到底部
   * @pream  length waterfall的数量
   * @pream  display 加载动图样式
   */
  onReachBottom:function(){
    var query = wx.createSelectorQuery().in(this);   
    var waterfall = this.data.waterfall
    var that=this
    var number = this.data.number
    var length=waterfall.length
    console.log(bt)
    if(number>=bt.length){                  //判断滑动到底部时已经没有数据遍历了
      wx.showToast({title: '没有了',icon:'none',duration: 1000})
      this.setData({display:"none",display2:"none",display3:"none"})
    }else{
       wx.showToast({title: '加载中',icon:'none',duration: 1000})
      setTimeout(function(){       
          query.select('.box').boundingClientRect(function (rect) {    //获取class为box的节点
            that.setData({number:number+=3})  //事件触发后number值每次加3 
            var box=rect.height         //盒子高度
            console.log(number)
            var TotalHeight=(box*number+30)*2  //盒子高度 * 要循环数组的数量（长度) = 大盒子的高
            that.setData({swiperHeight:TotalHeight})
            console.log(number)
          }).exec();
      },2000)
    }
  },
/* 
   * click-搜索分类点击事件
   */
  click1:function(){
    var that=this
    var current=that.data.current
     that.setData({color1:"block",color2:"#ccc",color3:"#ccc",current:0})
  },
  click2:function(){
    var that=this
    var current=that.data.current
      that.setData({color1:"#ccc",color2:"block",color3:"#ccc",current:1})
  },
  click3:function(){
    var that=this
    var current=that.data.current
      that.setData({color1:"#ccc",color2:"#ccc",color3:"block",current:2})
  },
    /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      console.log(bt)
        bt=[]
  },
})

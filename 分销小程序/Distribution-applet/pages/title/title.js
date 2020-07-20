 

Page({
  data: {
    index:"1",//轮播当前下标
    imgleft1:"imgChange1",//轮播图片样式1
    imgleft2:"imgChange2",//轮播图片样式2
    imgleft3:"imgChange3",//轮播图片样式3
    imgright1:"imgChange1",//轮播图片样式1
    imgright2:"imgChange2",//轮播图片样式2
    imgright3:"imgChange3",//轮播图片样式3
    number:3,
    waterfall:[ //瀑布流data数据
      {"img":"https://ae01.alicdn.com/kf/H2826035e084549e5800ab4d9dea789a4T.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"我是火车王","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H379e2c1b0dc54401b6fd8e78da832a0c7.png","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"天啊！","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H2826035e084549e5800ab4d9dea789a4T.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"大威天龙","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"你十三张牌秒我","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H379e2c1b0dc54401b6fd8e78da832a0c7.png","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"营销","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H2826035e084549e5800ab4d9dea789a4T.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"我是火车王","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"哈哈","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H379e2c1b0dc54401b6fd8e78da832a0c7.png","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"天啊！","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H2826035e084549e5800ab4d9dea789a4T.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"大威天龙","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"你十三张牌秒我","word4":"12k","height":"230rpx"},
      {"img":"https://ae01.alicdn.com/kf/H57c30c3bbca74ac6ab0c10915487133f7.jpg","word1":"33分钟前","word2":"七夕消息推荐模板，直接拿去用！","word3":"营销","word4":"12k","height":"230rpx"},
    ],
    swiperHeight:"",//瀑布流外层盒子高度
    display:"",     //加载图标样式
    display2:"",     //加载图标样式
    current:0,       //swiper标签下标
    line:50          //导航下的横线样式
  },

   /*transform-轮播图
   * @pream  e 获取当前滑动事件
   * @pream  current 获取当前轮播图下标
   * @pream  if 判断的下标为几的时候改变图片的样式，实现图片变大。
   */
  transform:function(e){
    var current=e.detail.current  //获取当前轮播图下标
    //  console.log(current)
    if(current==0){this.setData({imgleft1:"prepareStyle"})}else{this.setData({imgleft1:"imgChange1"})}
    if(current==1){this.setData({imgleft2:"prepareStyle"})}else{this.setData({imgleft2:"imgChange1"})}
    if(current==2){this.setData({imgleft3:"prepareStyle"})}else{this.setData({imgleft3:"imgChange3"})}
  },
  transform2:function(e){
    var current=e.detail.current  //获取当前轮播图下标
    //  console.log(current)
    if(current==0){this.setData({imgright1:"prepareStyle"})}else{this.setData({imgright1:"imgChange1"})}
    if(current==1){this.setData({imgright2:"prepareStyle"})}else{this.setData({imgright2:"imgChange1"})}
    if(current==2){this.setData({imgright3:"prepareStyle"})}else{this.setData({imgright3:"imgChange3"})}
  },
  
   /*go-点击事件
   * @pream  跳转到搜索页面
   */
  go:function(){
     wx.reLaunch({
       url: '/pages/search/search',
     })
  },
  /* 
   * onReady-监听页面初次渲染完成-
   * 瀑布流动态获取高度
   * @pream  query 获取当前节点
   * @pream  that 吧this赋值给that
   * @pream  waterfall 获取data内waterfall的数据
   * @pream  box 要循环的盒子高度
   * @pream  length waterfall的长度
   * @pream  TotalHeight "waterfall的长度"乘以"要循环的盒子高度" 得到大盒子的高度
   * @pream  获取要循环的盒子高度后乘以循环出来的数量（长度）后吧值赋给大盒子的高度
   */
  onReady: function () {   //瀑布流动态获取高度
    var query = wx.createSelectorQuery().in(this);   
    var that = this;
    var waterfall=this.data.waterfall   
    var number = this.data.number
      query.select('.box').boundingClientRect(function (rect) {    //获取class为box的节点
        var box=rect.height         //盒子高度
        var length=waterfall.length  //要循环数组的数量（长度)

        var TotalHeight=(box*number+150+60)*2//盒子高度 * 要循环数组的数量（长度) = 大盒子的高
       
        that.setData({swiperHeight:TotalHeight})
        
      }).exec();
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
    if(number>=length){                  //判断滑动到底部时已经没有数据遍历了
      wx.showToast({title: '没有了',icon:'none',duration: 1000})
      this.setData({display:"none",display2:"none"})
    }
    else{
       wx.showToast({title: '加载中',icon:'none',duration: 1000})
      setTimeout(function(){       
          query.select('.box').boundingClientRect(function (rect) {    //获取class为box的节点
            that.setData({number:number+=3})  //事件触发后number值每次加3 
            var box=rect.height         //盒子高度
            console.log(number)
            var TotalHeight=(box*number+150+60)*2  //盒子高度 * 要循环数组的数量（长度) = 大盒子的高
            that.setData({swiperHeight:TotalHeight})
            console.log(number)
          }).exec();
      },2000)
    }
  },
  /* 
   * bian-swiper标签滑动时
   * current swiper标签当前下标
   */
  bian:function(e){
    var query = wx.createSelectorQuery().in(this);   
    var that=this
    that.setData({number:3})
     var current=e.detail.current
   if(current==1){              
      that.setData({line:270})
   }else{
    that.setData({line:50})
 }
    query.select('.box').boundingClientRect(function (rect) {    //获取class为box的节点
      var box=rect.height         //盒子高度
      var TotalHeight=(box*3+150+60)*2 //盒子高度 * 要循环数组的数量（长度) = 大盒子的高
      that.setData({swiperHeight:TotalHeight})
    }).exec();

   wx.pageScrollTo({   //上边距变为0
      scrollTop: 0,
       duration: 1
})
  },
  /* 
   * click-导航点击事件
   */
  click:function(){
    var that=this
    var current=that.data.current
    console.log(current)
    // var current=e.detail.current
    if(current==0){
      console.log(123)
       that.setData({line:270,current:1})
    }else{
     that.setData({line:50,current:0})
  }
  }
})

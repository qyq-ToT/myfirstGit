Page({
  data: {
    black:[],  //搜索缓存的历史记录
    arr:[],    //空数组用于存储历史记录
    HotSearch:[       //热搜词数据
      {"word":"优惠券"},{"word":"哈哈"},{"word":"我是火车王"},
      {"word":"运营"},{"word":"大威天龙"},{"word":"产品体验报告"},
    ],
    display:"none",  //display样式的更改
    value:""
  },

     /*play-搜索框历史记录的存储
   * @pream  e 获取当前enter事件
   * @pream  value 获取当前输入框内的值
   * @pream  arr 空数组
   */
  play:function(e){
    var black=this.data.black
    var value=e.detail.value
    var arr=this.data.arr
     arr.push({word:value})
                  for(var z=0;z<black.length;z++){  //如果输入的值与缓存内的值相同则删除缓存内的值
                    if(black[z]["word"]==value){
                      // console.log(black[z])
                      // console.log({word:value})
                      black.splice(z,1)
                     }   
                  }  
 
    for(var i=0;i<black.length;i++){   //for循环把已有的历史记录也一起存入arr数组
      arr.push(black[i])  
    }
    wx.setStorageSync('value',arr);   //setStorageSync方法吧arr数组缓存
    // console.log(arr)
    wx.reLaunch({url: '/pages/searchResults/searchResults'})  //跳转页面
  },

  /*onShow-页面加载完成后触发
   * @pream  value 从缓存中取出数据赋给value  
   */
  onShow: function () {
    var arr2=[];
    var list = wx.getStorageSync("value");  //从缓存中取出数据赋给value
    for(var j=0;j<list.length;j++){    //for循环value内的数据，把值为null和undefined的数据删除
        arr2.push(list[j])
    }
  //  console.log(arr2)
    this.setData({black:arr2})       //把缓存放入black中
  },

  /*
  *ClearTheCache-点击清除历史记录（缓存）
  */
  ClearTheCache:function(){     
    wx.removeStorageSync('value')    //清除缓存
    this.setData({black:""})         //把当前页面的历史记录变为空
  },

  /*
  *Focusing-输入框得到焦点事件
  */
  Focusing:function(){
        this.setData({display:"block"})   //把样式display设置为显示
  },
  /*
  *Focusing-输入框失去焦点事件
  */
  outOf:function(){
      this.setData({display:"none"})    //把样式display设置为隐藏
},
 /*
  *out-点击取消返回首页
  */
  out:function(){
    wx.reLaunch({url: '/pages/index/index'}) //跳转到index（文章首页）页面
},
 /*
  *extract-把历史记录的value传给搜索框
  */
extract:function(e){
     var e=e.currentTarget.dataset.word
     this.setData({value:e})
    
}
})
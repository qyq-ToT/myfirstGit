import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左菜单数据
    leftMenuList:[],
    //右侧商品数据
    rightContent:[],
    //被点击的左侧菜单索引
    currentIndex:0,
    //右侧滚动条距离顶部的距离
    scrollTop:0
  },
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1、先判断一下本地存储中有没有旧的数据
    //2、没有旧数据 直接发送请求
    // 3、有旧的数据 同时旧的数据也没有过期，就使用本地存储中的旧数据。
    
    //1、获取本地存储的数据
    const Cates = wx.getStorageSync("cates");
    //2、判断
    if(!Cates){
      this.getCates();
     }else{
        //有旧的数据，定义过期时间 
        if(Date.now()-Cates.time>1000*100){
          //重新发送请求
          this.getCates();
        }else{
          //可以使用旧的数据
          this.Cates=Cates.data;
         let leftMenuList=this.Cates.map(v=>v.cat_name);
         let rightContent=this.Cates[0].children;
        this.setData({
            leftMenuList,
            rightContent
          })         
        }
     }
   },
  //获得分类数据
  async getCates(){
  //   request({
  //     url:"/categories"
  //   })
  //   .then(res=>{
  //     this.Cates=res.data.message;

  //     //把接口的数据存入到本地存储中
  //     wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});

  //     //构造左侧大菜单数据
  //     let leftMenuList=this.Cates.map(v=>v.cat_name);
  //     //构造右侧商品数据
  //     let rightContent=this.Cates[0].children;
  //     this.setData({
  //       leftMenuList,
  //       rightContent
  //     })
  //   })
    
  // },
  // handleItemTap(e){
  //   const {index}=e.currentTarget.dataset;
  //   let rightContent=this.Cates[index].children;
  //   this.setData({
  //     currentIndex:index,
  //     rightContent,
  //     //重新设置右侧内容srcoll-view标签距离顶部的距离
  //     scrollTop:0
  //   })
  //使用es7的asycn await来发送请求
  const res=await request({url:"/categories"});
  // this.Cates=res.data.message;
  this.Cates=res;
  wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});
  let leftMenuList=this.Cates.map(v=>v.cat_name);
  let rightContent=this.Cates[0].children;
  this.setData({
           leftMenuList,
           rightContent
         })

  },
    // 左侧菜单的点击事件
    handleItemTap(e) {
      /* 
      1 获取被点击的标题身上的索引
      2 给data中的currentIndex赋值就可以了
      3 根据不同的索引来渲染右侧的商品内容
       */
      const { index } = e.currentTarget.dataset;
  
      let rightContent = this.Cates[index].children;
      this.setData({
        currentIndex: index,
        rightContent,
        // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
        scrollTop: 0
      })
  
    }
})
/**
 * 发送请求获取数据
 */
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj:{}
  },
  //商品对象
  GoodsInfo:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id}=options; 
    this.getGoodsDetail(goods_id);
    
  },
  //获取商品详情数据
  async getGoodsDetail(goods_id){
    const goodsObj=await request({url:"/goods/detail",data:{goods_id}});
    this.GoodsInfo=goodsObj;
    // console.log(res);
    this.setData({
      goodsObj:{
        goods_name:goodsObj.goods_name,
        goods_price:goodsObj.goods_price,
        //例如replace（ 正则表达式 ）的方式来解决图片格式不能使用的问题
        //如IPhone 一些手机用不了webp格式的图片 临时处理方式
        goods_introduce:goodsObj.goods_introduce.replace(/\.wabp/g,'.jpg'),
        pics:goodsObj.pics
      }
    })
  },
  //点击轮播图 放大预览
  handlePrevewImage(e){
    //先要构造要预览的图片的数组
    const urls=this.GoodsInfo.pics.map(v=>v.pics_mid);
    //接收传递过来的图片URL
    const current=e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls,
      
    });
  },
  //点击加入购物车
  handleCartAdd(){
    //1、获取缓存中的购物车数组
    let cart=wx.getStorageSync("cart")||[];
    //2、判断商品对象是否存在于购物车数组中
    let index=cart.findIndex(v=>v.goods_id==this.GoodsInfo.goods_id);
    if(index===-1){
      //不存在，第一次添加
      this.GoodsInfo.num=1;
      this.GoodsInfo.checked=true;
      cart.push(this.GoodsInfo);
    }else{
      //已经存在购物车数据，执行 num++
      cart[index].num++;
    }
    //把购物重新添加会缓存中
    wx.setStorageSync("cart",cart);
    //弹窗提升
    wx.showToast({
      title:'添加成功',
      icon:'success',
      //防止用户 手抖狂点按钮
      mask:true
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
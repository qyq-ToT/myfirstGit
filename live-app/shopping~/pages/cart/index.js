// pages/cart/index.js
import {getSetting,chooseAddress,openSetting,showModal,showToast} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[],
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },
  onShow(){
    //1、获取缓存中的收货地址信息
    const address=wx.getStorageSync("address");
    //获取缓存中的购物车数据
    const cart = wx.getStorageSync("cart")||[];
    //计算全选
    //every 数组方法 会遍历 会结算一个回调函数 那么每一个回调函数
    //都返回true every返回的值为true
    //只要有一个回调函数返回了false 那么不再执行循环，直接返回false
    //空数组调用every，返回值就是true
    // const allChecked=cart.length?cart.every(v=>v.checked):false;
    //优化一波，写在商品总价，数量计算循环里面
    // let allChecked=true;

    // //设置被选中商品数量和总价初始值为0
    // let totalPrice=0;
    // let totalNum=0;

    // cart.forEach(v=>{
    //   if(v.checked){
    //     totalPrice+=v.num*v.goods_price;
    //     totalNum+=v.num;
    //   }else{
    //     allChecked=false;
    //   }
      
    //   //判断数组是否为空
    //   // allChecked=cart.length!=0?allChecked:false;
    // })
    // if(cart.length!=0){
    //   allChecked=this.allChecked
    // }else{
    //   allChecked=false
    // }
    
    // //2、给data赋值
    // this.setData({address,cart,allChecked,totalPrice,totalNum});
    this.setData({address})
    this.setCart(cart);
  },
  //商品选中
  handeItemChange(e){
    //获取被修改的商品ID
    const goods_id=e.currentTarget.dataset.id;
    //获取购物车数组
    let {cart} =this.data;
    //找到被修改的商品对象
    let index=cart.findIndex(v=>v.goods_id===goods_id);
    //选中状态取反
    cart[index].checked=!cart[index].checked
    //把购物车数据重新设置回data和缓存中
    this.setCart(cart);
  },

    //调用小程序内置api 获取用户的收获地址
    //1、获取 权限状态
    // wx.getSetting({
    //   success: (result)=>{
    //     const scopeAddress = result.authSetting["scope.address"];
    //     if(scopeAddress===true||scopeAddress===undefined){
    //       wx.chooseAddress({
    //         success: (result1)=>{
    //           console.log(result1);
    //         }
    //       });
    //     }else{
    //       //用户 以前拒绝过授权 先诱导用户打开授权页面
    //       wx.openSetting({
    //         success: (result2)=>{
    //           //重新授权可以做的事  调用收货地址代码
    //           wx.chooseAddress({
    //             success: (result3)=>{
    //               console.log(result3);
                  
    //             }
    //           });
    //         }
    //       });
    //     }
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
      //点击 收货地址事件
 async handleChooseAddress(){
    try {
      const res1=await getSetting();
      const scopeAddress = res1.authSetting["scope.address"];
      if(scopeAddress===false){  
        await openSetting();
      }
      let address = await chooseAddress();
      address.all=address.provinceName+address.cityName+address.countyName+address.detailInfo;
      //存入缓存中
      wx.setStorageSync("address", address);
    } catch (error) {
      console.log(erroe);
      
    }
  },
  //设置购物车状态，同时，重新计算底部工具栏数据
  setCart(cart){
    let allChecked=true;
    
    //设置被选中商品数量和总价初始值为0
    let totalPrice=0;
    let totalNum=0;
    
    cart.forEach(v=>{
      if(v.checked){
        totalPrice+=v.num*v.goods_price;
        totalNum+=v.num;
      }else{
        allChecked=false;
      }
      
    })
    //判断数组是否为空
     allChecked=cart.length!=0?allChecked:false;
    // if(cart.length!=0){
    //   allChecked=this.allChecked
    // }else{
    //   allChecked=false
    // }
    
    //2、给data赋值
    this.setData({cart,allChecked,totalPrice,totalNum});
    wx.setStorageSync("cart",cart);
  },
  //商品全选功能
  handleItemAllCheck(){
    //获取data中的数据
    let {cart,allChecked}=this.data;
    //修改值
    allChecked=!allChecked;
    //循环修改cart中商品的选中状态
    cart.forEach(v=>v.checked=allChecked);
    //把被修改的值 填充回data或者缓存中
    this.setCart(cart);

  },
  //商品数量的编辑功能
  async handleItemNumEdit(e){
    //获取事件传递过来的参数
    const {operation,id}=e.currentTarget.dataset;
    //获取购物车数组
    let {cart}=this.data;
    //找到需要修改的商品的索引
    const index=cart.findIndex(v=>v.goods_id===id);
    //判断是否要执行删除
    if(cart[index].num===1&&operation===-1){
      //弹窗提示
      // wx.showModal({
      //   title: '提示',
      //   content: '您是否要删除该商品？',
      //   success: (res) => {
      //     if(res.confirm){
      //       cart.splice(index,1);
      //       this.setCart(cart);
      //     }else if(res.cancel){

      //     }
      //   }
      // })
      const res=await showModal({content: "您是否要删除该商品？"});
      if(res.confirm){
        cart.splice(index,1);
        this.setCart(cart);
      }
    }else{
      //修改数量
      cart[index].num+=operation;
      //设置会缓存和data中
      this.setCart(cart);
    }
  },
  //点击  结算
  async handlePay(){
    const {address,totalNum}=this.data;
    if(totalNum===0){
      await showToast({title:"您还没有选购商品哟！"});
      return;
    }
    if(!address.userName){
      await showToast({title:"您还没有选择收货地址哟！"});
      return;
    }
    wx.navigateTo({
      url: '/pages/pay/index',
    });
  }
})
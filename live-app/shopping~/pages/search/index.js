//给输入框绑定 值改变事件 input事件
//获取输入框的值
//合法性判断 检验通过 发送后台
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    isFocus:false,
    inputValue:""
  },
  TimeId:-1,
  //输入框值改变就会触发的事件
  handleInput(e){
    //获取
    const {value}=e.detail;
    //检查值是否合法
    if(!value.trim()){
      this.setData({
        goods:[],
        isFocus:false
      })
      //值不合法
      return;
    }
    this.setData({
      isFocus:true
    })
    //准备发送请求获取数据
    clearTimeout(this.TimeId);
    this.TimeId=setTimeout(()=>{
      this.qsearch(value);
    },1000)
  },
  //发送请求
  async qsearch(query){
    const res=await request({url:"/goods/qsearch",data:{query}});
    this.setData({
      goods:res
    })
  },
  handleCancel(){
    this.setData({
      inputValue:"",
      isFocus:false,
      goods:[]
    })
  }
})
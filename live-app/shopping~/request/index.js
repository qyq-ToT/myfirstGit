//同时发送异步代码的次数（比如首页发送了三个请求。必须等待三个请求的数据都回来了才可以关闭
//,否则回来一个就关闭了另外的就关闭不了了）
let ajaxTimes=0;
export const request=(params)=>{
  // 判断 url中是否带有 /my/ 请求的是私有的路径 带上header token
  let header={...params.header};
  if(params.url.includes("/my/")){
    // 拼接header 带上token
    header["Authorization"]=wx.getStorageSync("token");
  }
  // 每当有异步请求发送时，ajaxTimes累加
  ajaxTimes++;
  //显示加载中 效果
  wx.showLoading({
    title:"加载中",
    //true 表示在加载过程中用户不能进行其他操作
    mask:true
  });
  //定义公共的url
  //url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
  const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseUrl+params.url,
      success:(result)=>{
        resolve(result.data.message);
      },
      fail:(err)=>{
        reject(err);
      },
      //请求失败要执行的
      complete:()=>{
        ajaxTimes--;
        if(ajaxTimes===0){
        //关闭正在等待的图标
        wx.hideLoading();
        }
      }
    });
  })
}
// pages/extensionRank/extensionRank.js
//页码
var pageNum=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //源数据数组
    bigContent:[
      //第一页
      [
        {
          pk:1,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:2,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:3,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:4,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:5,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:6,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:7,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:8,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:9,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:10,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        }
      ],
      //第二页
      [
        {
          pk:11,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:12,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:13,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:14,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:15,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:16,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:17,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:18,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:19,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:20,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        }
      ],
      //第三页
      [
        {
          pk:21,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:22,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:23,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:24,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:25,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:26,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:27,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:28,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:29,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        },
        {
          pk:30,
          rkIcon:"https://ae01.alicdn.com/kf/Hd65e80d826354db1abf66479a2f26191K.png",
          userIcon:"https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330059974,3839316409&fm=115&gp=0.jpg",
          username:"如花",
          money:"10000",
          bgcolor:""
        }
      ]
    ],
    //渲染数组
    rkList:[],
    //页数
    total:0
  },
   //上拉触底事件
   onReachBottom (e){
     console.log("到底了哟");
    let total = this.data.total;
    console.log(total);
    
    // console.log("开始的"+pageNum);
    if((pageNum+1)>=total){
      wx.showToast({
        title: '没有下一页了',
        icon: 'none',
        image: '',
        duration: 500,
        mask: true,
      });
    }else{
      wx.showLoading({
        title: '加载中',
        mask: true,
      });
      setTimeout(function(){
        wx.hideLoading();
      },500)
      //还有下一页，进行数组拼接操作,页码加1
      pageNum++;
      let bigContent = this.data.bigContent;

      // console.log("之后的"+pageNum);
      

      let rkList = bigContent[pageNum];

      let NowList = this.data.rkList;

      let pjList = NowList.concat(rkList);

      // console.log(pjList);
      this.setData({
        rkList:pjList
      });
      //拼接完数组再调用隔行换色方法
      this.ColorChange();
    }
   },
   //隔行换色
   ColorChange(){
    
    let cg = this.data.rkList;
    // console.log(cg); ok
    
    for(var i = 0;i<cg.length;i++){
      if(cg[i].pk%2!=0){
        cg[i].bgcolor="#cccccc";
      }else{
        cg[i].bgcolor="#ffffff";
      }
    }
    this.setData({
      rkList:cg
    })

   },

  /**
   * 生命周
   * 期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数组
    let set = this.data.bigContent;
    let com = set[pageNum];
    // console.log(com); OK
    
    //获得总页数
    const total = set.length;
    // console.log(total);ok
    
    this.setData({total:total})
    this.setData({rkList:com});
    this.ColorChange();
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //在页面回退的时候，把pageNum 重新变回0。
     pageNum=0;
  }
})
// pages/commission/commission.js
var pageNum=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    setList:[
      [
        {
          id:0,
          left_txt:"代理提成+4444",
          left_data:"2020-06-03 14:22:59",
          right_count:"+1.00",
          right_zt:"已完成",
          bgcolor:""
        },
        {
          id:1,
          left_txt:"代理提成+4444",
          left_data:"2020-06-03 14:22:59",
          right_count:"+1.00",
          right_zt:"已完成",
          bgcolor:""
        },
        {
          id:2,
          left_txt:"代理提成+4444",
          left_data:"2020-06-03 14:22:59",
          right_count:"+1.00",
          right_zt:"已完成",
          bgcolor:""
        }
      ],
      [
        {
          id:3,
          left_txt:"代理提成+4444",
          left_data:"2020-06-03 14:22:59",
          right_count:"+1.00",
          right_zt:"已完成",
          bgcolor:""
        },
        {
          id:4,
          left_txt:"代理提成+4444",
          left_data:"2020-06-03 14:22:59",
          right_count:"+1.00",
          right_zt:"已完成",
          bgcolor:""
        },
        {
          id:5,
          left_txt:"代理提成+4444",
          left_data:"2020-06-03 14:22:59",
          right_count:"+1.00",
          right_zt:"已完成",
          bgcolor:""
        }
      ]
    ],
    commissionList:[],
    total:0
  },
  //上拉触底事件
  onReachBottom (e){
    // console.log("到底了哟");
    let total = this.data.total;
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
      let setListse = this.data.setList;

      // console.log("之后的"+pageNum);
      

      let commissionList = setListse[pageNum];

      let NowList = this.data.commissionList;

      let pjList = NowList.concat(commissionList);

      // console.log(pjList);
      this.setData({
        commissionList:pjList
      });
      //拼接完数组再调用隔行换色方法
      this.ColorChange();
      
    }
    
    
  //   let set = this.data.setList;
  //   this.setData({
  //     commissionList:[]
  //   })
   },
   //隔行换色
   ColorChange(){
    
    let cg = this.data.commissionList;
    for(var i = 0;i<cg.length;i++){
      if(cg[i].id%2==0){
        cg[i].bgcolor="#cccccc";
      }else{
        cg[i].bgcolor="#ffffff";
      }
    }
    this.setData({
      commissionList:cg
    })

   },

  /**
   * 生命周
   * 期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数组
    let set = this.data.setList;
    let com = set[pageNum];
    //获得总页数
    const total = set.length;
    this.setData({total:total})
    this.setData({commissionList:com});
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
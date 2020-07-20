// pages/withdrawalrecord/withdrawalrecord.js
/*
*pagesize 每页6条
*pagefrist 第几页
*pageconts 总条数
*/ 
Page({
    data:{
        pagesize:7,
        pagefrist:1,
        pageconts:0,
        mnl:[],
        tx:[
            {money:'3000.00'},
            {money:'2000.00'},
            {money:'1000.00'},
            {money:'4000.00'},
            {money:'10000.00'},
            {money:'3200.00'},
            {money:'3080.00'},
            {money:'12000.00'},
            {money:'1040.00'},
            {money:'4500.00'},
            {money:'10.00'},
            {money:'800.00'},
            {money:'3500.00'},
            {money:'2200.00'},
            {money:'1110.00'},
            {money:'6000.00'},
            {money:'10500.00'},
            {money:'4800.00'},
            {money:'9300.00'},
        ],
    },
  // 默认第一页
    onLoad:function(options){
       var a = this.data.tx.length
       var pasiz = this.data.pagesize
       var conts = a/pasiz
       var mnl = this.data.mnl
       var tx =this.data.tx
      //  默认第一页6条
       for(var i=0;i<pasiz;i++){
           mnl.push(tx[i])
       }
       this.setData({
         mnl:mnl,
         pageconts:conts
       })
       console.log(this.data.pageconts)
    },
  //下拉刷新清除数据 
    scrollUpper(){
      // 下拉刷新时覆盖原有数据,只有第一页数据
        let sef =this
        var pagesize = 7
        var pagefrist = 1
        var tx = sef.data.tx
        var mnl=[]
        for(var l=0;l<pagesize;l++){
           mnl.push(tx[l])
        }
        wx.showLoading({
          title: '刷新中',
        })
        setTimeout(function(){
            wx.hideLoading()
            sef.setData({
               mnl:mnl,
               pagefrist:pagefrist
            })
          },1000)
        
    },
  //上拉加载拼接数据 
    scrollLower(){
         let sef =this
         var arr=sef.data.mnl
         var arr2 = sef.data.tx
         var contstx = arr2.length //接受数据的长度
         var pagefrist = sef.data.pagefrist//上拉加载第几页
         var pas = pagefrist + 1
         var pasiz = sef.data.pagesize
         var len =(pagefrist+1)*pasiz>contstx?contstx:(pagefrist+1)*pasiz //判断length
         if(pasiz*pagefrist<contstx){
         for(var j=pasiz*pagefrist;j<len;j++){
                arr.push(arr2[j])
         }

        wx.showLoading({
          title: '加载中',
        })

        setTimeout(function(){
            wx.hideLoading()
            sef.setData({
              mnl:arr,
              pagefrist:pas
            })
          },1000)
          console.log(this.data.mnl.length)
         }else{
          wx.showLoading({
            title: '没有更多数据',
          })
  
          setTimeout(function(){
              wx.hideLoading()
            },1000)
         }
    },
})
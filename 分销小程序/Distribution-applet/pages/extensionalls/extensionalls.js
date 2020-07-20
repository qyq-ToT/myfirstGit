// pages/extensionalls/extensionalls.js
Page({
  data: {
    treeData:[
      { 
      text: '张三',
      id: 1,
      childMenus: [
          {
          text: '李四',
          id: 2,
          childMenus: [
            {
            text: '王五',
            id: 3,
             },
            ]
           },
           {
            text: '赵六',
            id: 2,
            }
       ],
      },

      { 
      text: 'a股',
      id: 1,
      childMenus: [
          {
          text: 'b股',
          id: 2,
          childMenus: [
            {
            text: 'c股',
            id: 3,
             },
            ]
           },
           {
            text: 'd股',
            id: 2,
            }
       ],
      },

      { 
      text: '其他',
      id: 1,
      },
    ]
  },

  tapItem: function (e) {
    console.log('index接收到的itemid: ' + e.detail.itemid);
  },

  onLoad: function () {

  },

})
//index.js
const app = getApp()
const houselist = []
for(let i=0;i<11;i++) {
  houselist.push({
    title: `万科希望${i}`,
    value: i
  })
}
// Page({
//   onShareAppMessage() {
//     return {
//       title: 'swiper',
//       path: 'page/component/pages/swiper/swiper'
//     }
//   },

//   data: {
//     houselist,
//     startX: 0, //开始坐标
//     startY: 0,
//     page: 1,
//     list: [{
//       id:0,
//       title:'标题1',
//       create_time:'2019-09-06'
//     }, {
//       id: 1,
//       title: '标题2',
//       create_time: '2019-09-06'
//     }, {
//       id: 2,
//       title: '标题3',
//       create_time: '2019-09-06'
//     }]
//   },
//   onLoad() {
//     // console.log('csdc111sdc')
//     // wx.getUserInfo({
//     //   success: res => {

//     //   }
//     // })
//     //118.89.106.198:8002/getOpenID?appID=wx2a1db63bfc12c618&secret=f350a7b2f67de2ad0daf6e415acb69f5&JSCODE=0218kwWa0DDviB1raAXa0ypCWa08kwWD
    
//   },
//   onDetail (event) {
//     const id = event.currentTarget.dataset.id
//     wx.navigateTo({
//       url: `/pages/detail/detail`,
//       success: function(res) {
//         // 通过eventChannel向被打开页面传送数据
//         res.eventChannel.emit('acceptDataFromOpenerPage', { id })
//       }
//     })
//   },

//   changeIndicatorDots() {
//     this.setData({
//       indicatorDots: !this.data.indicatorDots
//     })
//   },

//   changeAutoplay() {
//     this.setData({
//       autoplay: !this.data.autoplay
//     })
//   },

//   intervalChange(e) {
//     this.setData({
//       interval: e.detail.value
//     })
//   },

//   durationChange(e) {
//     this.setData({
//       duration: e.detail.value
//     })
//   },
//   touchE: function (e) {
//     // console.log(e);
//     var that = this
//     if (e.changedTouches.length == 1) {
//     //手指移动结束后触摸点位置的X坐标
//     var endX = e.changedTouches[0].clientX;
//     //触摸开始与结束，手指移动的距离
//     var disX = that.data.startX - endX;
//     var delBtnWidth = that.data.delBtnWidth;
//     //如果距离小于删除按钮的1/2，不显示删除按钮
//     var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";
    
//     //获取手指触摸的是哪一项
//     var index = e.currentTarget.dataset.index;
//     var list = that.data.list;
//     list[index].txtStyle = txtStyle;
//     //更新列表的状态
//     that.setData({
//     list: list
//     });
//     }
//   },
//   //手指触摸动作开始 记录起点X坐标
//   touchstart: function (e) {
//     //开始触摸时 重置所有删除
//     this.data.list.forEach(function (v, i) {
//     if (v.isTouchMove) //只操作为true的
//     v.isTouchMove = false;
//     })
//     this.setData({
//     startX: e.changedTouches[0].clientX,
//     startY: e.changedTouches[0].clientY,
//     list: this.data.list
//     })
//   },
//   //滑动事件处理
//   touchmove: function (e) {
//     var that = this,
//     index = e.currentTarget.dataset.index, //当前索引
//     startX = that.data.startX, //开始X坐标
//     startY = that.data.startY, //开始Y坐标
//     touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
//     touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
//     //获取滑动角度
//     angle = that.angle({
//     X: startX,
//     Y: startY
//     }, {
//     X: touchMoveX,
//     Y: touchMoveY
//     });
//     that.data.list.forEach(function (v, i) {
//     v.isTouchMove = false
//     //滑动超过30度角 return
//     if (Math.abs(angle) > 30) return;
//     if (i == index) {
//     if (touchMoveX > startX) //右滑
//     v.isTouchMove = false
//     else //左滑
//     v.isTouchMove = true
//     }
//     })
//     //更新数据
//     that.setData({
//     list: that.data.list
//     })
//   },
//   /**
//   * 计算滑动角度
//   * @param {Object} start 起点坐标
//   * @param {Object} end 终点坐标
//   */
//   angle: function (start, end) {
//     var _X = end.X - start.X,
//     _Y = end.Y - start.Y
//     //返回角度 /Math.atan()返回数字的反正切值
//     return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
//   },
// })

Page({
  data: {
  address:[
  {
  id: "1",
  address: "1单元222号",
  name: "啦啦啦",
  default:"1",
  phone: "12222223333",
  province: "河北省 石家庄市 长安区",
  txtStyle: "",
  },
  {
  id: "2",
  address: "2幢2楼222号",
  name: "嚯嚯嚯",
  default: "0",
  phone: "12345678900",
  province: "浙江省 杭州市 市辖区",
  txtStyle: "",
  },
  {
  id: "3",
  address: "1幢1单元",
  name: "哈哈哈",
  default: "0",
  phone: "18208350499",
  province: "河北省 石家庄市 新华区",
  txtStyle: "",
  }
  ],
  delBtnWidth: 180
  },
   
  onLoad: function (options) {
  //获取收货地址 省略
  },
   
  edit: function (e) {
  //编辑收货地址 省略
  },
   
  add: function () {
  //增加收货地址 省略
  },
   
  delItem: function (e) {
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    this.data.address.splice(index, 1);
    this.setData({
      address: this.data.address
    })
  },
   
  touchS: function (e) {
    if (e.touches.length == 1) {
    this.setData({
      //设置触摸起始点水平方向位置
      startX: e.touches[0].clientX
      });
    }
  },
   
  touchM: function (e) {
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = this.data.startX - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0rpx";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "rpx";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "rpx";
        }
      }
      //获取手指触摸的是哪一项
      var index = e.currentTarget.dataset.index;
      var list = this.data.address;
      list[index]['txtStyle'] = txtStyle;
      //更新列表的状态
      this.setData({
        address: list
      });
    }
  },
  touchE: function (e) {
  if (e.changedTouches.length == 1) {
    //手指移动结束后水平位置
    var endX = e.changedTouches[0].clientX;
    //触摸开始与结束，手指移动的距离
    var disX = this.data.startX - endX;
    var delBtnWidth = this.data.delBtnWidth;
    //如果距离小于删除按钮的1/2，不显示删除按钮
    var txtStyle = disX > delBtnWidth / 2 ? "left:-" + delBtnWidth + "rpx" : "left:0rpx";
    //获取手指触摸的是哪一项
    var index = e.currentTarget.dataset.index;
    var list = this.data.address;
    var del_index = '';
    disX > delBtnWidth / 2 ? del_index = index : del_index = '';
    list[index].txtStyle = txtStyle;
    //更新列表的状态
    this.setData({
      address: list,
      del_index: del_index
    });
    }
  },
 })
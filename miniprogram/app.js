//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function(res) {
       if(res.errMsg === 'login:ok') {
        wx.request({
          url: 'https://www.bytemelody.com:8002/getOpenID',
          method: 'GET',
          data: {
           appID: 'wx2a1db63bfc12c618',
           secret: 'f350a7b2f67de2ad0daf6e415acb69f5',
           JSCODE: res.code
          },
          success: function(response) {
           var openid = response.data.data.openid;
           
          }
         })
       }
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})

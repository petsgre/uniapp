// app.js
const api = require("./api/services.js");
App({
  onLaunch() {
    const accountInfo = wx.getAccountInfoSync();
    console.log(accountInfo);
    api
      .login()
      .then((res) => {
        wx.setStorageSync("storage", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: (res) => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  globalData: {
    userInfo: null,
  },
});

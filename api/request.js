const com = require("../utils/config");
const createRequest = function ({ url, method, server = "user" }) {
  const storage = wx.getStorageSync("storage") || {};
  return new Promise((resolve, reject) => {
    wx.request({
      method: method,
      url: `${com.domain[server].prefix}${url}`, //仅为示例，并非真实的接口地址
      data: { userId: "12312", pwd: "xxx", origin: "miniapp" },
      header: {
        "content-type": "application/json", // 默认值
        token: storage.token,
      },
      success(res) {
        resolve(res);
        console.log(res.data);
      },
      fail(error) {
        reject(error);
      },
    });
  });
};
module.exports = {
  createRequest,
};

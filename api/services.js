const instance = require("./request.js");
const getOrderList = function () {
  return instance.createRequest({
    method: "get",
    url: "/order",
    server: "order",
  });
};
const login = function () {
  return instance.createRequest({
    method: "post",
    url: "/user/login",
  });
};
module.exports = {
  getOrderList,
  login,
};

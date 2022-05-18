const accountInfo = wx.getAccountInfoSync();
const domain = {
  user: {
    prefix: "http://localhost:8020",
  },
  order: {
    prefix: "",
  },
};
let prefix = "";
if (accountInfo.miniProgram.envVersion === "develop") {
  prefix = "http://localhost:8020";
  domain.order.prefix = "http://localhost:8080";
}
if (accountInfo.miniProgram.envVersion === "trial") {
  prefix = "http://localhost:8020";
}
if (accountInfo.miniProgram.envVersion === "release") {
  prefix = "http://localhost:8020";
}
module.exports = { prefix, domain };

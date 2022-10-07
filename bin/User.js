"use strict";

var m = require("mithril");

var User = {
  list: [],
  api: function api() {
    return m.request({
      method: "GET",
      url: "https://rem-rest-api.herokuapp.com/api/users",
      withCredentials: true
    }).then(function (data) {
      User.list = data.data; // console.log(data.data, "l");
    });
  }
};
module.exports = User;
//# sourceMappingURL=User.js.map
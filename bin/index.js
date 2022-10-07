"use strict";

var m = require("mithril");

var app = require("./app");

var contact = require("./Conatct");

var hello = require("./Hello");

m.route(document.body, "/app", {
  "/app": app,
  "/contact": contact,
  "/hello": hello
});
//# sourceMappingURL=index.js.map
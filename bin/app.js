"use strict";

var m = require("mithril");

var User = require("./User");

var Navbar = require("./Navbar");

var app = {
  oninit: User.api,
  view: function view() {
    return m("div", [m(Navbar), m("h2", {
      "class": "px-4 py-2"
    }, "User List"), m("div", {
      "class": "px-4 py-2"
    }, User.list.map(function (e) {
      return m("li", "".concat(e.firstName, " ").concat(e.lastName));
    })), m("a", {
      href: "#!/contact",
      "class": "text-indigo-500 px-4 inline-flex items-center md:mb-2 lg:mb-0"
    }, "Contact Me"), m("img", {
      src: "https://images.unsplash.com/photo-1661294271621-f63d542ff369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Demo",
      "class": "px-4 py-2 w-40"
    })]);
  }
};
module.exports = app;
//# sourceMappingURL=app.js.map
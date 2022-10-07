"use strict";

var m = require("mithril");

var Navbar = {
  view: function view() {
    return m("div", {
      "class": "py-2 px-4 flex gap-5 bg-slate-100 shadow-lg w-full"
    }, [m("a", {
      href: "#!/app"
    }, "Home"), m("a", {
      href: "#!/contact"
    }, "Contact"), m("a", {
      href: "#!/hello"
    }, "Hello")]);
  }
};
module.exports = Navbar;
//# sourceMappingURL=Navbar.js.map
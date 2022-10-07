"use strict";

var m = require("mithril");

var Navbar = require("./Navbar");

var form = {
  formData: {
    name: ""
  },
  formPage: function formPage() {
    alert("Hello ".concat(form.formData.name));
  }
};
var Contact = {
  view: function view() {
    return m("div", [m(Navbar), m("div", {
      "class": "px-4 py-2"
    }, [m("h2", "Contact Page"), m("input", {
      oninput: function oninput(e) {
        form.formData.name = e.target.value;
      },
      "class": "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
      placeholder: "Enter"
    }), m("button", {
      onclick: form.formPage,
      "class": "bg-slate-800 mt-2 text-white py-1 px-4 rounded-md shadow-md"
    }, "Submit"), m("p", "You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders"), m("a", {
      href: "#!/app",
      "class": "text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
    }, "Back Home")])]);
  }
};
module.exports = Contact;
//# sourceMappingURL=Conatct.js.map
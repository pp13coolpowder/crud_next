(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 149:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Roboto_0518d6', '__Roboto_Fallback_0518d6'","fontWeight":700,"fontStyle":"normal"},
	"className": "__className_0518d6"
};


/***/ }),

/***/ 9068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"pages\\_app.js","import":"Roboto","arguments":[{"subsets":[],"weight":["700"]}],"variableName":"roboto"}
var target_path_pages_app_js_import_Roboto_arguments_subsets_weight_700_variableName_roboto_ = __webpack_require__(149);
var target_path_pages_app_js_import_Roboto_arguments_subsets_weight_700_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_Roboto_arguments_subsets_weight_700_variableName_roboto_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (target_path_pages_app_js_import_Roboto_arguments_subsets_weight_700_variableName_roboto_default()).className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "https://www.logo-th.com/wp-content/uploads/2019/05/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81-300x300.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Bangchak Corporation Thailand"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9068));
module.exports = __webpack_exports__;

})();
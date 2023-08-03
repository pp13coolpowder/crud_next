"use strict";
(() => {
var exports = {};
exports.id = 878;
exports.ids = [878];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 8373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GETPOST": () => (/* binding */ GETPOST),
/* harmony export */   "GetUserTable": () => (/* binding */ GetUserTable),
/* harmony export */   "POST": () => (/* binding */ POST),
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "datapost": () => (/* binding */ datapost),
/* harmony export */   "deletepost": () => (/* binding */ deletepost),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "mypost": () => (/* binding */ mypost),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "updatepost": () => (/* binding */ updatepost)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//User
const register = async (value)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://odd-pear-dalmatian-toga.cyclic.app/register", value);
const login = async (value)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://odd-pear-dalmatian-toga.cyclic.app/login", value);
const auth = async (id_token)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://odd-pear-dalmatian-toga.cyclic.app/Auth", {}, {
        headers: {
            id_token
        }
    });
const GetUserTable = async ()=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://odd-pear-dalmatian-toga.cyclic.app/list&user");
//Post
const POST = async (value)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("https://odd-pear-dalmatian-toga.cyclic.app/post", value);
const GETPOST = async ()=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://odd-pear-dalmatian-toga.cyclic.app/postlist");
const mypost = async (id)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://odd-pear-dalmatian-toga.cyclic.app/postlist/user/" + id);
const datapost = async (id)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("http://localhost:4040/postlist/" + id);
const updatepost = async (id, value)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"].put("https://odd-pear-dalmatian-toga.cyclic.app/post&update/" + id, value);
const deletepost = async (id)=>await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("https://odd-pear-dalmatian-toga.cyclic.app/post&delete/" + id);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8373));
module.exports = __webpack_exports__;

})();
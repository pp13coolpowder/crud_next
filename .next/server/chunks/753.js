"use strict";
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 3753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I3": () => (/* binding */ updatepost),
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "a4": () => (/* binding */ POST),
/* harmony export */   "bn": () => (/* binding */ GETPOST),
/* harmony export */   "nf": () => (/* binding */ GetUserTable),
/* harmony export */   "ry": () => (/* binding */ deletepost),
/* harmony export */   "su": () => (/* binding */ datapost),
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "xf": () => (/* binding */ mypost)
/* harmony export */ });
/* unused harmony export register */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

//User
const register = async (value)=>await axios.post("https://odd-pear-dalmatian-toga.cyclic.app/register", value);
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
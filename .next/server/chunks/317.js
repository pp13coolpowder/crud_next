"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 6317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post_edit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3753);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_axios__WEBPACK_IMPORTED_MODULE_2__]);
_pages_api_axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Post_edit({ visible , onClose , id , lod  }) {
    const click = (e)=>{
        if (e.target.id === "contaner") onClose();
    };
    if (!visible) return null;
    const [postlist, setpostlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_pages_api_axios__WEBPACK_IMPORTED_MODULE_2__/* .datapost */ .su)(id).then((res)=>{
            setpostlist([
                res.data
            ]);
        }).catch((err)=>console.log(err));
    }, []);
    const [post, setpost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        post: ""
    });
    const handlechang = (e)=>{
        setpost({
            ...post,
            [e.target.name]: e.target.value
        });
    };
    const submit = (e)=>{
        e.preventDefault();
        (0,_pages_api_axios__WEBPACK_IMPORTED_MODULE_2__/* .updatepost */ .I3)(id, post).then(()=>lod());
        onClose();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "contaner",
        onClick: click,
        className: "fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-5 p-5  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    children: postlist.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-center",
                                    children: "Edit Post"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex py-2 items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "mr-2 w-[30px] h-[30px] rounded-full ",
                                            src: item.image
                                        }),
                                        item.user_name,
                                        " ",
                                        item.user_lastname
                                    ]
                                }),
                                item.title,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                item.post
                            ]
                        }, i))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: submit,
                    className: "p-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "placeholder:text-center text-center border-2 rounded-full",
                            onChange: handlechang,
                            name: "title",
                            placeholder: "title",
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "placeholder:text-center text-center border-2 rounded-full",
                            onChange: handlechang,
                            name: "post",
                            placeholder: "post",
                            required: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "m-4 bg-blue-800 text-white w-28 h-8 rounded-full",
                            children: "Submit"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
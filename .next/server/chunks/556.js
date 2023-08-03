"use strict";
exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 7556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_api_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3753);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_axios__WEBPACK_IMPORTED_MODULE_4__]);
_pages_api_axios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Menu_Navbar = ()=>{
    const [user, setuser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const id = localStorage.jwt;
        (0,_pages_api_axios__WEBPACK_IMPORTED_MODULE_4__/* .auth */ .I8)(id).then((res)=>setuser([
                res.data
            ])).catch((err)=>console.log(err));
    }, []);
    const Menus = [
        {
            nane: "Oil Price",
            href: "/page/Oil_Price"
        },
        {
            nane: "Review",
            href: "/page/Review"
        },
        {
            nane: "Profile",
            href: "/page/User"
        },
        {
            nane: "Table",
            href: "/page/Table"
        }
    ];
    const rout = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const logout = (e)=>{
        e.preventDefault();
        localStorage.removeItem("jwt");
        rout.push("/");
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire("Log Out!", "Logout success!", "success");
    };
    const [menu, setmenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-blue-700 flex justify-between p-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mx-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "h-12 mr-2 ",
                                src: "/svg/logo_bangchak.svg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "h-12 hidden w-full lg:block lg:w-auto",
                                src: "/svg/100Xhappy.svg"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center space-x-4 mx-4",
                        children: Menus.map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden w-full xl:block xl:w-auto text-xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: menu.href,
                                    className: `${menu.href === rout.pathname ? "text-white bg-teal-600 p-2 rounded-full" : " text-white hover:text-teal-600"}`,
                                    children: menu.nane
                                }, i)
                            }))
                    }),
                    user.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-2 mx-4 text-xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>setmenu(!menu),
                                    className: "xl:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        class: "w-6 h-6",
                                        "aria-hidden": "true",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            "fill-rule": "evenodd",
                                            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                            "clip-rule": "evenodd"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "h-10 w-10 rounded-full ",
                                    src: item.image
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden w-full md:block md:w-auto text-white",
                                    children: [
                                        item.user_name,
                                        "\xa0",
                                        item.user_lastname
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: logout,
                                    className: " bg-red-600 p-1 rounded-full text-white",
                                    children: "Logout"
                                })
                            ]
                        }, i))
                ]
            }),
            menu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "xl:hidden fixed",
                children: Menus.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: item.href,
                        className: " flex flex-row bg-black bg-opacity-40 justify-center w-screen",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${menu.href === rout.pathname ? "text-white bg-teal-600 p-2 rounded-full " : "text-white hover:text-teal-600"}`,
                            children: item.nane
                        })
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu_Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
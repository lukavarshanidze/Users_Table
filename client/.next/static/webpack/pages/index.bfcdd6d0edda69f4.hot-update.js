"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/utils/TableBody.tsx":
/*!***********************************!*\
  !*** ./pages/utils/TableBody.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_openUserInNew_openInNewWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/openUserInNew/openInNewWindow */ \"./pages/components/openUserInNew/openInNewWindow.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_currentUserSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slices/currentUserSlice */ \"./pages/slices/currentUserSlice.ts\");\n/* harmony import */ var _slices_editUserSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/editUserSlice */ \"./pages/slices/editUserSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nc;\nconst TableBody = (param)=>{\n    let { currentUsers } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const { entities, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.user);\n    const editUser = (event, user)=>{\n        event.stopPropagation();\n        dispatch((0,_slices_currentUserSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentUserId)(user.id));\n        dispatch((0,_slices_editUserSlice__WEBPACK_IMPORTED_MODULE_5__.setEditUserData)(user));\n        document.getElementById(\"id01\").style.display = \"none\";\n        document.getElementById(\"id02\").style.display = \"block\";\n    };\n    const openModal = (e, user)=>{\n        e.stopPropagation();\n        dispatch((0,_slices_currentUserSlice__WEBPACK_IMPORTED_MODULE_4__.setCurrentUserId)(user.id));\n        document.getElementById(\"id01\").style.display = \"block\";\n        document.getElementById(\"id02\").style.display = \"none\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        className: \"border-solid \",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined) : currentUsers.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"\",\n                onClick: ()=>(0,_components_openUserInNew_openInNewWindow__WEBPACK_IMPORTED_MODULE_2__.openUserInNewWindow)(user),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"w-1/4\",\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"w-1/4\",\n                        children: user.email\n                    }, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"w-1/4\",\n                        children: user.city\n                    }, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        className: \"flex justify-around mt-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    editUser(e, user);\n                                },\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: (e)=>{\n                                    e.stopPropagation();\n                                    openModal(e, user);\n                                },\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, user.id, true, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/utils/TableBody.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TableBody, \"VAfHC0rajn3SCFUB9bqsrE96Tp0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = TableBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableBody);\nvar _c;\n$RefreshReg$(_c, \"TableBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91dGlscy9UYWJsZUJvZHkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzBDO0FBQzNCO0FBQ087QUFDSjtBQUUxRE07QUFDQSxNQUFNQyxZQUFZO1FBQUMsRUFBRUMsWUFBWSxFQUFPOztJQUN0QyxNQUFNQyxXQUFXUCx3REFBV0E7SUFDNUIsTUFBTSxFQUFFUSxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHUix3REFBV0EsQ0FBQyxDQUFDUyxRQUFxQkEsTUFBTUMsSUFBSTtJQUUxRSxNQUFNQyxXQUFXLENBQUNDLE9BQVlGO1FBQzVCRSxNQUFNQyxlQUFlO1FBQ3JCUCxTQUFTTCwwRUFBZ0JBLENBQUNTLEtBQUtJLEVBQUU7UUFDakNSLFNBQVNKLHNFQUFlQSxDQUFDUTtRQUN6QkssU0FBU0MsY0FBYyxDQUFDLFFBQVNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1FBQ2pESCxTQUFTQyxjQUFjLENBQUMsUUFBU0MsS0FBSyxDQUFDQyxPQUFPLEdBQUc7SUFDbkQ7SUFFQSxNQUFNQyxZQUFZLENBQUNDLEdBQUdWO1FBQ3BCVSxFQUFFUCxlQUFlO1FBQ2pCUCxTQUFTTCwwRUFBZ0JBLENBQUNTLEtBQUtJLEVBQUU7UUFDakNDLFNBQVNDLGNBQWMsQ0FBQyxRQUFTQyxLQUFLLENBQUNDLE9BQU8sR0FBRztRQUNqREgsU0FBU0MsY0FBYyxDQUFDLFFBQVNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO0lBQ25EO0lBR0EscUJBQ0UsOERBQUNHO1FBQU1DLFdBQVU7a0JBQ2RkLHdCQUNDLDhEQUFDZTtzQkFDQyw0RUFBQ0M7MEJBQUc7Ozs7Ozs7Ozs7d0JBR05uQixhQUFhb0IsR0FBRyxDQUFDLENBQUNmLHFCQUNoQiw4REFBQ2E7Z0JBQ0NELFdBQVU7Z0JBRVZJLFNBQVMsSUFBTTVCLDhGQUFtQkEsQ0FBQ1k7O2tDQUVuQyw4REFBQ2M7d0JBQUdGLFdBQVU7a0NBQVNaLEtBQUtpQixJQUFJOzs7Ozs7a0NBQ2hDLDhEQUFDSDt3QkFBR0YsV0FBVTtrQ0FBU1osS0FBS2tCLEtBQUs7Ozs7OztrQ0FDakMsOERBQUNKO3dCQUFHRixXQUFVO2tDQUFTWixLQUFLbUIsSUFBSTs7Ozs7O2tDQUNoQyw4REFBQ0w7d0JBQUdGLFdBQVU7OzBDQUNaLDhEQUFDUTtnQ0FDQ0osU0FBUyxDQUFDTjtvQ0FDUlQsU0FBU1MsR0FBR1Y7Z0NBQ2Q7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ29CO2dDQUNDSixTQUFTLENBQUNOO29DQUNSQSxFQUFFUCxlQUFlO29DQUNqQk0sVUFBVUMsR0FBR1Y7Z0NBQ2Y7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7ZUFuQkVBLEtBQUtJLEVBQUU7Ozs7Ozs7Ozs7QUE0QnhCO0dBMURNVjs7UUFDYUwsb0RBQVdBO1FBQ0VDLG9EQUFXQTs7O0tBRnJDSTtBQTRETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91dGlscy9UYWJsZUJvZHkudHN4P2UzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBvcGVuVXNlckluTmV3V2luZG93IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3BlblVzZXJJbk5ldy9vcGVuSW5OZXdXaW5kb3dcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudFVzZXJJZCB9IGZyb20gXCIuLi9zbGljZXMvY3VycmVudFVzZXJTbGljZVwiO1xuaW1wb3J0IHsgc2V0RWRpdFVzZXJEYXRhIH0gZnJvbSBcIi4uL3NsaWNlcy9lZGl0VXNlclNsaWNlXCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcbmNcbmNvbnN0IFRhYmxlQm9keSA9ICh7IGN1cnJlbnRVc2VycyB9OiBhbnkpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGVudGl0aWVzLCBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgY29uc3QgZWRpdFVzZXIgPSAoZXZlbnQ6IGFueSwgdXNlcjogYW55KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFVzZXJJZCh1c2VyLmlkKSk7XG4gICAgZGlzcGF0Y2goc2V0RWRpdFVzZXJEYXRhKHVzZXIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkMDFcIikhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkMDJcIikhLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH07XG5cbiAgY29uc3Qgb3Blbk1vZGFsID0gKGUsIHVzZXI6IGFueSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudFVzZXJJZCh1c2VyLmlkKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZDAxXCIpIS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWQwMlwiKSEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYm9yZGVyLXNvbGlkIFwiPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+TG9hZGluZy4uLjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICApIDogKFxuICAgICAgICBjdXJyZW50VXNlcnMubWFwKCh1c2VyOiBhbnkpID0+IChcbiAgICAgICAgICA8dHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICBrZXk9e3VzZXIuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuVXNlckluTmV3V2luZG93KHVzZXIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3LTEvNFwiPnt1c2VyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3LTEvNFwiPnt1c2VyLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidy0xLzRcIj57dXNlci5jaXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBtdC0zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZWRpdFVzZXIoZSwgdXNlcik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbChlLCB1c2VyKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKVxuICAgICAgKX1cbiAgICA8L3Rib2R5PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwib3BlblVzZXJJbk5ld1dpbmRvdyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzZXRDdXJyZW50VXNlcklkIiwic2V0RWRpdFVzZXJEYXRhIiwiYyIsIlRhYmxlQm9keSIsImN1cnJlbnRVc2VycyIsImRpc3BhdGNoIiwiZW50aXRpZXMiLCJsb2FkaW5nIiwic3RhdGUiLCJ1c2VyIiwiZWRpdFVzZXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9wZW5Nb2RhbCIsImUiLCJ0Ym9keSIsImNsYXNzTmFtZSIsInRyIiwidGQiLCJtYXAiLCJvbkNsaWNrIiwibmFtZSIsImVtYWlsIiwiY2l0eSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/utils/TableBody.tsx\n"));

/***/ })

});
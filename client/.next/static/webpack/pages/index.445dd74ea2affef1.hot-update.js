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

/***/ "./pages/components/table/UsersTable.tsx":
/*!***********************************************!*\
  !*** ./pages/components/table/UsersTable.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _pages_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/slices/userSlice */ \"./pages/slices/userSlice.ts\");\n/* harmony import */ var _Pegination_Pegination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pegination/Pegination */ \"./pages/components/Pegination/Pegination.tsx\");\n/* harmony import */ var _pages_utils_DeleteUserModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/utils/DeleteUserModal */ \"./pages/utils/DeleteUserModal.tsx\");\n/* harmony import */ var _pages_utils_TableHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/utils/TableHeader */ \"./pages/utils/TableHeader.tsx\");\n/* harmony import */ var _pages_utils_EditUserModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/utils/EditUserModal */ \"./pages/utils/EditUserModal.tsx\");\n/* harmony import */ var _pages_utils_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pages/utils/TableBody */ \"./pages/utils/TableBody.tsx\");\n/* harmony import */ var _pages_utils_CloseModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/utils/CloseModal */ \"./pages/utils/CloseModal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { entities, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const itemsPerPage = 10;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const indexOfLastUser = currentPage * itemsPerPage;\n    const indexOfFirstUser = indexOfLastUser - itemsPerPage;\n    let currentUsers = entities.slice(indexOfFirstUser, indexOfLastUser);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_pages_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUsers)());\n    }, [\n        _pages_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUsers,\n        dispatch\n    ]);\n    (0,_pages_utils_CloseModal__WEBPACK_IMPORTED_MODULE_9__.CloseModal)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-1/1 mx-auto  flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_TableHeader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_TableBody__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        currentUsers: currentUsers\n                    }, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pegination_Pegination__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                itemsPerPage: itemsPerPage,\n                setCurrentPage: setCurrentPage\n            }, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_DeleteUserModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_EditUserModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GUhb72/ywIA1FfoyU1TyHqLiRQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RhYmxlL1VzZXJzVGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNJO0FBQ0Q7QUFFSjtBQUNVO0FBQ1I7QUFDSTtBQUNSO0FBQ007QUFFdEQsU0FBU1k7O0lBQ1AsTUFBTUMsV0FBV1Ysd0RBQVdBO0lBQzVCLE1BQU0sRUFBRVcsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBR1gsd0RBQVdBLENBQUMsQ0FBQ1ksUUFBcUJBLE1BQU1DLElBQUk7SUFDMUUsTUFBTUMsZUFBZTtJQUNyQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1vQixrQkFBa0JGLGNBQWNEO0lBQ3RDLE1BQU1JLG1CQUFtQkQsa0JBQWtCSDtJQUMzQyxJQUFJSyxlQUFlVCxTQUFTVSxLQUFLLENBQUNGLGtCQUFrQkQ7SUFFcERuQixnREFBU0EsQ0FBQztRQUNSVyxTQUFTUixtRUFBVUE7SUFDckIsR0FBRztRQUFDQSwrREFBVUE7UUFBRVE7S0FBUztJQUV6QkYsbUVBQVVBO0lBQ1YscUJBQ0UsOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBTUQsV0FBVTs7a0NBQ2YsOERBQUNsQixnRUFBV0E7Ozs7O2tDQUNaLDhEQUFDRSw4REFBU0E7d0JBQUNhLGNBQWNBOzs7Ozs7Ozs7Ozs7MEJBRTNCLDhEQUFDakIsOERBQVVBO2dCQUFDWSxjQUFjQTtnQkFBY0UsZ0JBQWdCQTs7Ozs7OzBCQUN4RCw4REFBQ2Isb0VBQWVBOzs7OzswQkFDaEIsOERBQUNFLGtFQUFhQTs7Ozs7Ozs7Ozs7QUFHcEI7R0F6QlNHOztRQUNVVCxvREFBV0E7UUFDRUMsb0RBQVdBOzs7S0FGbENRO0FBMEJULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvdGFibGUvVXNlcnNUYWJsZS50c3g/NjczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tIFwiQC9wYWdlcy9zbGljZXMvdXNlclNsaWNlXCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIkAvcGFnZXMvc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBQZWdpbmF0aW9uIGZyb20gXCIuLi9QZWdpbmF0aW9uL1BlZ2luYXRpb25cIjtcbmltcG9ydCBEZWxldGVVc2VyTW9kYWwgZnJvbSBcIkAvcGFnZXMvdXRpbHMvRGVsZXRlVXNlck1vZGFsXCI7XG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSBcIkAvcGFnZXMvdXRpbHMvVGFibGVIZWFkZXJcIjtcbmltcG9ydCBFZGl0VXNlck1vZGFsIGZyb20gXCJAL3BhZ2VzL3V0aWxzL0VkaXRVc2VyTW9kYWxcIjtcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkAvcGFnZXMvdXRpbHMvVGFibGVCb2R5XCI7XG5pbXBvcnQgeyBDbG9zZU1vZGFsIH0gZnJvbSBcIkAvcGFnZXMvdXRpbHMvQ2xvc2VNb2RhbFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuICBjb25zdCB7IGVudGl0aWVzLCBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IDEwO1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBpbmRleE9mTGFzdFVzZXIgPSBjdXJyZW50UGFnZSAqIGl0ZW1zUGVyUGFnZTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0VXNlciA9IGluZGV4T2ZMYXN0VXNlciAtIGl0ZW1zUGVyUGFnZTtcbiAgbGV0IGN1cnJlbnRVc2VycyA9IGVudGl0aWVzLnNsaWNlKGluZGV4T2ZGaXJzdFVzZXIsIGluZGV4T2ZMYXN0VXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xuICB9LCBbZmV0Y2hVc2VycywgZGlzcGF0Y2hdKTtcblxuICBDbG9zZU1vZGFsKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEvMSBteC1hdXRvICBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPFRhYmxlSGVhZGVyIC8+XG4gICAgICAgIDxUYWJsZUJvZHkgY3VycmVudFVzZXJzPXtjdXJyZW50VXNlcnN9IC8+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPFBlZ2luYXRpb24gaXRlbXNQZXJQYWdlPXtpdGVtc1BlclBhZ2V9IHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX0gLz5cbiAgICAgIDxEZWxldGVVc2VyTW9kYWwgLz5cbiAgICAgIDxFZGl0VXNlck1vZGFsIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hVc2VycyIsIlBlZ2luYXRpb24iLCJEZWxldGVVc2VyTW9kYWwiLCJUYWJsZUhlYWRlciIsIkVkaXRVc2VyTW9kYWwiLCJUYWJsZUJvZHkiLCJDbG9zZU1vZGFsIiwiSG9tZSIsImRpc3BhdGNoIiwiZW50aXRpZXMiLCJsb2FkaW5nIiwic3RhdGUiLCJ1c2VyIiwiaXRlbXNQZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImluZGV4T2ZMYXN0VXNlciIsImluZGV4T2ZGaXJzdFVzZXIiLCJjdXJyZW50VXNlcnMiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/table/UsersTable.tsx\n"));

/***/ })

});
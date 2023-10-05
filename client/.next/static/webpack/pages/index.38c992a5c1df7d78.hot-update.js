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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _pages_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/slices/userSlice */ \"./pages/slices/userSlice.ts\");\n/* harmony import */ var _pages_slices_currentUserSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/pages/slices/currentUserSlice */ \"./pages/slices/currentUserSlice.ts\");\n/* harmony import */ var _pages_slices_editUserSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/slices/editUserSlice */ \"./pages/slices/editUserSlice.ts\");\n/* harmony import */ var _Pegination_Pegination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pegination/Pegination */ \"./pages/components/Pegination/Pegination.tsx\");\n/* harmony import */ var _pages_utils_CloseModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/utils/CloseModal */ \"./pages/utils/CloseModal.tsx\");\n/* harmony import */ var _pages_utils_DeleteUserModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pages/utils/DeleteUserModal */ \"./pages/utils/DeleteUserModal.tsx\");\n/* harmony import */ var _pages_utils_TableHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/utils/TableHeader */ \"./pages/utils/TableHeader.tsx\");\n/* harmony import */ var _pages_utils_EditUserModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/pages/utils/EditUserModal */ \"./pages/utils/EditUserModal.tsx\");\n/* harmony import */ var _pages_utils_TableBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/pages/utils/TableBody */ \"./pages/utils/TableBody.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { entities, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const itemsPerPage = 10;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const indexOfLastUser = currentPage * itemsPerPage;\n    const indexOfFirstUser = indexOfLastUser - itemsPerPage;\n    let currentUsers = entities.slice(indexOfFirstUser, indexOfLastUser);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_pages_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUsers)());\n    }, [\n        _pages_slices_userSlice__WEBPACK_IMPORTED_MODULE_3__.fetchUsers,\n        dispatch\n    ]);\n    // Edit user function\n    // Close modal function\n    const closeModal = ()=>{\n        dispatch((0,_pages_slices_currentUserSlice__WEBPACK_IMPORTED_MODULE_4__.clearCurrentUserId)());\n        dispatch((0,_pages_slices_editUserSlice__WEBPACK_IMPORTED_MODULE_5__.clearEditUserData)());\n        document.getElementById(\"id02\").style.display = \"none\";\n        document.getElementById(\"id01\").style.display = \"none\";\n    };\n    // Event listener for closing modals when clicking outside\n    (0,_pages_utils_CloseModal__WEBPACK_IMPORTED_MODULE_7__.CloseModal)();\n    // Render the component\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-1/1 mx-auto  flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_TableHeader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_TableBody__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        currentUsers: currentUsers\n                    }, void 0, false, {\n                        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pegination_Pegination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                itemsPerPage: itemsPerPage,\n                setCurrentPage: setCurrentPage\n            }, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_DeleteUserModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_utils_EditUserModal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/table/UsersTable.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GUhb72/ywIA1FfoyU1TyHqLiRQo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3RhYmxlL1VzZXJzVGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzJEO0FBQ0o7QUFDRDtBQU1iO0FBQ3dCO0FBQ2Y7QUFFSTtBQUNNO0FBQ1I7QUFDSTtBQUNSO0FBRWhELFNBQVNjOztJQUNQLE1BQU1DLFdBQVdaLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVhLFFBQVEsRUFBRUMsT0FBTyxFQUFFLEdBQUdiLHdEQUFXQSxDQUFDLENBQUNjLFFBQXFCQSxNQUFNQyxJQUFJO0lBQzFFLE1BQU1DLGVBQWU7SUFDckIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNc0Isa0JBQWtCRixjQUFjRDtJQUN0QyxNQUFNSSxtQkFBbUJELGtCQUFrQkg7SUFDM0MsSUFBSUssZUFBZVQsU0FBU1UsS0FBSyxDQUFDRixrQkFBa0JEO0lBRXBEckIsZ0RBQVNBLENBQUM7UUFDUmEsU0FBU1YsbUVBQVVBO0lBQ3JCLEdBQUc7UUFBQ0EsK0RBQVVBO1FBQUVVO0tBQVM7SUFFekIscUJBQXFCO0lBRXJCLHVCQUF1QjtJQUN2QixNQUFNWSxhQUFhO1FBQ2pCWixTQUFTVCxrRkFBa0JBO1FBQzNCUyxTQUFTUiw4RUFBaUJBO1FBQzFCcUIsU0FBU0MsY0FBYyxDQUFDLFFBQVNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1FBQ2pESCxTQUFTQyxjQUFjLENBQUMsUUFBU0MsS0FBSyxDQUFDQyxPQUFPLEdBQUc7SUFDbkQ7SUFFQSwwREFBMEQ7SUFDMUR0QixtRUFBVUE7SUFFVix1QkFBdUI7SUFDdkIscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDdEIsZ0VBQVdBOzs7OztrQ0FDWiw4REFBQ0UsK0RBQVNBO3dCQUFDWSxjQUFjQTs7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ2pCLDhEQUFVQTtnQkFBQ1ksY0FBY0E7Z0JBQWNFLGdCQUFnQkE7Ozs7OzswQkFDeEQsOERBQUNaLG9FQUFlQTs7Ozs7MEJBQ2hCLDhEQUFDRSxtRUFBYUE7Ozs7Ozs7Ozs7O0FBR3BCO0dBdENTRTs7UUFDVVgsb0RBQVdBO1FBQ0VDLG9EQUFXQTs7O0tBRmxDVTtBQXVDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3RhYmxlL1VzZXJzVGFibGUudHN4PzY3MzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tIFwiQC9wYWdlcy9zbGljZXMvdXNlclNsaWNlXCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIkAvcGFnZXMvc3RvcmUvc3RvcmVcIjtcbmltcG9ydCB7IHNldEVkaXRVc2VyRGF0YSB9IGZyb20gXCJAL3BhZ2VzL3NsaWNlcy9lZGl0VXNlclNsaWNlXCI7XG5pbXBvcnQge1xuICBzZXRDdXJyZW50VXNlcklkLFxuICBjbGVhckN1cnJlbnRVc2VySWQsXG59IGZyb20gXCJAL3BhZ2VzL3NsaWNlcy9jdXJyZW50VXNlclNsaWNlXCI7XG5pbXBvcnQgeyBjbGVhckVkaXRVc2VyRGF0YSB9IGZyb20gXCJAL3BhZ2VzL3NsaWNlcy9lZGl0VXNlclNsaWNlXCI7XG5pbXBvcnQgUGVnaW5hdGlvbiBmcm9tIFwiLi4vUGVnaW5hdGlvbi9QZWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBvcGVuVXNlckluTmV3V2luZG93IH0gZnJvbSBcIi4uL29wZW5Vc2VySW5OZXcvb3BlbkluTmV3V2luZG93XCI7XG5pbXBvcnQgeyBDbG9zZU1vZGFsIH0gZnJvbSBcIkAvcGFnZXMvdXRpbHMvQ2xvc2VNb2RhbFwiO1xuaW1wb3J0IERlbGV0ZVVzZXJNb2RhbCBmcm9tIFwiQC9wYWdlcy91dGlscy9EZWxldGVVc2VyTW9kYWxcIjtcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tIFwiQC9wYWdlcy91dGlscy9UYWJsZUhlYWRlclwiO1xuaW1wb3J0IEVkaXRVc2VyTW9kYWwgZnJvbSBcIkAvcGFnZXMvdXRpbHMvRWRpdFVzZXJNb2RhbFwiO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQC9wYWdlcy91dGlscy9UYWJsZUJvZHlcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcbiAgY29uc3QgeyBlbnRpdGllcywgbG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBpdGVtc1BlclBhZ2UgPSAxMDtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgaW5kZXhPZkxhc3RVc2VyID0gY3VycmVudFBhZ2UgKiBpdGVtc1BlclBhZ2U7XG4gIGNvbnN0IGluZGV4T2ZGaXJzdFVzZXIgPSBpbmRleE9mTGFzdFVzZXIgLSBpdGVtc1BlclBhZ2U7XG4gIGxldCBjdXJyZW50VXNlcnMgPSBlbnRpdGllcy5zbGljZShpbmRleE9mRmlyc3RVc2VyLCBpbmRleE9mTGFzdFVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcbiAgfSwgW2ZldGNoVXNlcnMsIGRpc3BhdGNoXSk7XG5cbiAgLy8gRWRpdCB1c2VyIGZ1bmN0aW9uXG5cbiAgLy8gQ2xvc2UgbW9kYWwgZnVuY3Rpb25cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChjbGVhckN1cnJlbnRVc2VySWQoKSk7XG4gICAgZGlzcGF0Y2goY2xlYXJFZGl0VXNlckRhdGEoKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZDAyXCIpIS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZDAxXCIpIS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NpbmcgbW9kYWxzIHdoZW4gY2xpY2tpbmcgb3V0c2lkZVxuICBDbG9zZU1vZGFsKCk7XG5cbiAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnRcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMS8xIG14LWF1dG8gIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8VGFibGVIZWFkZXIgLz5cbiAgICAgICAgPFRhYmxlQm9keSBjdXJyZW50VXNlcnM9e2N1cnJlbnRVc2Vyc30gLz5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8UGVnaW5hdGlvbiBpdGVtc1BlclBhZ2U9e2l0ZW1zUGVyUGFnZX0gc2V0Q3VycmVudFBhZ2U9e3NldEN1cnJlbnRQYWdlfSAvPlxuICAgICAgPERlbGV0ZVVzZXJNb2RhbCAvPlxuICAgICAgPEVkaXRVc2VyTW9kYWwgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaFVzZXJzIiwiY2xlYXJDdXJyZW50VXNlcklkIiwiY2xlYXJFZGl0VXNlckRhdGEiLCJQZWdpbmF0aW9uIiwiQ2xvc2VNb2RhbCIsIkRlbGV0ZVVzZXJNb2RhbCIsIlRhYmxlSGVhZGVyIiwiRWRpdFVzZXJNb2RhbCIsIlRhYmxlQm9keSIsIkhvbWUiLCJkaXNwYXRjaCIsImVudGl0aWVzIiwibG9hZGluZyIsInN0YXRlIiwidXNlciIsIml0ZW1zUGVyUGFnZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJpbmRleE9mTGFzdFVzZXIiLCJpbmRleE9mRmlyc3RVc2VyIiwiY3VycmVudFVzZXJzIiwic2xpY2UiLCJjbG9zZU1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/table/UsersTable.tsx\n"));

/***/ })

});
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

/***/ "./pages/components/Pegination/Pegination.tsx":
/*!****************************************************!*\
  !*** ./pages/components/Pegination/Pegination.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Pegination = (param)=>{\n    let { itemsPerPage, setCurrentPage } = param;\n    _s();\n    const { entities, loading } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const paginate = (pageNumber)=>{\n        setCurrentPage(pageNumber);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pagination mx-auto w-40 flex justify-between gap-1\",\n        children: Array.from({\n            length: Math.ceil(entities.length / itemsPerPage)\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 w-20\",\n                onClick: ()=>paginate(index + 1),\n                children: index + 1\n            }, index + 1, false, {\n                fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/Pegination/Pegination.tsx\",\n                lineNumber: 17,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/lukaspc/Desktop/users_table/client/pages/components/Pegination/Pegination.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pegination, \"DUNU9MEll+NRD/TmWfAiImLGYO0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Pegination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pegination);\nvar _c;\n$RefreshReg$(_c, \"Pegination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1BlZ2luYXRpb24vUGVnaW5hdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0M7QUFDRTtBQUUxQyxNQUFNRSxhQUFhO1FBQUMsRUFBRUMsWUFBWSxFQUFFQyxjQUFjLEVBQU07O0lBQ3RELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBR0wsd0RBQVdBLENBQUMsQ0FBQ00sUUFBcUJBLE1BQU1DLElBQUk7SUFHMUUsTUFBTUMsV0FBVyxDQUFDQztRQUNoQk4sZUFBZU07SUFDakI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkMsTUFBTUMsSUFBSSxDQUFDO1lBQUVDLFFBQVFDLEtBQUtDLElBQUksQ0FBQ1osU0FBU1UsTUFBTSxHQUFHWjtRQUFjLEdBQUdlLEdBQUcsQ0FDcEUsQ0FBQ0MsR0FBR0Msc0JBQ0YsOERBQUNDO2dCQUNDVCxXQUFVO2dCQUVWVSxTQUFTLElBQU1iLFNBQVNXLFFBQVE7MEJBRS9CQSxRQUFRO2VBSEpBLFFBQVE7Ozs7Ozs7Ozs7QUFTekI7R0F2Qk1sQjs7UUFDMEJELG9EQUFXQTs7O0tBRHJDQztBQXdCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1BlZ2luYXRpb24vUGVnaW5hdGlvbi50c3g/NTZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQC9wYWdlcy9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBQZWdpbmF0aW9uID0gKHsgaXRlbXNQZXJQYWdlLCBzZXRDdXJyZW50UGFnZX06IGFueSkgPT4ge1xuICBjb25zdCB7IGVudGl0aWVzLCBsb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gXG5cbiAgY29uc3QgcGFnaW5hdGUgPSAocGFnZU51bWJlcjogUmVhY3QuU2V0U3RhdGVBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIG14LWF1dG8gdy00MCBmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtMVwiPlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IE1hdGguY2VpbChlbnRpdGllcy5sZW5ndGggLyBpdGVtc1BlclBhZ2UpIH0pLm1hcChcbiAgICAgICAgKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdy0yMFwiXG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgMX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBhZ2luYXRlKGluZGV4ICsgMSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQZWdpbmF0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VsZWN0b3IiLCJQZWdpbmF0aW9uIiwiaXRlbXNQZXJQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJlbnRpdGllcyIsImxvYWRpbmciLCJzdGF0ZSIsInVzZXIiLCJwYWdpbmF0ZSIsInBhZ2VOdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJNYXRoIiwiY2VpbCIsIm1hcCIsIl8iLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Pegination/Pegination.tsx\n"));

/***/ })

});
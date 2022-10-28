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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), data = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), cardData = ref2[0], setCardData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    console.log(data);\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 21\n    }, this);\n    if (data) {\n        setCardData(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto bg-bodyColor pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"static-job-listings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full h-[156px] bg-headerColor bg-mobile-header sm:bg-desktop-header bg-no-repeat relative\",\n                children: openFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    setOpenFilter: setOpenFilter,\n                    openFilter: openFilter,\n                    setFilterArray: setFilterArray,\n                    cardData: cardData,\n                    setCardData: setCardData,\n                    originalData: originalData,\n                    filterArray: filterArray\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: openFilter ? \"mt-32 flex flex-col gap-12 sm:gap-6\" : \"mt-16 flex flex-col gap-12 sm:gap-6\",\n                children: cardData && cardData.map(function(eachData) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        eachData: eachData,\n                        filterArray: filterArray,\n                        setFilterArray: setFilterArray,\n                        setOpenFilter: setOpenFilter,\n                        cardData: cardData,\n                        setCardData: setCardData,\n                        originalData: originalData\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OmJ0Bta+wSk4E8AWKDtqZAllSqI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRUEsV0FBVzt3QkFDeEJDLGNBQWMsRUFBRUEsY0FBYzt3QkFDOUJGLGFBQWEsRUFBRUEsYUFBYTt3QkFDNUJILFFBQVEsRUFBRUEsUUFBUTt3QkFDbEJDLFdBQVcsRUFBRUEsV0FBVzt3QkFDeEJILFlBQVksRUFBRUEsWUFBWTt1QkFQckJiLHdDQUFFLEVBQUU7Ozs7NkJBUVQsQ0FDRjtnQkFDSixDQUFDLENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDSCxDQUNOO0FBQ0osQ0FBQztHQTVEdUJVLElBQUk7O1FBQ0ZQLDJDQUFNOzs7QUFEUk8sS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsdGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuLy9Xcml0ZSBhIGZldGNoZXIgZnVuY3Rpb24gdG8gd3JhcCB0aGUgbmF0aXZlIGZldGNoIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBvZiBhIGNhbGwgdG8gdXJsIGluIGpzb24gZm9ybWF0XG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3N0YXRpY2RhdGFcIiwgZmV0Y2hlcik7XG4gIGNvbnN0IFtvcmlnaW5hbERhdGEsIHNldE9yaWdpbmFsRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtvcGVuRmlsdGVyLCBzZXRPcGVuRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbHRlckFycmF5LCBzZXRGaWx0ZXJBcnJheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvL0hhbmRsZSB0aGUgZXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgLy9IYW5kbGUgdGhlIGxvYWRpbmcgc3RhdGVcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICBpZiAoZGF0YSkge1xuICAgIHNldENhcmREYXRhKGRhdGEpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLWJvZHlDb2xvciBwYi0xMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5zdGF0aWMtam9iLWxpc3RpbmdzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBoLVsxNTZweF0gYmctaGVhZGVyQ29sb3IgIGJnLW1vYmlsZS1oZWFkZXIgc206YmctZGVza3RvcC1oZWFkZXIgYmctbm8tcmVwZWF0IHJlbGF0aXZlXCI+XG4gICAgICAgIHtvcGVuRmlsdGVyICYmIChcbiAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfVxuICAgICAgICAgICAgb3BlbkZpbHRlcj17b3BlbkZpbHRlcn1cbiAgICAgICAgICAgIHNldEZpbHRlckFycmF5PXtzZXRGaWx0ZXJBcnJheX1cbiAgICAgICAgICAgIGNhcmREYXRhPXtjYXJkRGF0YX1cbiAgICAgICAgICAgIHNldENhcmREYXRhPXtzZXRDYXJkRGF0YX1cbiAgICAgICAgICAgIG9yaWdpbmFsRGF0YT17b3JpZ2luYWxEYXRhfVxuICAgICAgICAgICAgZmlsdGVyQXJyYXk9e2ZpbHRlckFycmF5fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPG1haW5cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBvcGVuRmlsdGVyXG4gICAgICAgICAgICA/IFwibXQtMzIgZmxleCBmbGV4LWNvbCBnYXAtMTIgc206Z2FwLTZcIlxuICAgICAgICAgICAgOiBcIm10LTE2IGZsZXggZmxleC1jb2wgZ2FwLTEyIHNtOmdhcC02XCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7Y2FyZERhdGEgJiZcbiAgICAgICAgICBjYXJkRGF0YS5tYXAoKGVhY2hEYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17djQoKX1cbiAgICAgICAgICAgICAgICBlYWNoRGF0YT17ZWFjaERhdGF9XG4gICAgICAgICAgICAgICAgZmlsdGVyQXJyYXk9e2ZpbHRlckFycmF5fVxuICAgICAgICAgICAgICAgIHNldEZpbHRlckFycmF5PXtzZXRGaWx0ZXJBcnJheX1cbiAgICAgICAgICAgICAgICBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfVxuICAgICAgICAgICAgICAgIGNhcmREYXRhPXtjYXJkRGF0YX1cbiAgICAgICAgICAgICAgICBzZXRDYXJkRGF0YT17c2V0Q2FyZERhdGF9XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxEYXRhPXtvcmlnaW5hbERhdGF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInY0IiwiQ2FyZCIsIkZpbHRlciIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsImRhdGEiLCJlcnJvciIsIm9yaWdpbmFsRGF0YSIsInNldE9yaWdpbmFsRGF0YSIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJvcGVuRmlsdGVyIiwic2V0T3BlbkZpbHRlciIsImZpbHRlckFycmF5Iiwic2V0RmlsdGVyQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImhlYWRlciIsIm1haW4iLCJtYXAiLCJlYWNoRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
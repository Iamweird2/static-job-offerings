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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), data = ref.data, error = ref.error;\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), cardData = ref2[0], setCardData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto bg-bodyColor pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"static-job-listings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full h-[156px] bg-headerColor bg-mobile-header sm:bg-desktop-header bg-no-repeat relative\",\n                children: openFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    setOpenFilter: setOpenFilter,\n                    openFilter: openFilter,\n                    setFilterArray: setFilterArray,\n                    cardData: cardData,\n                    setCardData: setCardData,\n                    originalData: originalData,\n                    filterArray: filterArray\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: openFilter ? \"mt-32 flex flex-col gap-12 sm:gap-6\" : \"mt-16 flex flex-col gap-12 sm:gap-6\",\n                children: cardData && cardData.map(function(eachData) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        eachData: eachData,\n                        filterArray: filterArray,\n                        setFilterArray: setFilterArray,\n                        setOpenFilter: setOpenFilter,\n                        cardData: cardData,\n                        setCardData: setCardData,\n                        originalData: originalData\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OmJ0Bta+wSk4E8AWKDtqZAllSqI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQ3hCSCxZQUFZLEVBQUVBLFlBQVk7dUJBUHJCZCx3Q0FBRSxFQUFFOzs7OzZCQVFULENBQ0Y7Z0JBQ0osQ0FBQyxDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUM7R0F4RHVCVSxJQUFJOztRQUNGUCwyQ0FBTTs7O0FBRFJPLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbi8vV3JpdGUgYSBmZXRjaGVyIGZ1bmN0aW9uIHRvIHdyYXAgdGhlIG5hdGl2ZSBmZXRjaCBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSByZXN1bHQgb2YgYSBjYWxsIHRvIHVybCBpbiBqc29uIGZvcm1hdFxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9zdGF0aWNkYXRhXCIsIGZldGNoZXIpO1xuICAvL0hhbmRsZSB0aGUgZXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgLy9IYW5kbGUgdGhlIGxvYWRpbmcgc3RhdGVcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICBjb25zdCBbb3JpZ2luYWxEYXRhLCBzZXRPcmlnaW5hbERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbb3BlbkZpbHRlciwgc2V0T3BlbkZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWx0ZXJBcnJheSwgc2V0RmlsdGVyQXJyYXldID0gdXNlU3RhdGUoW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBiZy1ib2R5Q29sb3IgcGItMTBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+c3RhdGljLWpvYi1saXN0aW5nczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTU2cHhdIGJnLWhlYWRlckNvbG9yICBiZy1tb2JpbGUtaGVhZGVyIHNtOmJnLWRlc2t0b3AtaGVhZGVyIGJnLW5vLXJlcGVhdCByZWxhdGl2ZVwiPlxuICAgICAgICB7b3BlbkZpbHRlciAmJiAoXG4gICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgc2V0T3BlbkZpbHRlcj17c2V0T3BlbkZpbHRlcn1cbiAgICAgICAgICAgIG9wZW5GaWx0ZXI9e29wZW5GaWx0ZXJ9XG4gICAgICAgICAgICBzZXRGaWx0ZXJBcnJheT17c2V0RmlsdGVyQXJyYXl9XG4gICAgICAgICAgICBjYXJkRGF0YT17Y2FyZERhdGF9XG4gICAgICAgICAgICBzZXRDYXJkRGF0YT17c2V0Q2FyZERhdGF9XG4gICAgICAgICAgICBvcmlnaW5hbERhdGE9e29yaWdpbmFsRGF0YX1cbiAgICAgICAgICAgIGZpbHRlckFycmF5PXtmaWx0ZXJBcnJheX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgb3BlbkZpbHRlclxuICAgICAgICAgICAgPyBcIm10LTMyIGZsZXggZmxleC1jb2wgZ2FwLTEyIHNtOmdhcC02XCJcbiAgICAgICAgICAgIDogXCJtdC0xNiBmbGV4IGZsZXgtY29sIGdhcC0xMiBzbTpnYXAtNlwiXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAge2NhcmREYXRhICYmXG4gICAgICAgICAgY2FyZERhdGEubWFwKChlYWNoRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBrZXk9e3Y0KCl9XG4gICAgICAgICAgICAgICAgZWFjaERhdGE9e2VhY2hEYXRhfVxuICAgICAgICAgICAgICAgIGZpbHRlckFycmF5PXtmaWx0ZXJBcnJheX1cbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJBcnJheT17c2V0RmlsdGVyQXJyYXl9XG4gICAgICAgICAgICAgICAgc2V0T3BlbkZpbHRlcj17c2V0T3BlbkZpbHRlcn1cbiAgICAgICAgICAgICAgICBjYXJkRGF0YT17Y2FyZERhdGF9XG4gICAgICAgICAgICAgICAgc2V0Q2FyZERhdGE9e3NldENhcmREYXRhfVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRGF0YT17b3JpZ2luYWxEYXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2NCIsIkNhcmQiLCJGaWx0ZXIiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkhvbWUiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJvcmlnaW5hbERhdGEiLCJzZXRPcmlnaW5hbERhdGEiLCJjYXJkRGF0YSIsInNldENhcmREYXRhIiwib3BlbkZpbHRlciIsInNldE9wZW5GaWx0ZXIiLCJmaWx0ZXJBcnJheSIsInNldEZpbHRlckFycmF5IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImhlYWRlciIsIm1haW4iLCJtYXAiLCJlYWNoRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
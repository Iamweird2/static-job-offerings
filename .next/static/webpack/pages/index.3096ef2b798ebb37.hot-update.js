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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), data = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data), cardData = ref2[0], setCardData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    setCardData(data);\n    console.log(data);\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 21\n    }, this);\n    // useEffect(() => {\n    //   fetch(\"http://localhost:8000/resource\")\n    //     .then((res) => {\n    //       return res.json();\n    //     })\n    //     .then((data) => (setCardData(data), setOriginalData(data)));\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto bg-bodyColor pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"static-job-listings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full h-[156px] bg-headerColor bg-mobile-header sm:bg-desktop-header bg-no-repeat relative\",\n                children: openFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    setOpenFilter: setOpenFilter,\n                    openFilter: openFilter,\n                    setFilterArray: setFilterArray,\n                    cardData: cardData,\n                    setCardData: setCardData,\n                    originalData: originalData,\n                    filterArray: filterArray\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: openFilter ? \"mt-32 flex flex-col gap-12 sm:gap-6\" : \"mt-16 flex flex-col gap-12 sm:gap-6\",\n                children: cardData && cardData.map(function(eachData) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        eachData: eachData,\n                        filterArray: filterArray,\n                        setFilterArray: setFilterArray,\n                        setOpenFilter: setOpenFilter,\n                        cardData: cardData,\n                        setCardData: setCardData,\n                        originalData: originalData\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1A3GsijRNhvOeRi69+2CCYoXEw4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQ3pCLHFCQUNFLDhEQUFDbEMsd0RBQUk7d0JBRUhrQyxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCaEIsV0FBVyxFQUFFQSxXQUFXO3dCQUN4QkMsY0FBYyxFQUFFQSxjQUFjO3dCQUM5QkYsYUFBYSxFQUFFQSxhQUFhO3dCQUM1QkgsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQkMsV0FBVyxFQUFFQSxXQUFXO3dCQUN4QkgsWUFBWSxFQUFFQSxZQUFZO3VCQVByQmIsd0NBQUUsRUFBRTs7Ozs2QkFRVCxDQUNGO2dCQUNKLENBQUMsQ0FBQzs7Ozs7b0JBQ0M7Ozs7OztZQUNILENBQ047QUFDSixDQUFDO0dBbkV1QlUsSUFBSTs7UUFDRlAsMkNBQU07OztBQURSTyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9GaWx0ZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG4vL1dyaXRlIGEgZmV0Y2hlciBmdW5jdGlvbiB0byB3cmFwIHRoZSBuYXRpdmUgZmV0Y2ggZnVuY3Rpb24gYW5kIHJldHVybiB0aGUgcmVzdWx0IG9mIGEgY2FsbCB0byB1cmwgaW4ganNvbiBmb3JtYXRcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvc3RhdGljZGF0YVwiLCBmZXRjaGVyKTtcbiAgY29uc3QgW29yaWdpbmFsRGF0YSwgc2V0T3JpZ2luYWxEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIGNvbnN0IFtvcGVuRmlsdGVyLCBzZXRPcGVuRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbHRlckFycmF5LCBzZXRGaWx0ZXJBcnJheV0gPSB1c2VTdGF0ZShbXSk7XG4gIHNldENhcmREYXRhKGRhdGEpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy9IYW5kbGUgdGhlIGVycm9yIHN0YXRlXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gIC8vSGFuZGxlIHRoZSBsb2FkaW5nIHN0YXRlXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Jlc291cmNlXCIpXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XG4gIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiAoc2V0Q2FyZERhdGEoZGF0YSksIHNldE9yaWdpbmFsRGF0YShkYXRhKSkpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctYm9keUNvbG9yIHBiLTEwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnN0YXRpYy1qb2ItbGlzdGluZ3M8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzE1NnB4XSBiZy1oZWFkZXJDb2xvciAgYmctbW9iaWxlLWhlYWRlciBzbTpiZy1kZXNrdG9wLWhlYWRlciBiZy1uby1yZXBlYXQgcmVsYXRpdmVcIj5cbiAgICAgICAge29wZW5GaWx0ZXIgJiYgKFxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI9e3NldE9wZW5GaWx0ZXJ9XG4gICAgICAgICAgICBvcGVuRmlsdGVyPXtvcGVuRmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyQXJyYXk9e3NldEZpbHRlckFycmF5fVxuICAgICAgICAgICAgY2FyZERhdGE9e2NhcmREYXRhfVxuICAgICAgICAgICAgc2V0Q2FyZERhdGE9e3NldENhcmREYXRhfVxuICAgICAgICAgICAgb3JpZ2luYWxEYXRhPXtvcmlnaW5hbERhdGF9XG4gICAgICAgICAgICBmaWx0ZXJBcnJheT17ZmlsdGVyQXJyYXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpblxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIG9wZW5GaWx0ZXJcbiAgICAgICAgICAgID8gXCJtdC0zMiBmbGV4IGZsZXgtY29sIGdhcC0xMiBzbTpnYXAtNlwiXG4gICAgICAgICAgICA6IFwibXQtMTYgZmxleCBmbGV4LWNvbCBnYXAtMTIgc206Z2FwLTZcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtjYXJkRGF0YSAmJlxuICAgICAgICAgIGNhcmREYXRhLm1hcCgoZWFjaERhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXt2NCgpfVxuICAgICAgICAgICAgICAgIGVhY2hEYXRhPXtlYWNoRGF0YX1cbiAgICAgICAgICAgICAgICBmaWx0ZXJBcnJheT17ZmlsdGVyQXJyYXl9XG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyQXJyYXk9e3NldEZpbHRlckFycmF5fVxuICAgICAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI9e3NldE9wZW5GaWx0ZXJ9XG4gICAgICAgICAgICAgICAgY2FyZERhdGE9e2NhcmREYXRhfVxuICAgICAgICAgICAgICAgIHNldENhcmREYXRhPXtzZXRDYXJkRGF0YX1cbiAgICAgICAgICAgICAgICBvcmlnaW5hbERhdGE9e29yaWdpbmFsRGF0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidjQiLCJDYXJkIiwiRmlsdGVyIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwib3JpZ2luYWxEYXRhIiwic2V0T3JpZ2luYWxEYXRhIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwiZmlsdGVyQXJyYXkiLCJzZXRGaWx0ZXJBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaGVhZGVyIiwibWFpbiIsIm1hcCIsImVhY2hEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
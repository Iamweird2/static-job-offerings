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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nconsole.log(data);\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), _$data = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_$data), cardData = ref2[0], setCardData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!_$data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, this);\n    // useEffect(() => {\n    //   fetch(\"http://localhost:8000/resource\")\n    //     .then((res) => {\n    //       return res.json();\n    //     })\n    //     .then((data) => (setCardData(data), setOriginalData(data)));\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto bg-bodyColor pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"static-job-listings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"w-full h-[156px] bg-headerColor bg-mobile-header sm:bg-desktop-header bg-no-repeat relative\",\n                children: openFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    setOpenFilter: setOpenFilter,\n                    openFilter: openFilter,\n                    setFilterArray: setFilterArray,\n                    cardData: cardData,\n                    setCardData: setCardData,\n                    originalData: originalData,\n                    filterArray: filterArray\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: openFilter ? \"mt-32 flex flex-col gap-12 sm:gap-6\" : \"mt-16 flex flex-col gap-12 sm:gap-6\",\n                children: cardData && cardData.map(function(eachData) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        eachData: eachData,\n                        filterArray: filterArray,\n                        setFilterArray: setFilterArray,\n                        setOpenFilter: setOpenFilter,\n                        cardData: cardData,\n                        setCardData: setCardData,\n                        originalData: originalData\n                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(), false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1A3GsijRNhvOeRi69+2CCYoXEw4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUhrQyxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCZCxXQUFXLEVBQUVBLFdBQVc7d0JBQ3hCQyxjQUFjLEVBQUVBLGNBQWM7d0JBQzlCRixhQUFhLEVBQUVBLGFBQWE7d0JBQzVCSCxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCQyxXQUFXLEVBQUVBLFdBQVc7d0JBQ3hCSCxZQUFZLEVBQUVBLFlBQVk7dUJBUHJCZix3Q0FBRSxFQUFFOzs7OzZCQVFULENBQ0Y7Z0JBQ0osQ0FBQyxDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0gsQ0FDTjtBQUNKLENBQUM7R0FqRXVCYSxJQUFJOztRQUNGViwyQ0FBTTs7O0FBRFJVLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbi8vV3JpdGUgYSBmZXRjaGVyIGZ1bmN0aW9uIHRvIHdyYXAgdGhlIG5hdGl2ZSBmZXRjaCBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSByZXN1bHQgb2YgYSBjYWxsIHRvIHVybCBpbiBqc29uIGZvcm1hdFxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmNvbnNvbGUubG9nKGRhdGEpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9zdGF0aWNkYXRhXCIsIGZldGNoZXIpO1xuICBjb25zdCBbb3JpZ2luYWxEYXRhLCBzZXRPcmlnaW5hbERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgY29uc3QgW29wZW5GaWx0ZXIsIHNldE9wZW5GaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsdGVyQXJyYXksIHNldEZpbHRlckFycmF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgLy9IYW5kbGUgdGhlIGVycm9yIHN0YXRlXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gIC8vSGFuZGxlIHRoZSBsb2FkaW5nIHN0YXRlXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Jlc291cmNlXCIpXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XG4gIC8vICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAvLyAgICAgfSlcbiAgLy8gICAgIC50aGVuKChkYXRhKSA9PiAoc2V0Q2FyZERhdGEoZGF0YSksIHNldE9yaWdpbmFsRGF0YShkYXRhKSkpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctYm9keUNvbG9yIHBiLTEwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnN0YXRpYy1qb2ItbGlzdGluZ3M8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzE1NnB4XSBiZy1oZWFkZXJDb2xvciAgYmctbW9iaWxlLWhlYWRlciBzbTpiZy1kZXNrdG9wLWhlYWRlciBiZy1uby1yZXBlYXQgcmVsYXRpdmVcIj5cbiAgICAgICAge29wZW5GaWx0ZXIgJiYgKFxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI9e3NldE9wZW5GaWx0ZXJ9XG4gICAgICAgICAgICBvcGVuRmlsdGVyPXtvcGVuRmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyQXJyYXk9e3NldEZpbHRlckFycmF5fVxuICAgICAgICAgICAgY2FyZERhdGE9e2NhcmREYXRhfVxuICAgICAgICAgICAgc2V0Q2FyZERhdGE9e3NldENhcmREYXRhfVxuICAgICAgICAgICAgb3JpZ2luYWxEYXRhPXtvcmlnaW5hbERhdGF9XG4gICAgICAgICAgICBmaWx0ZXJBcnJheT17ZmlsdGVyQXJyYXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpblxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIG9wZW5GaWx0ZXJcbiAgICAgICAgICAgID8gXCJtdC0zMiBmbGV4IGZsZXgtY29sIGdhcC0xMiBzbTpnYXAtNlwiXG4gICAgICAgICAgICA6IFwibXQtMTYgZmxleCBmbGV4LWNvbCBnYXAtMTIgc206Z2FwLTZcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHtjYXJkRGF0YSAmJlxuICAgICAgICAgIGNhcmREYXRhLm1hcCgoZWFjaERhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXt2NCgpfVxuICAgICAgICAgICAgICAgIGVhY2hEYXRhPXtlYWNoRGF0YX1cbiAgICAgICAgICAgICAgICBmaWx0ZXJBcnJheT17ZmlsdGVyQXJyYXl9XG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyQXJyYXk9e3NldEZpbHRlckFycmF5fVxuICAgICAgICAgICAgICAgIHNldE9wZW5GaWx0ZXI9e3NldE9wZW5GaWx0ZXJ9XG4gICAgICAgICAgICAgICAgY2FyZERhdGE9e2NhcmREYXRhfVxuICAgICAgICAgICAgICAgIHNldENhcmREYXRhPXtzZXRDYXJkRGF0YX1cbiAgICAgICAgICAgICAgICBvcmlnaW5hbERhdGE9e29yaWdpbmFsRGF0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidjQiLCJDYXJkIiwiRmlsdGVyIiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkhvbWUiLCJlcnJvciIsIm9yaWdpbmFsRGF0YSIsInNldE9yaWdpbmFsRGF0YSIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJvcGVuRmlsdGVyIiwic2V0T3BlbkZpbHRlciIsImZpbHRlckFycmF5Iiwic2V0RmlsdGVyQXJyYXkiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaGVhZGVyIiwibWFpbiIsIm1hcCIsImVhY2hEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
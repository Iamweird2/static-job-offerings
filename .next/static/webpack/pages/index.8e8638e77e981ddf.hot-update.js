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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Home() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), data = ref.data, error = ref.error;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), cardData = ref2[0], setCardData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 21\n    }, this);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(JSON.parse(data));\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"KQatDH429mqV5KgF9QqN1mi4BaY=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ2U7QUFDbEI7QUFDWTtBQUNJO0FBQ2pCO0FBRXpCLGtIQUFrSDtBQUNsSCxJQUFNTyxPQUFPLEdBQUcsU0FBQ0MsR0FBRztXQUFLQyxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBQ0MsR0FBRztlQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtLQUFBLENBQUM7Q0FBQTtBQUM5QyxTQUFTQyxJQUFJLEdBQUc7O0lBQzdCLElBQXdCUCxHQUFrQyxHQUFsQ0EsK0NBQU0sQ0FBQyxpQkFBaUIsRUFBRUMsT0FBTyxDQUFDLEVBQWxETyxJQUFJLEdBQVlSLEdBQWtDLENBQWxEUSxJQUFJLEVBQUVDLEtBQUssR0FBS1QsR0FBa0MsQ0FBNUNTLEtBQUs7SUFDbkIsSUFBd0NiLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUEzQ2MsWUFBWSxHQUFxQmQsSUFBVSxHQUEvQixFQUFFZSxlQUFlLEdBQUlmLElBQVUsR0FBZDtJQUNwQyxJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DZ0IsUUFBUSxHQUFpQmhCLElBQVUsR0FBM0IsRUFBRWlCLFdBQVcsR0FBSWpCLElBQVUsR0FBZDtJQUM1QixJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q2tCLFVBQVUsR0FBbUJsQixJQUFlLEdBQWxDLEVBQUVtQixhQUFhLEdBQUluQixJQUFlLEdBQW5CO0lBQ2hDLElBQXNDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDb0IsV0FBVyxHQUFvQnBCLElBQVksR0FBaEMsRUFBRXFCLGNBQWMsR0FBSXJCLElBQVksR0FBaEI7SUFDbEMsd0JBQXdCO0lBQ3hCLElBQUlhLEtBQUssRUFBRSxxQkFBTyw4REFBQ1MsS0FBRztrQkFBQyxnQkFBYzs7Ozs7WUFBTSxDQUFDO0lBQzVDLDBCQUEwQjtJQUMxQixJQUFJLENBQUNWLElBQUksRUFBRSxxQkFBTyw4REFBQ1UsS0FBRztrQkFBQyxZQUFVOzs7OztZQUFNLENBQUM7SUFFeEN2QixnREFBUyxDQUFDLFdBQU07UUFDZHdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ2QsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUU7UUFBQ0EsSUFBSTtLQUFDLENBQUMsQ0FBQztJQUNYLHFCQUNFLDhEQUFDVSxLQUFHO2tCQUFFVixJQUFJOzs7OztZQUFPLENBNkNqQjtBQUNKLENBQUM7R0E3RHVCRCxJQUFJOztRQUNGUCwyQ0FBTTs7O0FBRFJPLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbi8vV3JpdGUgYSBmZXRjaGVyIGZ1bmN0aW9uIHRvIHdyYXAgdGhlIG5hdGl2ZSBmZXRjaCBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSByZXN1bHQgb2YgYSBjYWxsIHRvIHVybCBpbiBqc29uIGZvcm1hdFxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvc3RhdGljZGF0YVwiLCBmZXRjaGVyKTtcbiAgY29uc3QgW29yaWdpbmFsRGF0YSwgc2V0T3JpZ2luYWxEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjYXJkRGF0YSwgc2V0Q2FyZERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW29wZW5GaWx0ZXIsIHNldE9wZW5GaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmlsdGVyQXJyYXksIHNldEZpbHRlckFycmF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgLy9IYW5kbGUgdGhlIGVycm9yIHN0YXRlXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gIC8vSGFuZGxlIHRoZSBsb2FkaW5nIHN0YXRlXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YSkpO1xuICB9LCBbZGF0YV0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+e2RhdGF9PC9kaXY+XG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLWJvZHlDb2xvciBwYi0xMFwiPlxuICAgIC8vICAgPEhlYWQ+XG4gICAgLy8gICAgIDx0aXRsZT5zdGF0aWMtam9iLWxpc3RpbmdzPC90aXRsZT5cbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgIC8vICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgLy8gICA8L0hlYWQ+XG4gICAgLy8gICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBoLVsxNTZweF0gYmctaGVhZGVyQ29sb3IgIGJnLW1vYmlsZS1oZWFkZXIgc206YmctZGVza3RvcC1oZWFkZXIgYmctbm8tcmVwZWF0IHJlbGF0aXZlXCI+XG4gICAgLy8gICAgIHtvcGVuRmlsdGVyICYmIChcbiAgICAvLyAgICAgICA8RmlsdGVyXG4gICAgLy8gICAgICAgICBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfVxuICAgIC8vICAgICAgICAgb3BlbkZpbHRlcj17b3BlbkZpbHRlcn1cbiAgICAvLyAgICAgICAgIHNldEZpbHRlckFycmF5PXtzZXRGaWx0ZXJBcnJheX1cbiAgICAvLyAgICAgICAgIGNhcmREYXRhPXtjYXJkRGF0YX1cbiAgICAvLyAgICAgICAgIHNldENhcmREYXRhPXtzZXRDYXJkRGF0YX1cbiAgICAvLyAgICAgICAgIG9yaWdpbmFsRGF0YT17b3JpZ2luYWxEYXRhfVxuICAgIC8vICAgICAgICAgZmlsdGVyQXJyYXk9e2ZpbHRlckFycmF5fVxuICAgIC8vICAgICAgIC8+XG4gICAgLy8gICAgICl9XG4gICAgLy8gICA8L2hlYWRlcj5cblxuICAgIC8vICAgPG1haW5cbiAgICAvLyAgICAgY2xhc3NOYW1lPXtcbiAgICAvLyAgICAgICBvcGVuRmlsdGVyXG4gICAgLy8gICAgICAgICA/IFwibXQtMzIgZmxleCBmbGV4LWNvbCBnYXAtMTIgc206Z2FwLTZcIlxuICAgIC8vICAgICAgICAgOiBcIm10LTE2IGZsZXggZmxleC1jb2wgZ2FwLTEyIHNtOmdhcC02XCJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgPlxuICAgIC8vICAgICB7Y2FyZERhdGEgJiZcbiAgICAvLyAgICAgICBjYXJkRGF0YS5tYXAoKGVhY2hEYXRhKSA9PiB7XG4gICAgLy8gICAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICA8Q2FyZFxuICAgIC8vICAgICAgICAgICAgIGtleT17djQoKX1cbiAgICAvLyAgICAgICAgICAgICBlYWNoRGF0YT17ZWFjaERhdGF9XG4gICAgLy8gICAgICAgICAgICAgZmlsdGVyQXJyYXk9e2ZpbHRlckFycmF5fVxuICAgIC8vICAgICAgICAgICAgIHNldEZpbHRlckFycmF5PXtzZXRGaWx0ZXJBcnJheX1cbiAgICAvLyAgICAgICAgICAgICBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfVxuICAgIC8vICAgICAgICAgICAgIGNhcmREYXRhPXtjYXJkRGF0YX1cbiAgICAvLyAgICAgICAgICAgICBzZXRDYXJkRGF0YT17c2V0Q2FyZERhdGF9XG4gICAgLy8gICAgICAgICAgICAgb3JpZ2luYWxEYXRhPXtvcmlnaW5hbERhdGF9XG4gICAgLy8gICAgICAgICAgIC8+XG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH0pfVxuICAgIC8vICAgPC9tYWluPlxuICAgIC8vIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInY0IiwiQ2FyZCIsIkZpbHRlciIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsImRhdGEiLCJlcnJvciIsIm9yaWdpbmFsRGF0YSIsInNldE9yaWdpbmFsRGF0YSIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJvcGVuRmlsdGVyIiwic2V0T3BlbkZpbHRlciIsImZpbHRlckFycmF5Iiwic2V0RmlsdGVyQXJyYXkiLCJkaXYiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
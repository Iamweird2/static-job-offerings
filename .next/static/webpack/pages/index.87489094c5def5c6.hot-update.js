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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_type_of.mjs */ \"./node_modules/@swc/helpers/src/_type_of.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Home() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), data = ref.data, error = ref.error;\n    console.log((0,_swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(JSON.parse(data)));\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), cardData = ref2[0], setCardData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, this);\n    // useEffect(() => {\n    //   fetch(\"http://localhost:8000/resource\")\n    //     .then((res) => {\n    //       return res.json();\n    //     })\n    //     .then((data) => (setCardData(data), setOriginalData(data)));\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OmJ0Bta+wSk4E8AWKDtqZAllSqI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNkI7QUFDZTtBQUNsQjtBQUNZO0FBQ0k7QUFDakI7QUFFekIsa0hBQWtIO0FBQ2xILElBQU1PLE9BQU8sR0FBRyxTQUFDQyxHQUFHO1dBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQztDQUFBO0FBQzlDLFNBQVNDLElBQUksR0FBRzs7SUFDN0IsSUFBd0JQLEdBQWtDLEdBQWxDQSwrQ0FBTSxDQUFDLGlCQUFpQixFQUFFQyxPQUFPLENBQUMsRUFBbERPLElBQUksR0FBWVIsR0FBa0MsQ0FBbERRLElBQUksRUFBRUMsS0FBSyxHQUFLVCxHQUFrQyxDQUE1Q1MsS0FBSztJQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0VBQXVCLENBQWhCQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNyQyxJQUF3Q1osSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNDa0IsWUFBWSxHQUFxQmxCLElBQVUsR0FBL0IsRUFBRW1CLGVBQWUsR0FBSW5CLElBQVUsR0FBZDtJQUNwQyxJQUFnQ0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5Db0IsUUFBUSxHQUFpQnBCLElBQVUsR0FBM0IsRUFBRXFCLFdBQVcsR0FBSXJCLElBQVUsR0FBZDtJQUM1QixJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q3NCLFVBQVUsR0FBbUJ0QixJQUFlLEdBQWxDLEVBQUV1QixhQUFhLEdBQUl2QixJQUFlLEdBQW5CO0lBQ2hDLElBQXNDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNDd0IsV0FBVyxHQUFvQnhCLElBQVksR0FBaEMsRUFBRXlCLGNBQWMsR0FBSXpCLElBQVksR0FBaEI7SUFDbEMsd0JBQXdCO0lBQ3hCLElBQUlhLEtBQUssRUFBRSxxQkFBTyw4REFBQ2EsS0FBRztrQkFBQyxnQkFBYzs7Ozs7WUFBTSxDQUFDO0lBQzVDLDBCQUEwQjtJQUMxQixJQUFJLENBQUNkLElBQUksRUFBRSxxQkFBTyw4REFBQ2MsS0FBRztrQkFBQyxZQUFVOzs7OztZQUFNLENBQUM7SUFFeEMsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxtRUFBbUU7SUFDbkUsVUFBVTtJQUNWLHFCQUNFLDhEQUFDQSxLQUFHO2tCQUFFZCxJQUFJOzs7OztZQUFPLENBNkNqQjtBQUNKLENBQUM7R0FsRXVCRCxJQUFJOztRQUNGUCwyQ0FBTTs7O0FBRFJPLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0ZpbHRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbi8vV3JpdGUgYSBmZXRjaGVyIGZ1bmN0aW9uIHRvIHdyYXAgdGhlIG5hdGl2ZSBmZXRjaCBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSByZXN1bHQgb2YgYSBjYWxsIHRvIHVybCBpbiBqc29uIGZvcm1hdFxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvc3RhdGljZGF0YVwiLCBmZXRjaGVyKTtcbiAgY29uc29sZS5sb2codHlwZW9mIEpTT04ucGFyc2UoZGF0YSkpO1xuICBjb25zdCBbb3JpZ2luYWxEYXRhLCBzZXRPcmlnaW5hbERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbb3BlbkZpbHRlciwgc2V0T3BlbkZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWx0ZXJBcnJheSwgc2V0RmlsdGVyQXJyYXldID0gdXNlU3RhdGUoW10pO1xuICAvL0hhbmRsZSB0aGUgZXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgLy9IYW5kbGUgdGhlIGxvYWRpbmcgc3RhdGVcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvcmVzb3VyY2VcIilcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIC8vICAgICB9KVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IChzZXRDYXJkRGF0YShkYXRhKSwgc2V0T3JpZ2luYWxEYXRhKGRhdGEpKSk7XG4gIC8vIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PntkYXRhfTwvZGl2PlxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBiZy1ib2R5Q29sb3IgcGItMTBcIj5cbiAgICAvLyAgIDxIZWFkPlxuICAgIC8vICAgICA8dGl0bGU+c3RhdGljLWpvYi1saXN0aW5nczwvdGl0bGU+XG4gICAgLy8gICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAvLyAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIC8vICAgPC9IZWFkPlxuICAgIC8vICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bMTU2cHhdIGJnLWhlYWRlckNvbG9yICBiZy1tb2JpbGUtaGVhZGVyIHNtOmJnLWRlc2t0b3AtaGVhZGVyIGJnLW5vLXJlcGVhdCByZWxhdGl2ZVwiPlxuICAgIC8vICAgICB7b3BlbkZpbHRlciAmJiAoXG4gICAgLy8gICAgICAgPEZpbHRlclxuICAgIC8vICAgICAgICAgc2V0T3BlbkZpbHRlcj17c2V0T3BlbkZpbHRlcn1cbiAgICAvLyAgICAgICAgIG9wZW5GaWx0ZXI9e29wZW5GaWx0ZXJ9XG4gICAgLy8gICAgICAgICBzZXRGaWx0ZXJBcnJheT17c2V0RmlsdGVyQXJyYXl9XG4gICAgLy8gICAgICAgICBjYXJkRGF0YT17Y2FyZERhdGF9XG4gICAgLy8gICAgICAgICBzZXRDYXJkRGF0YT17c2V0Q2FyZERhdGF9XG4gICAgLy8gICAgICAgICBvcmlnaW5hbERhdGE9e29yaWdpbmFsRGF0YX1cbiAgICAvLyAgICAgICAgIGZpbHRlckFycmF5PXtmaWx0ZXJBcnJheX1cbiAgICAvLyAgICAgICAvPlxuICAgIC8vICAgICApfVxuICAgIC8vICAgPC9oZWFkZXI+XG5cbiAgICAvLyAgIDxtYWluXG4gICAgLy8gICAgIGNsYXNzTmFtZT17XG4gICAgLy8gICAgICAgb3BlbkZpbHRlclxuICAgIC8vICAgICAgICAgPyBcIm10LTMyIGZsZXggZmxleC1jb2wgZ2FwLTEyIHNtOmdhcC02XCJcbiAgICAvLyAgICAgICAgIDogXCJtdC0xNiBmbGV4IGZsZXgtY29sIGdhcC0xMiBzbTpnYXAtNlwiXG4gICAgLy8gICAgIH1cbiAgICAvLyAgID5cbiAgICAvLyAgICAge2NhcmREYXRhICYmXG4gICAgLy8gICAgICAgY2FyZERhdGEubWFwKChlYWNoRGF0YSkgPT4ge1xuICAgIC8vICAgICAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICAgICAgPENhcmRcbiAgICAvLyAgICAgICAgICAgICBrZXk9e3Y0KCl9XG4gICAgLy8gICAgICAgICAgICAgZWFjaERhdGE9e2VhY2hEYXRhfVxuICAgIC8vICAgICAgICAgICAgIGZpbHRlckFycmF5PXtmaWx0ZXJBcnJheX1cbiAgICAvLyAgICAgICAgICAgICBzZXRGaWx0ZXJBcnJheT17c2V0RmlsdGVyQXJyYXl9XG4gICAgLy8gICAgICAgICAgICAgc2V0T3BlbkZpbHRlcj17c2V0T3BlbkZpbHRlcn1cbiAgICAvLyAgICAgICAgICAgICBjYXJkRGF0YT17Y2FyZERhdGF9XG4gICAgLy8gICAgICAgICAgICAgc2V0Q2FyZERhdGE9e3NldENhcmREYXRhfVxuICAgIC8vICAgICAgICAgICAgIG9yaWdpbmFsRGF0YT17b3JpZ2luYWxEYXRhfVxuICAgIC8vICAgICAgICAgICAvPlxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICB9KX1cbiAgICAvLyAgIDwvbWFpbj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2NCIsIkNhcmQiLCJGaWx0ZXIiLCJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkhvbWUiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwib3JpZ2luYWxEYXRhIiwic2V0T3JpZ2luYWxEYXRhIiwiY2FyZERhdGEiLCJzZXRDYXJkRGF0YSIsIm9wZW5GaWx0ZXIiLCJzZXRPcGVuRmlsdGVyIiwiZmlsdGVyQXJyYXkiLCJzZXRGaWx0ZXJBcnJheSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
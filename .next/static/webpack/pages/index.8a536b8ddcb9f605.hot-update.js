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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_type_of.mjs */ \"./node_modules/@swc/helpers/src/_type_of.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nvar fetcher = function(url) {\n    return fetch(url).then(function(res) {\n        return res.json();\n    });\n};\nfunction Home() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/staticdata\", fetcher), datas = ref.datas, error = ref.error;\n    console.log(datas);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), originalData = ref1[0], setOriginalData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data), cardData = ref2[0], setCardData = ref2[1];\n    console.log(cardData);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), openFilter = ref3[0], setOpenFilter = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), filterArray = ref4[0], setFilterArray = ref4[1];\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 21\n    }, this);\n    // useEffect(() => {\n    //   fetch(\"http://localhost:8000/resource\")\n    //     .then((res) => {\n    //       return res.json();\n    //     })\n    //     .then((data) => (setCardData(data), setOriginalData(data)));\n    // }, []);\n    console.log((0,_swc_helpers_src_type_of_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(JSON.parse(data)));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\static-job-listings\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"GD7bSXjhFrbZUVcGuJyT4WnaNfg=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBNkI7QUFDZTtBQUNsQjtBQUNZO0FBQ0k7QUFDakI7QUFFekIsa0hBQWtIO0FBQ2xILElBQU1PLE9BQU8sR0FBRyxTQUFDQyxHQUFHO1dBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQyxTQUFDQyxHQUFHO2VBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQztDQUFBO0FBQzlDLFNBQVNDLElBQUksR0FBRzs7SUFDN0IsSUFBeUJQLEdBQWtDLEdBQWxDQSwrQ0FBTSxDQUFDLGlCQUFpQixFQUFFQyxPQUFPLENBQUMsRUFBbkRPLEtBQUssR0FBWVIsR0FBa0MsQ0FBbkRRLEtBQUssRUFBRUMsS0FBSyxHQUFLVCxHQUFrQyxDQUE1Q1MsS0FBSztJQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBQ25CLElBQXdDWixJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0NnQixZQUFZLEdBQXFCaEIsSUFBVSxHQUEvQixFQUFFaUIsZUFBZSxHQUFJakIsSUFBVSxHQUFkO0lBQ3BDLElBQWdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUNrQixJQUFJLENBQUMsRUFBdkNDLFFBQVEsR0FBaUJuQixJQUFjLEdBQS9CLEVBQUVvQixXQUFXLEdBQUlwQixJQUFjLEdBQWxCO0lBQzVCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDdEIsSUFBb0NuQixJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTVDcUIsVUFBVSxHQUFtQnJCLElBQWUsR0FBbEMsRUFBRXNCLGFBQWEsR0FBSXRCLElBQWUsR0FBbkI7SUFDaEMsSUFBc0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0N1QixXQUFXLEdBQW9CdkIsSUFBWSxHQUFoQyxFQUFFd0IsY0FBYyxHQUFJeEIsSUFBWSxHQUFoQjtJQUNsQyx3QkFBd0I7SUFDeEIsSUFBSWEsS0FBSyxFQUFFLHFCQUFPLDhEQUFDWSxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNLENBQUM7SUFDNUMsMEJBQTBCO0lBQzFCLElBQUksQ0FBQ1AsSUFBSSxFQUFFLHFCQUFPLDhEQUFDTyxLQUFHO2tCQUFDLFlBQVU7Ozs7O1lBQU0sQ0FBQztJQUV4QyxvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULG1FQUFtRTtJQUNuRSxVQUFVO0lBQ1ZYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdFQUF1QixDQUFoQlcsSUFBSSxDQUFDQyxLQUFLLENBQUNULElBQUksQ0FBQyxFQUFDLENBQUM7SUFDckMscUJBQ0UsOERBQUNPLEtBQUc7a0JBQUVQLElBQUk7Ozs7O1lBQU8sQ0E2Q2pCO0FBQ0osQ0FBQztHQXBFdUJQLElBQUk7O1FBQ0RQLDJDQUFNOzs7QUFEVE8sS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsdGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuLy9Xcml0ZSBhIGZldGNoZXIgZnVuY3Rpb24gdG8gd3JhcCB0aGUgbmF0aXZlIGZldGNoIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIHJlc3VsdCBvZiBhIGNhbGwgdG8gdXJsIGluIGpzb24gZm9ybWF0XG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhcywgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvc3RhdGljZGF0YVwiLCBmZXRjaGVyKTtcbiAgY29uc29sZS5sb2coZGF0YXMpO1xuICBjb25zdCBbb3JpZ2luYWxEYXRhLCBzZXRPcmlnaW5hbERhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgY29uc29sZS5sb2coY2FyZERhdGEpO1xuICBjb25zdCBbb3BlbkZpbHRlciwgc2V0T3BlbkZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWx0ZXJBcnJheSwgc2V0RmlsdGVyQXJyYXldID0gdXNlU3RhdGUoW10pO1xuICAvL0hhbmRsZSB0aGUgZXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgLy9IYW5kbGUgdGhlIGxvYWRpbmcgc3RhdGVcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvcmVzb3VyY2VcIilcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gIC8vICAgICB9KVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IChzZXRDYXJkRGF0YShkYXRhKSwgc2V0T3JpZ2luYWxEYXRhKGRhdGEpKSk7XG4gIC8vIH0sIFtdKTtcbiAgY29uc29sZS5sb2codHlwZW9mIEpTT04ucGFyc2UoZGF0YSkpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+e2RhdGF9PC9kaXY+XG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLWJvZHlDb2xvciBwYi0xMFwiPlxuICAgIC8vICAgPEhlYWQ+XG4gICAgLy8gICAgIDx0aXRsZT5zdGF0aWMtam9iLWxpc3RpbmdzPC90aXRsZT5cbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgIC8vICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgLy8gICA8L0hlYWQ+XG4gICAgLy8gICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBoLVsxNTZweF0gYmctaGVhZGVyQ29sb3IgIGJnLW1vYmlsZS1oZWFkZXIgc206YmctZGVza3RvcC1oZWFkZXIgYmctbm8tcmVwZWF0IHJlbGF0aXZlXCI+XG4gICAgLy8gICAgIHtvcGVuRmlsdGVyICYmIChcbiAgICAvLyAgICAgICA8RmlsdGVyXG4gICAgLy8gICAgICAgICBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfVxuICAgIC8vICAgICAgICAgb3BlbkZpbHRlcj17b3BlbkZpbHRlcn1cbiAgICAvLyAgICAgICAgIHNldEZpbHRlckFycmF5PXtzZXRGaWx0ZXJBcnJheX1cbiAgICAvLyAgICAgICAgIGNhcmREYXRhPXtjYXJkRGF0YX1cbiAgICAvLyAgICAgICAgIHNldENhcmREYXRhPXtzZXRDYXJkRGF0YX1cbiAgICAvLyAgICAgICAgIG9yaWdpbmFsRGF0YT17b3JpZ2luYWxEYXRhfVxuICAgIC8vICAgICAgICAgZmlsdGVyQXJyYXk9e2ZpbHRlckFycmF5fVxuICAgIC8vICAgICAgIC8+XG4gICAgLy8gICAgICl9XG4gICAgLy8gICA8L2hlYWRlcj5cblxuICAgIC8vICAgPG1haW5cbiAgICAvLyAgICAgY2xhc3NOYW1lPXtcbiAgICAvLyAgICAgICBvcGVuRmlsdGVyXG4gICAgLy8gICAgICAgICA/IFwibXQtMzIgZmxleCBmbGV4LWNvbCBnYXAtMTIgc206Z2FwLTZcIlxuICAgIC8vICAgICAgICAgOiBcIm10LTE2IGZsZXggZmxleC1jb2wgZ2FwLTEyIHNtOmdhcC02XCJcbiAgICAvLyAgICAgfVxuICAgIC8vICAgPlxuICAgIC8vICAgICB7Y2FyZERhdGEgJiZcbiAgICAvLyAgICAgICBjYXJkRGF0YS5tYXAoKGVhY2hEYXRhKSA9PiB7XG4gICAgLy8gICAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICA8Q2FyZFxuICAgIC8vICAgICAgICAgICAgIGtleT17djQoKX1cbiAgICAvLyAgICAgICAgICAgICBlYWNoRGF0YT17ZWFjaERhdGF9XG4gICAgLy8gICAgICAgICAgICAgZmlsdGVyQXJyYXk9e2ZpbHRlckFycmF5fVxuICAgIC8vICAgICAgICAgICAgIHNldEZpbHRlckFycmF5PXtzZXRGaWx0ZXJBcnJheX1cbiAgICAvLyAgICAgICAgICAgICBzZXRPcGVuRmlsdGVyPXtzZXRPcGVuRmlsdGVyfVxuICAgIC8vICAgICAgICAgICAgIGNhcmREYXRhPXtjYXJkRGF0YX1cbiAgICAvLyAgICAgICAgICAgICBzZXRDYXJkRGF0YT17c2V0Q2FyZERhdGF9XG4gICAgLy8gICAgICAgICAgICAgb3JpZ2luYWxEYXRhPXtvcmlnaW5hbERhdGF9XG4gICAgLy8gICAgICAgICAgIC8+XG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICAgIH0pfVxuICAgIC8vICAgPC9tYWluPlxuICAgIC8vIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInY0IiwiQ2FyZCIsIkZpbHRlciIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsImRhdGFzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib3JpZ2luYWxEYXRhIiwic2V0T3JpZ2luYWxEYXRhIiwiZGF0YSIsImNhcmREYXRhIiwic2V0Q2FyZERhdGEiLCJvcGVuRmlsdGVyIiwic2V0T3BlbkZpbHRlciIsImZpbHRlckFycmF5Iiwic2V0RmlsdGVyQXJyYXkiLCJkaXYiLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
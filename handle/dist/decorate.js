/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./decorate.js":
/*!*********************!*\
  !*** ./decorate.js ***!
  \*********************/
/***/ (() => {

eval("var _class;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction after1(target, key, descriptor) {\n  console.log(\"after1\", descriptor.value);\n  var fn = descriptor.value;\n  return _objectSpread(_objectSpread({}, descriptor), {}, {\n    value: function value() {\n      console.log(1);\n      var result = fn.apply(this, arguments);\n      console.log('after1');\n      return result;\n    }\n  });\n}\n\nfunction after(target, key, descriptor) {\n  console.log(\"after\", descriptor.value);\n  var fn = descriptor.value;\n  return _objectSpread(_objectSpread({}, descriptor), {}, {\n    value: function value() {\n      console.log(2);\n      var result = fn.apply(this, arguments);\n      console.log('after');\n      return result;\n    }\n  });\n}\n\nfunction before(target, key, descriptor) {\n  console.log(\"before\", descriptor.value);\n  var fn = descriptor.value;\n  return _objectSpread(_objectSpread({}, descriptor), {}, {\n    value: function value() {\n      console.log(3);\n      var result = fn.apply(this, arguments);\n      console.log('before');\n      return result;\n    }\n  });\n}\n\nfunction after2(target, key, descriptor) {\n  var fn = descriptor.value;\n  console.log(arguments);\n  console.log('after2', descriptor.value);\n  return _objectSpread(_objectSpread({}, descriptor), {}, {\n    value: function value() {\n      console.log(4);\n      console.log(this);\n      var result = fn.apply(this, arguments);\n      console.log('after2');\n      return result;\n    }\n  });\n}\n\nvar Test = (_class = /*#__PURE__*/function () {\n  function Test() {\n    _classCallCheck(this, Test);\n  }\n\n  _createClass(Test, [{\n    key: \"func\",\n    value: function func() {\n      console.log('func');\n    }\n  }]);\n\n  return Test;\n}(), (_applyDecoratedDescriptor(_class.prototype, \"func\", [after1, after, before, after2], Object.getOwnPropertyDescriptor(_class.prototype, \"func\"), _class.prototype)), _class);\nvar test = new Test();\ntest.func();\n\n//# sourceURL=webpack://a/./decorate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./decorate.js"]();
/******/ 	
/******/ })()
;
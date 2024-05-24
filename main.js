/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/restaurant_image.jpg */ \"./src/images/restaurant_image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-size: 1em;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100vh;\n  background-color: #fff7ed;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #3e362e;\n  color: white;\n}\n\nheader {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.right-header {\n  display: flex;\n  align-items: center;\n}\n\n#home,\n#menu,\n#contact {\n  font-size: 1.25rem;\n  padding: 5px 10px;\n  border: none;\n  background-color: #3e362e;\n  color: white;\n}\n\n#home:hover,\n#menu:hover,\n#contact:hover {\n  text-decoration: underline white;\n  cursor: pointer;\n}\n\n#name {\n  font-size: 2.5rem;\n  text-align: center;\n\n  font-family: \"Dancing Script\", cursive;\n}\n\n#hours {\n  font-size: 1rem;\n  font-weight: bold;\n  font-family: Arial, sans-serif;\n}\n\n#order-online {\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  background-color: transparent;\n  color: white;\n  border: 2px solid white;\n  border-radius: 5px;\n}\n\n.active {\n  text-decoration: underline white;\n}\n\n/*HOME PAGE*/\n\n.home-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n\n  font-family: Arial, sans-serif;\n  font-weight: bold;\n}\n\n.tag-container {\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 2.5rem;\n  color: white;\n}\n\n.address {\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-size: 1rem;\n  text-align: center;\n}\n\n/* MENU PAGE */\n\n.menu {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.entree,\n.app,\n.drinks,\n.hard {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 360px;\n  color: #3e362e;\n}\n\n#entree-title,\n#app-title,\n#drink-title,\n#hard-title {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.entree-items-container,\n.app-items-container,\n.drink-items-container,\n.hard-items-container {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.25rem;\n}\n\n/* CONTACT PAGE */\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  font-family: Arial, sans-serif;\n  height: 75vh;\n}\n\n#contact-title {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\ninput,\ntextarea {\n  font-size: 1.5rem;\n  padding: 5px 10px;\n  border-radius: 5px;\n  border: 1px solid #e5e7eb;\n  width: 100%;\n}\n\n#submit-btn {\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding: 10px 15px;\n  color: white;\n  border: none;\n  background-color: #3e362e;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 5px;\n}\n\n#submit-btn:active {\n  background-color: #584d43;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/contact */ \"./src/tabs/contact.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu */ \"./src/tabs/menu.js\");\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst switchTabs = (() => {\n  const homeButton = document.querySelector(\"#home\");\n  homeButton.addEventListener(\"click\", () => {\n    homeButton.classList.add(\"active\");\n    menuButton.classList.remove(\"active\");\n    contactButton.classList.remove(\"active\");\n    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    clearPage();\n  });\n\n  const menuButton = document.querySelector(\"#menu\");\n  menuButton.addEventListener(\"click\", () => {\n    menuButton.classList.add(\"active\");\n    homeButton.classList.remove(\"active\");\n    contactButton.classList.remove(\"active\");\n    (0,_tabs_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    clearPage();\n  });\n\n  const contactButton = document.querySelector(\"#contact\");\n  contactButton.addEventListener(\"click\", () => {\n    contactButton.classList.add(\"active\");\n    homeButton.classList.remove(\"active\");\n    menuButton.classList.remove(\"active\");\n    (0,_tabs_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    clearPage();\n  });\n})();\n\nfunction clearPage() {\n  const content = document.querySelector(\"#content\");\n  const pageContent = document.querySelector(\"#page-content\");\n  if (pageContent) {\n    content.removeChild(pageContent);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tabs_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/home */ \"./src/tabs/home.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nfunction pageLoad() {\n  (0,_tabs_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant_page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nfunction contact() {\n  const pageContent = document.createElement(\"div\");\n  pageContent.setAttribute(\"id\", \"page-content\");\n\n  const contactContainer = document.createElement(\"div\");\n  contactContainer.classList.add(\"contact-container\");\n\n  const title = document.createElement(\"div\");\n  title.setAttribute(\"id\", \"contact-title\");\n  title.textContent = \"Contact Us!\";\n  contactContainer.appendChild(title);\n\n  const form = document.createElement(\"form\");\n  contactContainer.appendChild(form);\n\n  const name = document.createElement(\"input\");\n  name.type = \"text\";\n  name.placeholder = \"Name\";\n  name.minLength = 3;\n  form.appendChild(name);\n\n  const phoneNumber = document.createElement(\"input\");\n  phoneNumber.type = \"tel\";\n  phoneNumber.placeholder = \"Phone Number\";\n  phoneNumber.required = true;\n  form.appendChild(phoneNumber);\n\n  const email = document.createElement(\"input\");\n  email.type = \"email\";\n  email.placeholder = \"Email\";\n  email.required = true;\n  form.appendChild(email);\n\n  const message = document.createElement(\"textarea\");\n  message.placeholder = \"Message\";\n  message.rows = 5;\n  form.appendChild(message);\n\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Submit\";\n  submitButton.setAttribute(\"id\", \"submit-btn\");\n  form.appendChild(submitButton);\n\n  pageContent.appendChild(contactContainer);\n  content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurant_page/./src/tabs/contact.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nfunction homePage() {\n  const pageContent = document.createElement(\"div\");\n  pageContent.setAttribute(\"id\", \"page-content\");\n\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.classList.add(\"home-container\");\n\n  const tagContainer = document.createElement(\"div\");\n  tagContainer.classList.add(\"tag-container\");\n\n  const tag1 = document.createElement(\"div\");\n  tag1.textContent = \"EAT\";\n\n  const tag2 = document.createElement(\"div\");\n  tag2.textContent = \"DRINK\";\n\n  const tag3 = document.createElement(\"div\");\n  tag3.textContent = \"VISIT\";\n\n  tagContainer.appendChild(tag1);\n  tagContainer.appendChild(tag2);\n  tagContainer.appendChild(tag3);\n\n  const address = document.createElement(\"div\");\n  address.classList.add(\"address\");\n  address.textContent = \"123 DEMO ST - SEABROOK, TX - (281)123-4567\";\n\n  homeContainer.appendChild(tagContainer);\n  homeContainer.appendChild(address);\n\n  pageContent.appendChild(homeContainer);\n  content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://restaurant_page/./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nconst entrees = [\n  { item: \"Birria Tacos\", price: 20 },\n  { item: \"Tomato and Basil Pasta\", price: 15 },\n  { item: \"Grilled Salmon\", price: 19 },\n  { item: \"Charbroiled Steak\", price: 20 },\n  { item: \"Steak Sandwich\", price: 25 },\n];\n\nconst appetizers = [\n  { item: \"Chips and Salsa\", price: 5 },\n  { item: \"Jalepeno Poppers\", price: 7 },\n  { item: \"Garlic Bread Bites\", price: 10 },\n];\n\nconst drinks = [\n  { item: \"Soft Drink\", price: 4 },\n  { item: \"Iced Tea\", price: 4 },\n  { item: \"Water\", price: 1 },\n  { item: \"Lemonade\", price: 3 },\n];\n\nconst hardDrinks = [\n  { item: \"Rum Punch\", price: 10 },\n  { item: \"Old Fashioned\", price: 9 },\n  { item: \"Spiked Lemonade\", price: 8 },\n  { item: \"Bloody Mary\", price: 15 },\n  { item: \"Beer\", price: 7 },\n];\n\nfunction menu() {\n  const pageContent = document.createElement(\"div\");\n  pageContent.setAttribute(\"id\", \"page-content\");\n\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  //Entree Section\n\n  const entreeSection = document.createElement(\"div\");\n  entreeSection.classList.add(\"entree\");\n\n  const entreeTitle = document.createElement(\"div\");\n  entreeTitle.setAttribute(\"id\", \"entree-title\");\n  entreeTitle.textContent = \"Entrees\";\n  entreeSection.appendChild(entreeTitle);\n\n  const itemsContainer = document.createElement(\"div\");\n  itemsContainer.classList.add(\"entree-items-container\");\n  entreeSection.appendChild(itemsContainer);\n\n  const entreeItems = document.createElement(\"div\");\n  entreeItems.classList.add(\"entree-items\");\n  itemsContainer.appendChild(entreeItems);\n\n  const entreePrices = document.createElement(\"div\");\n  entreePrices.classList.add(\"entree-prices\");\n  itemsContainer.appendChild(entreePrices);\n\n  const entree = entrees.map((value) => {\n    const itemNames = document.createElement(\"div\");\n    itemNames.textContent = value.item;\n    entreeItems.appendChild(itemNames);\n\n    const itemPrices = document.createElement(\"div\");\n    itemPrices.textContent = `$${value.price}`;\n    entreePrices.appendChild(itemPrices);\n  });\n\n  //Appetizer Section\n\n  const appSection = document.createElement(\"div\");\n  appSection.classList.add(\"app\");\n\n  const appTitle = document.createElement(\"div\");\n  appTitle.setAttribute(\"id\", \"app-title\");\n  appTitle.textContent = \"Appetizers\";\n  appSection.appendChild(appTitle);\n\n  const appitemsContainer = document.createElement(\"div\");\n  appitemsContainer.classList.add(\"app-items-container\");\n  appSection.appendChild(appitemsContainer);\n\n  const appItems = document.createElement(\"div\");\n  appItems.classList.add(\"app-items\");\n  appitemsContainer.appendChild(appItems);\n\n  const appPrices = document.createElement(\"div\");\n  appPrices.classList.add(\"app-prices\");\n  appitemsContainer.appendChild(appPrices);\n\n  const app = appetizers.map((value) => {\n    const itemNames = document.createElement(\"div\");\n    itemNames.textContent = value.item;\n    appItems.appendChild(itemNames);\n\n    const itemPrices = document.createElement(\"div\");\n    itemPrices.textContent = `$${value.price}`;\n    appPrices.appendChild(itemPrices);\n  });\n\n  //Drink Section\n\n  const drinkSection = document.createElement(\"div\");\n  drinkSection.classList.add(\"drinks\");\n\n  const drinkTitle = document.createElement(\"div\");\n  drinkTitle.setAttribute(\"id\", \"drink-title\");\n  drinkTitle.textContent = \"Drinks\";\n  drinkSection.appendChild(drinkTitle);\n\n  const drinkitemsContainer = document.createElement(\"div\");\n  drinkitemsContainer.classList.add(\"drink-items-container\");\n  drinkSection.appendChild(drinkitemsContainer);\n\n  const drinkItems = document.createElement(\"div\");\n  drinkItems.classList.add(\"drink-items\");\n  drinkitemsContainer.appendChild(drinkItems);\n\n  const drinkPrices = document.createElement(\"div\");\n  drinkPrices.classList.add(\"drink-prices\");\n  drinkitemsContainer.appendChild(drinkPrices);\n\n  const drink = drinks.map((value) => {\n    const itemNames = document.createElement(\"div\");\n    itemNames.textContent = value.item;\n    drinkItems.appendChild(itemNames);\n\n    const itemPrices = document.createElement(\"div\");\n    itemPrices.textContent = `$${value.price}`;\n    drinkPrices.appendChild(itemPrices);\n  });\n\n  //Hard Drinks Section\n\n  const hardSection = document.createElement(\"div\");\n  hardSection.classList.add(\"hard\");\n\n  const hardTitle = document.createElement(\"div\");\n  hardTitle.setAttribute(\"id\", \"hard-title\");\n  hardTitle.textContent = \"Hard Drinks\";\n  hardSection.appendChild(hardTitle);\n\n  const harditemsContainer = document.createElement(\"div\");\n  harditemsContainer.classList.add(\"hard-items-container\");\n  hardSection.appendChild(harditemsContainer);\n\n  const hardItems = document.createElement(\"div\");\n  hardItems.classList.add(\"hard-items\");\n  harditemsContainer.appendChild(hardItems);\n\n  const hardPrices = document.createElement(\"div\");\n  hardPrices.classList.add(\"hard-prices\");\n  harditemsContainer.appendChild(hardPrices);\n\n  const hard = hardDrinks.map((value) => {\n    const itemNames = document.createElement(\"div\");\n    itemNames.textContent = value.item;\n    hardItems.appendChild(itemNames);\n\n    const itemPrices = document.createElement(\"div\");\n    itemPrices.textContent = `$${value.price}`;\n    hardPrices.appendChild(itemPrices);\n  });\n\n  menu.appendChild(entreeSection);\n  menu.append(appSection);\n  menu.appendChild(drinkSection);\n  menu.appendChild(hardSection);\n\n  pageContent.appendChild(menu);\n  content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://restaurant_page/./src/tabs/menu.js?");

/***/ }),

/***/ "./src/images/restaurant_image.jpg":
/*!*****************************************!*\
  !*** ./src/images/restaurant_image.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5202d742b400f3050317.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/restaurant_image.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".flex {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#astronaut {\\n  height: 200px;\\n}\\n\\n.menuimg {\\n  height: 150px;\\n}\\n\\n.menuimg2 {\\n  height: 120px;\\n}\\n\\n.burgers {\\n  width: 30%;\\n  margin: 20px, 3%;\\n}\\n*/ .menu {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\nbody {\\n  background: #191828;\\n  color:whitesmoke;\\n  font-weight: 400;\\n  font-size: 1em;\\n  font-family: \\\"Lato\\\", Arial, sans-serif;\\n  margin: 0;\\n  padding: 0;\\n  padding-bottom: 40px;\\n}\\na {\\n  color: #4f4d4d;\\n  text-decoration: none;\\n}\\n\\na:hover,\\na:focus {\\n  color: #000;\\n}\\n\\n*,\\n*:after,\\n*:before {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\na,\\nbutton {\\n  outline: none;\\n}\\n.clearfix:before,\\n.clearfix:after {\\n  content: \\\" \\\";\\n  display: table;\\n}\\n\\n.clearfix:after {\\n  clear: both;\\n}\\n\\n/* To Navigation Style */\\n.cctop {\\n  background: #191828;\\n  width: 100%;\\n  text-transform: uppercase;\\n  font-weight: 700;\\n  font-size: 0.75em;\\n  line-height: 3.2;\\n}\\n\\n.cctop a {\\n  display: inline-block;\\n  padding: 0 1.5em;\\n  text-decoration: none;\\n  letter-spacing: 1px;\\n}\\n\\n.cctop span.right {\\n  float: right;\\n}\\n\\n.cctop span.right a {\\n  display: block;\\n  float: left;\\n}\\n\\n/* Header Style */\\n\\n.ccheader {\\n  margin: 0 auto;\\n  padding: 2em;\\n  text-align: center;\\n}\\n\\n.ccheader h1 {\\n  font-size: 2.625em;\\n  font-weight: 300;\\n  line-height: 1.3;\\n  margin: 0;\\n}\\n\\n.ccheader h1 span {\\n  display: block;\\n  padding: 0 0 0.6em 0.1em;\\n  font-size: 60%;\\n  opacity: 0.7;\\n}\\n\\n/* Demo Buttons Style */\\n.codeconvey-demo {\\n  padding-top: 1em;\\n  font-size: 0.8em;\\n}\\n\\n.codeconvey-demo a {\\n  display: inline-block;\\n  margin: 0.5em;\\n  padding: 0.7em 1.1em;\\n  outline: none;\\n  border: 2px solid #fff;\\n  color: #fff;\\n  text-decoration: none;\\n  text-transform: uppercase;\\n  letter-spacing: 1px;\\n  font-weight: 700;\\n}\\n\\n.codeconvey-demo a:hover,\\n.codeconvey-demo a.current-demo,\\n.codeconvey-demo a.current-demo:hover {\\n  border-color: #333;\\n  color: #333;\\n}\\n\\n/* Wrapper Style */\\n\\n.wrapper {\\n  margin: 0 auto;\\n  padding-left: 12%;\\n  padding-right: 12%;\\n}\\n\\nsection {\\n  float: left;\\n  width: 100%;\\n}\\n\\n.cctabs {\\n  width: 100%;\\n  margin: 100px auto;\\n}\\n.cctabs input[type=\\\"radio\\\"] {\\n  opacity: 0;\\n}\\n.cctabs .fa {\\n  margin-right: 10px;\\n}\\n.cctabs label {\\n  color: rgb(79, 112, 150);\\n  cursor: pointer;\\n  float: left;\\n  margin-right: 2px;\\n  padding: 0.5% 2%;\\n  font-size: 16px;\\n  font-weight: bold;\\n}\\n.cctabs label:hover {\\n  background: -webkit-linear-gradient(rgb(116, 184, 130), rgb(126, 206, 156));\\n}\\n.cctabs input:checked + label {\\n  background: #fff;\\n  color: #ebb704;\\n  border-top: solid 2px #ebb704;\\n}\\n.cctabs input:nth-of-type(1):checked ~ .panels .panel:first-child,\\n.cctabs input:nth-of-type(2):checked ~ .panels .panel:nth-child(2),\\n.cctabs input:nth-of-type(3):checked ~ .panels .panel:nth-child(3),\\n.cctabs input:nth-of-type(4):checked ~ .panels .panel:last-child {\\n  opacity: 1;\\n  -webkit-transition: 0.3s;\\n\\n  z-index: 999;\\n}\\n.cctabs .panels {\\n  float: left;\\n  clear: both;\\n  position: relative;\\n  width: 100%;\\n  background: #191828;\\n  color: #efedef;\\n}\\n.cctabs .panel {\\n  width: 100%;\\n  opacity: 0;\\n  position: absolute;\\n  background: #191828;\\n  color: #efedef;\\n  padding: 4%;\\n  box-sizing: border-box;\\n}\\n.cctabs .panel h2 {\\n  margin: 0;\\n  font-family: Arial;\\n}\\n\\n.cctabs .panel i {\\n  color: #ebb704;\\n  cursor: pointer;\\n}\\n.cctabs .panel i:hover {\\n  color: #f4cc42;\\n}\\n\\n.cctabs .headline h1 {\\n  font-size: 30px;\\n  font-weight: bold;\\n  letter-spacing: 0.6px;\\n  padding-bottom: 0;\\n  text-align: center;\\n  text-rendering: optimizespeed;\\n  margin: 10px 0;\\n}\\n\\n.cctabs .headline hr {\\n  background: none repeat scroll 0 0 #ebb704;\\n  border: 2px solid;\\n  color: #ebb704;\\n  margin-bottom: 0;\\n  margin-top: 0;\\n  width: 30px;\\n}\\n\\n.cctabs .headline .lead {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-weight: 300;\\n  line-height: 1.9;\\n  margin: 5px 0;\\n  text-align: center;\\n}\\n#map-canvas {\\n  height: 366px;\\n  width: 462px;\\n}\\n\\n#cc-contact input[type=\\\"text\\\"],\\n#cc-contact input[type=\\\"email\\\"],\\n#cc-contact input[type=\\\"tel\\\"],\\n#cc-contact input[type=\\\"password\\\"],\\n#cc-contact textarea {\\n  width: 100%;\\n  border: 1px solid #ebb704;\\n  margin: 0 0 5px;\\n  padding: 10px;\\n  font-family: \\\"Lato\\\", sans-serif;\\n  font-size: 14px;\\n}\\n\\n#cc-contact textarea {\\n  height: 147px;\\n  max-width: 100%;\\n}\\n\\n#cc-contact button[type=\\\"submit\\\"] {\\n  cursor: pointer;\\n  width: 100%;\\n  border: none;\\n  background: #ebb704;\\n  color: #fff;\\n  margin: 0 0 5px;\\n  padding: 10px;\\n  font-size: 15px;\\n}\\n\\n#cc-contact button[type=\\\"submit\\\"]:hover {\\n  background: #f4cc42;\\n  -webkit-transition: background 0.3s ease-in-out;\\n  -moz-transition: background 0.3s ease-in-out;\\n  transition: background-color 0.3s ease-in-out;\\n}\\n\\n/* GRID*/\\n.grid {\\n  display: block;\\n  margin-left: -10px;\\n}\\n.cc-text-center {\\n  text-align: center;\\n}\\n.cc-mt-20 {\\n  margin-top: 50px;\\n}\\n.unit-2,\\n.unit-3,\\n.unit-4 {\\n  float: left;\\n  border-left: 10px solid transparent;\\n  box-sizing: border-box;\\n  background-clip: padding-box;\\n}\\n.unit-1 {\\n  width: 100%;\\n  float: left;\\n}\\n.unit-2 {\\n  width: 50%;\\n}\\n\\n.unit-3 {\\n  width: 33.3%;\\n}\\n\\n.unit-4 {\\n  width: 25%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/felicidad.png":
/*!**********************************!*\
  !*** ./src/assets/felicidad.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2b845e04ed732633a324a5dec462f179.png\");\n\n//# sourceURL=webpack:///./src/assets/felicidad.png?");

/***/ }),

/***/ "./src/assets/kickaboo.png":
/*!*********************************!*\
  !*** ./src/assets/kickaboo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b8bd8a4a9ea0d824a88dd3feaedc15f8.png\");\n\n//# sourceURL=webpack:///./src/assets/kickaboo.png?");

/***/ }),

/***/ "./src/assets/polloking.png":
/*!**********************************!*\
  !*** ./src/assets/polloking.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"333ca1a07bd328c8d632ab6899fa72df.png\");\n\n//# sourceURL=webpack:///./src/assets/polloking.png?");

/***/ }),

/***/ "./src/assets/spacetasty.png":
/*!***********************************!*\
  !*** ./src/assets/spacetasty.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"05b2b779cc78d70c34665363c4a2d7cb.png\");\n\n//# sourceURL=webpack:///./src/assets/spacetasty.png?");

/***/ }),

/***/ "./src/assets/tristeza.png":
/*!*********************************!*\
  !*** ./src/assets/tristeza.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f91685e07d8b1f8d36ba1d8b1a7d1530.png\");\n\n//# sourceURL=webpack:///./src/assets/tristeza.png?");

/***/ }),

/***/ "./src/assets/wacamole.png":
/*!*********************************!*\
  !*** ./src/assets/wacamole.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2a5ba7f3b0fb1e38fdf35348d39afeba.png\");\n\n//# sourceURL=webpack:///./src/assets/wacamole.png?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst content = () => {\n  const contenthtml = `\n    <div class=\"flex\">\n    \n      <img id=\"astronaut\" src=\"../images/atronaut.png\">\n      <h1>\n          Space Burgers<br>\n          Hamburguesas, posta\n      </h1>\n  </div>\n\n\n    <div class=\"cctabs\">\n      <input checked id=\"one\" name=\"tabs\" type=\"radio\">\n      <label for=\"one\"><i class=\"fa fa-pencil-square-o\"></i> Home </label>\n      <input id=\"two\" name=\"tabs\" type=\"radio\" value=\"Two\">\n      <label for=\"two\"><i class=\"fa fa-magic\"></i> Menu</label>\n      <input id=\"three\" name=\"tabs\" type=\"radio\">\n      <label for=\"three\"><i class=\"fa fa-plus-square\"></i> Contact </label>\n      <div class=\"panels\">\n          <div class=\"panel\" id='homeid'>\n\n          </div>\n          <div class=\"panel\"id='menuid'>\n            \n          </div>\n          <div class=\"panel\" id='formid'>\n           \n          </div> \n      </div>\n  </div>`;\n  return contenthtml;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (content);\n\n//# sourceURL=webpack:///./src/content.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst form = () => {\n  const formhtml = ` <form id=\"cc-contact\" action=\"\" method=\"post\">\n    <input placeholder=\"your name\" type=\"text\" tabindex=\"1\" autofocus>\n    <input placeholder=\"Email Address\" type=\"email\" tabindex=\"2\" required>\n    <input placeholder=\"Phone Number\" type=\"tel\" tabindex=\"3\" required>\n    <textarea placeholder=\"Type your Message Here....\" tabindex=\"5\" required></textarea>\n    <button name=\"submit\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">Submit</button>\n  </form>`;\n  return formhtml;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (form);\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\n  const homehtml = `<h4>Sobre Nosotros</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat id velit quis vestibulum. Nam\n                    id orci eu urna mollis porttitor. Nunc nisi ante, gravida at velit eu, aliquet sodales dui. Sed laoreet\n                    condimentum nisi a egestas.</p>\n                    <p>Donec interdum ante ut enim consequat, quis varius nulla dapibus. Vivamus mollis fermentum augue a\n                    varius. Vestibulum in sapien at lectus gravida lobortis vulputate sed metus. Duis scelerisque justo et\n                    maximus efficitur. Donec eu eleifend quam. Curabitur aliquet commodo sapien eget vestibulum. Vestibulum\n                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel aliquet\n                    nunc, finibus posuere lorem. Suspendisse consectetur volutpat est ut ornare.</p>`;\n  return homehtml;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _assets_wacamole_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/wacamole.png */ \"./src/assets/wacamole.png\");\n/* harmony import */ var _assets_kickaboo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/kickaboo.png */ \"./src/assets/kickaboo.png\");\n/* harmony import */ var _assets_polloking_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/polloking.png */ \"./src/assets/polloking.png\");\n/* harmony import */ var _assets_spacetasty_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/spacetasty.png */ \"./src/assets/spacetasty.png\");\n/* harmony import */ var _assets_tristeza_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/tristeza.png */ \"./src/assets/tristeza.png\");\n/* harmony import */ var _assets_felicidad_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/felicidad.png */ \"./src/assets/felicidad.png\");\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.getElementById('content').innerHTML = Object(_content__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\ndocument.getElementById('formid').innerHTML = Object(_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\ndocument.getElementById('menuid').innerHTML = Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ndocument.getElementById('homeid').innerHTML = Object(_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\n  const menuhtml = `<ul class=\"menu\">\n  <li class='burgers'>\n      <a href=\"#\">\n          <img class='menuimg' src=\"../images/wacamole.png\">\n          <h4>WacaBurger</h4>\n      </a>\n      <p>Simple Hamburguesa con lechuga, tomate, bacon y nuestra salsa de Wacamole.</p>\n  </li>\n  <li class='burgers'>\n      <a href=\"#\">\n          <img class='menuimg' src=\"../images/spaceTasty.png\">\n          <h4>Space Tasty</h4>\n      </a>\n      <p>Doble Hamburguesa con pepinos,lechuga, tomate y nuestra salsa Tasty.</p>\n  </li>\n  <li class='burgers'>\n      <a href=\"#\">\n          <img class='menuimg' src=\"../images/kickaboo.png\">\n          <h4>KickaBoo</h4>\n      </a>\n      <p>Terminala si podes, solo los mas valientes ( o gorditos ) piden esta .</p>\n  </li>\n  <li class='burgers'>\n      <a href=\"#\">\n          <img class='menuimg2' src=\"../images/tristeza.png\">\n          <h4>Tristeza</h4>\n      </a>\n      <p>No podia faltar la clasica cheeseburger, para los mas aburridos.</p>\n  </li>\n  <li class='burgers'>\n      <a href=\"#\">\n          <img class='menuimg2' src=\"../images/felicidad.png\">\n          <h4>felicidad</h4>\n      </a>\n      <p>Una cheeseburger de verdad, hamburguesa doble mucho queso y mucha salsa.</p>\n  </li>\n  <li class='burgers'>\n      <a href=\"#\">\n          <img class='menuimg2' src=\"../images/polloking.png\">\n          <h4>PolloKing</h4>\n      </a>\n      <p>La de pollo, nada mas que decir, si no te va la carne, pedite esta.</p>\n  </li>\n</ul>`;\n  return menuhtml;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });
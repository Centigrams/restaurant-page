/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/photos/home-darker.jpg */ "./src/photos/home-darker.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/photos/contact-us.jpg */ "./src/photos/contact-us.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/photos/menu-darker.jpg */ "./src/photos/menu-darker.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --border-color-red: #cf291d;\n  --darker-red: #B50717;\n  --empty-background-gray: #1d1d1d;\n  --light-gray: #bfbfbf;\n  --almost-black: #131313;\n  --offwhite: #ECECEC;\n  --footer-background-transparent: rgba(0,0,0,0.3);\n  --main-content-div-size: calc(100vh - 7.5rem);\n}\n\nbody {\n  margin: 0;\n  background-color: var(--almost-black);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n  justify-content: space-between;\n  background-size: cover;\n}\n\n#nav-bar {\n  display: flex;\n  left: 0;\n  top: 0;\n  width: 100%;\n  border-bottom: 0.2rem solid var(--border-color-red);\n  background: none;\n  height: 5rem;\n  color: var(--offwhite);\n}\n\n#tab-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.tabs {\n  margin: 0 2rem;\n  font-family: \"Teko\", sans-serif;\n}\n\n.active,\n.tabs:hover {\n  cursor: pointer;\n  color: var(--darker-red);\n}\n\n#footer {\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  background-color: var(--footer-background-transparent);\n  width: 100%;\n  /* Allocate 0.2rem in height for nav border */\n  height: 2.3rem;\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--offwhite);\n  font-family: \"Teko\", sans-serif;\n}\n\n#github-logo {  \n  font-family: \"Teko\", sans-serif;\n  width: 1.5rem;\n  margin-left: 1rem;\n}\n\n#github-logo:hover {\n  cursor: pointer;\n}\n\n#github-link {\n  color: var(--darker-red);\n}\n\n/* \nMain contains entire page content per tab \nexcluding nav bar and footer.\n*/\n#main {\n  /* 5rem header + 2.5rem footer (2.3rem height due to red nav border's 0.2rem) = 7.5rem */\n  min-height: var(--main-content-div-size);\n  background: var(--empty-background-gray);\n}\n\n#home-div {\n  width: 100%;\n  min-height: var(--main-content-div-size); \n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#restaurant-name {\n  color: var(--offwhite);\n  font-size: 6rem;\n}\n\n#restaurant-line {\n  color: var(--border-color-red);\n  font-size: 2rem;\n}\n\n#contact-us-div {\n  width: 100%;\n  min-height: var(--main-content-div-size); \n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n};\n\n#map-div {\n  height: 30rem;\n}\n\n#telephone-number,\n#restaurant-address,\n#restaurant-email {\n  color: var(--offwhite);\n  font-size: 1.5rem;\n  font-family: \"Teko\", sans-serif;\n}\n\n#restau1rant-address,\n#telephone-number {\n  padding: 1rem;\n}\n\n#ginza-map {\n  margin-top: 2rem;\n  width: 30rem;\n  height: 30rem;\n}\n\n#render-menu-div {\n  min-height: var(--main-content-div-size); \n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  /* Apply 0.001rem to avoid pushing footer downwards */\n  padding: 0.001rem calc(50% - 20rem);\n}\n\n.item {\nborder-bottom: 0.1rem dotted #c5c5c5;\nbreak-inside: avoid;\ndisplay: flex;\njustify-content: space-between;\n}\n\nspan {\n  font-family: \"Teko\", sans-serif;\n  margin-bottom: -0.25rem;\n  padding: 0.25rem;\n  color: var(--offwhite);\n  font-size: 1.2rem;\n}\n.list-title {\n  font-family: \"Teko\", sans-serif;\n  font-size: 1.875rem;\n  color: var(--border-color-red);\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n.list {\n  margin-bottom: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,gCAAgC;EAChC,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,gDAAgD;EAChD,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,qCAAqC;AACvC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,MAAM;EACN,WAAW;EACX,mDAAmD;EACnD,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,+BAA+B;AACjC;;AAEA;;EAEE,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,OAAO;EACP,SAAS;EACT,eAAe;EACf,sDAAsD;EACtD,WAAW;EACX,6CAA6C;EAC7C,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;;CAGC;AACD;EACE,wFAAwF;EACxF,wCAAwC;EACxC,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,wCAAwC;EACxC,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mDAA8C;AAChD;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,wCAAwC;EACxC,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mDAA6C;AAC/C,CAAA;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,sBAAsB;EACtB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,wCAAwC;EACxC,mDAA8C;EAC9C,qDAAqD;EACrD,mCAAmC;AACrC;;AAEA;AACA,oCAAoC;AACpC,mBAAmB;AACnB,aAAa;AACb,8BAA8B;AAC9B;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB","sourcesContent":[":root {\n  --border-color-red: #cf291d;\n  --darker-red: #B50717;\n  --empty-background-gray: #1d1d1d;\n  --light-gray: #bfbfbf;\n  --almost-black: #131313;\n  --offwhite: #ECECEC;\n  --footer-background-transparent: rgba(0,0,0,0.3);\n  --main-content-div-size: calc(100vh - 7.5rem);\n}\n\nbody {\n  margin: 0;\n  background-color: var(--almost-black);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n  justify-content: space-between;\n  background-size: cover;\n}\n\n#nav-bar {\n  display: flex;\n  left: 0;\n  top: 0;\n  width: 100%;\n  border-bottom: 0.2rem solid var(--border-color-red);\n  background: none;\n  height: 5rem;\n  color: var(--offwhite);\n}\n\n#tab-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n\n.tabs {\n  margin: 0 2rem;\n  font-family: \"Teko\", sans-serif;\n}\n\n.active,\n.tabs:hover {\n  cursor: pointer;\n  color: var(--darker-red);\n}\n\n#footer {\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  background-color: var(--footer-background-transparent);\n  width: 100%;\n  /* Allocate 0.2rem in height for nav border */\n  height: 2.3rem;\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--offwhite);\n  font-family: \"Teko\", sans-serif;\n}\n\n#github-logo {  \n  font-family: \"Teko\", sans-serif;\n  width: 1.5rem;\n  margin-left: 1rem;\n}\n\n#github-logo:hover {\n  cursor: pointer;\n}\n\n#github-link {\n  color: var(--darker-red);\n}\n\n/* \nMain contains entire page content per tab \nexcluding nav bar and footer.\n*/\n#main {\n  /* 5rem header + 2.5rem footer (2.3rem height due to red nav border's 0.2rem) = 7.5rem */\n  min-height: var(--main-content-div-size);\n  background: var(--empty-background-gray);\n}\n\n#home-div {\n  width: 100%;\n  min-height: var(--main-content-div-size); \n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: url('/src/photos/home-darker.jpg');\n}\n\n#restaurant-name {\n  color: var(--offwhite);\n  font-size: 6rem;\n}\n\n#restaurant-line {\n  color: var(--border-color-red);\n  font-size: 2rem;\n}\n\n#contact-us-div {\n  width: 100%;\n  min-height: var(--main-content-div-size); \n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: url('/src/photos/contact-us.jpg');\n};\n\n#map-div {\n  height: 30rem;\n}\n\n#telephone-number,\n#restaurant-address,\n#restaurant-email {\n  color: var(--offwhite);\n  font-size: 1.5rem;\n  font-family: \"Teko\", sans-serif;\n}\n\n#restau1rant-address,\n#telephone-number {\n  padding: 1rem;\n}\n\n#ginza-map {\n  margin-top: 2rem;\n  width: 30rem;\n  height: 30rem;\n}\n\n#render-menu-div {\n  min-height: var(--main-content-div-size); \n  background: url('/src/photos/menu-darker.jpg');\n  /* Apply 0.001rem to avoid pushing footer downwards */\n  padding: 0.001rem calc(50% - 20rem);\n}\n\n.item {\nborder-bottom: 0.1rem dotted #c5c5c5;\nbreak-inside: avoid;\ndisplay: flex;\njustify-content: space-between;\n}\n\nspan {\n  font-family: \"Teko\", sans-serif;\n  margin-bottom: -0.25rem;\n  padding: 0.25rem;\n  color: var(--offwhite);\n  font-size: 1.2rem;\n}\n.list-title {\n  font-family: \"Teko\", sans-serif;\n  font-size: 1.875rem;\n  color: var(--border-color-red);\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n.list {\n  margin-bottom: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_photos_ginza_map_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/photos/ginza-map.jpg */ "./src/photos/ginza-map.jpg");




const renderContactUs = () => {
  const contactUsDiv = document.createElement('div');
  contactUsDiv.setAttribute('id', 'contact-us-div');
  contactUsDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'restaurantemail@ginzakyu.com',
      'p',
      'restaurant-email',
    )
  );
  contactUsDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      '123-456-789',
      'p',
      'telephone-number',
    )
  );
  contactUsDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'Tokyo, Chuo City, Ginza',
      'p',
      'restaurant-address',
    )
  );
  const map = document.createElement('div');
  map.setAttribute('id', 'map-div');

  //// const ginzaMap = document.createElement('img');
  //// ginzaMap.src = '/src/photos/ginza-map.jpg';
  const ginzaMap = new Image();
  ginzaMap.src = _src_photos_ginza_map_jpg__WEBPACK_IMPORTED_MODULE_2__;
  ginzaMap.setAttribute('id', 'ginza-map');
  map.appendChild(ginzaMap);
  contactUsDiv.appendChild(map);
  return contactUsDiv;
};

const initiateContactUs = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderContactUs());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateContactUs);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createText = (text, tag, idName, className) => {
  const textElement = document.createElement(tag);
  textElement.textContent = text;
  textElement.setAttribute('id', idName);
  textElement.classList.add(className);
  return textElement;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createText);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const renderHome = () => {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('id', 'home-div');
  homeDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'Ginza Kyu', 
      'h1', 
      'restaurant-name', 
    )
  );
  homeDiv.appendChild(
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.default)(
      'World-class. Since 1935.',
      'p',
      'restaurant-line',
    )
  );
  return homeDiv;
};

const initiateHome = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderHome());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const renderMenu = () => {
  const renderMenuDiv = document.createElement('div');
  renderMenuDiv.setAttribute('id', 'render-menu-div');
  renderMenuDiv.innerHTML = `
  <div class="list">
      <h2 class="list-title">Assorted Sushi</h2>
      <ul>
          <li class="item"><span class="name">ORIBE</span>
              <span class="price">¥7,000</span>
          </li>
          <li class="item"><span class="name">KARATSU</span>
              <span class="price">¥11,000</span>
          </li>
          <li class="item"><span class="name">KYUBEY</span>
              <span class="price">¥16,;000</span>
          </li>
      </ul>
  </div>

  <div class="list">
      <h2 class="list-title">Set Course</h2>
      <ul>
          <li class="item"><span class="name">IGA</span>
              <span class="price">¥21,000</span>
          </li>
          <li class="item"><span class="name">BIZEN</span>
              <span class="price">¥25,000</span>
          </li>
          <li class="item"><span class="name">ROSANJIN</span>
              <span class="price">¥30,000</span>
          </li>
      </ul>
  </div>

  <div class="list">
      <h2 class="list-title">Sho-Chu</h2>
      <ul>
          <li class="item"><span class="name">NIKAIDO (Barley)</span>
              <span class="price">¥900</span>
          </li>
          <li class="item"><span class="name">SHIRANAMI (Sweet Potato)</span>
              <span class="price">¥900</span>
          </li>
          <li class="item"><span class="name">ISAMI (Sweet Potato)</span>
              <span class="price">¥1,500</span>
          </li>
          <li class="item"><span class="name">JUUYONDAI (Rice)</span>
          <span class="price">¥1,900</span>
      </li>
      </ul>
  </div>

  <div class="list">
      <h2 class="list-title">Whisky</h2>
      <ul>
          <li class="item"><span class="name">SINGLETON 12 years</span>
              <span class="price">¥2,000</span>
          </li>
          <li class="item"><span class="name">CHITA</span>
              <span class="price">¥2,000</span>
          </li>
          <li class="item"><span class="name">YAMAZAKI 12 years</span>
              <span class="price">¥1,800</span>
          </li>
      </ul>
  </div> 
  `
  return renderMenuDiv;
};

const initiateMenu = () => {
  const main = document.getElementById('main');
  main.innerHTML = '';
  main.appendChild(renderMenu());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiateMenu);

/***/ }),

/***/ "./src/photos/contact-us.jpg":
/*!***********************************!*\
  !*** ./src/photos/contact-us.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8261401f40596f534b07.jpg";

/***/ }),

/***/ "./src/photos/ginza-map.jpg":
/*!**********************************!*\
  !*** ./src/photos/ginza-map.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ef1d5c4cd1c40fd225e.jpg";

/***/ }),

/***/ "./src/photos/githubLogo.png":
/*!***********************************!*\
  !*** ./src/photos/githubLogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "987334e9f782cc505f25.png";

/***/ }),

/***/ "./src/photos/home-darker.jpg":
/*!************************************!*\
  !*** ./src/photos/home-darker.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2327a9c00bed58e8a698.jpg";

/***/ }),

/***/ "./src/photos/menu-darker.jpg":
/*!************************************!*\
  !*** ./src/photos/menu-darker.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5860ad21e372b213ceb.jpg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactUs */ "./src/contactUs.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _src_photos_githubLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/photos/githubLogo.png */ "./src/photos/githubLogo.png");






const createNavBar = () => {
  const navBar = document.createElement('nav');
  navBar.setAttribute('id', 'nav-bar');

  const tabContainer = document.createElement('ul');
  tabContainer.setAttribute('id', 'tab-container');
  navBar.appendChild(tabContainer);

  const homeTab = document.createElement('li');
  homeTab.textContent = 'HOME';
  homeTab.classList.add('tabs');
  tabContainer.appendChild(homeTab);

  const menuTab = document.createElement('li');
  menuTab.textContent = 'MENU';
  menuTab.classList.add('tabs');
  tabContainer.appendChild(menuTab);

  const contactUsTab = document.createElement('li');
  contactUsTab.textContent = 'CONTACT US';
  contactUsTab.classList.add('tabs');
  tabContainer.appendChild(contactUsTab);

  return navBar;
};

const createMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  const footerMessage = document.createElement('p');
  footerMessage.textContent = 'Developed by ';

  const githubLinkUserName = document.createElement('a');
  githubLinkUserName.textContent = 'Centigrams';
  githubLinkUserName.href = 'https://github.com/Centigrams';
  githubLinkUserName.setAttribute('id', 'github-link');
  footerMessage.append(githubLinkUserName);

  //// const githubLogo = document.createElement('img');
  //// githubLogo.src = '/src/photos/githubLogo.png';
  const githubLogo = new Image();
  githubLogo.src = _src_photos_githubLogo_png__WEBPACK_IMPORTED_MODULE_4__;
  githubLogo.setAttribute('id', 'github-logo');
  footer.appendChild(footerMessage);
  footerMessage.appendChild(githubLogo);
  return footer;
};

const loadPage = () => {
  const content = document.getElementById('content');
  content.appendChild(createNavBar());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
};

document.addEventListener('click',(e) => {
  const clickedTab = e.target.textContent;
  if (clickedTab === 'HOME') {
      (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
  } else if (clickedTab === 'MENU') {
      (0,_menu__WEBPACK_IMPORTED_MODULE_3__.default)();
  } else if (clickedTab === 'CONTACT US') {
      (0,_contactUs__WEBPACK_IMPORTED_MODULE_2__.default)();
  }
});
loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhDQUFZO0FBQ2xCLElBQUk7QUFDSixNQUFNLDhDQUFZO0FBQ2xCLElBQUk7QUFDSixNQUFNLG1EQUFpQjtBQUN2QjtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL3Bob3Rvcy9ob21lLWRhcmtlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL3Bob3Rvcy9jb250YWN0LXVzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi9zcmMvcGhvdG9zL21lbnUtZGFya2VyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ib3JkZXItY29sb3ItcmVkOiAjY2YyOTFkO1xcbiAgLS1kYXJrZXItcmVkOiAjQjUwNzE3O1xcbiAgLS1lbXB0eS1iYWNrZ3JvdW5kLWdyYXk6ICMxZDFkMWQ7XFxuICAtLWxpZ2h0LWdyYXk6ICNiZmJmYmY7XFxuICAtLWFsbW9zdC1ibGFjazogIzEzMTMxMztcXG4gIC0tb2Zmd2hpdGU6ICNFQ0VDRUM7XFxuICAtLWZvb3Rlci1iYWNrZ3JvdW5kLXRyYW5zcGFyZW50OiByZ2JhKDAsMCwwLDAuMyk7XFxuICAtLW1haW4tY29udGVudC1kaXYtc2l6ZTogY2FsYygxMDB2aCAtIDcuNXJlbSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxtb3N0LWJsYWNrKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuI25hdi1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3ItcmVkKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbn1cXG5cXG4jdGFiLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFicyB7XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hY3RpdmUsXFxuLnRhYnM6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLWRhcmtlci1yZWQpO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZC10cmFuc3BhcmVudCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEFsbG9jYXRlIDAuMnJlbSBpbiBoZWlnaHQgZm9yIG5hdiBib3JkZXIgKi9cXG4gIGhlaWdodDogMi4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNnaXRodWItbG9nbyB7ICBcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbiNnaXRodWItbG9nbzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNnaXRodWItbGluayB7XFxuICBjb2xvcjogdmFyKC0tZGFya2VyLXJlZCk7XFxufVxcblxcbi8qIFxcbk1haW4gY29udGFpbnMgZW50aXJlIHBhZ2UgY29udGVudCBwZXIgdGFiIFxcbmV4Y2x1ZGluZyBuYXYgYmFyIGFuZCBmb290ZXIuXFxuKi9cXG4jbWFpbiB7XFxuICAvKiA1cmVtIGhlYWRlciArIDIuNXJlbSBmb290ZXIgKDIuM3JlbSBoZWlnaHQgZHVlIHRvIHJlZCBuYXYgYm9yZGVyJ3MgMC4ycmVtKSA9IDcuNXJlbSAqL1xcbiAgbWluLWhlaWdodDogdmFyKC0tbWFpbi1jb250ZW50LWRpdi1zaXplKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWVtcHR5LWJhY2tncm91bmQtZ3JheSk7XFxufVxcblxcbiNob21lLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1haW4tY29udGVudC1kaXYtc2l6ZSk7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbiNyZXN0YXVyYW50LW5hbWUge1xcbiAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG59XFxuXFxuI3Jlc3RhdXJhbnQtbGluZSB7XFxuICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLXJlZCk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNjb250YWN0LXVzLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1haW4tY29udGVudC1kaXYtc2l6ZSk7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufTtcXG5cXG4jbWFwLWRpdiB7XFxuICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4jdGVsZXBob25lLW51bWJlcixcXG4jcmVzdGF1cmFudC1hZGRyZXNzLFxcbiNyZXN0YXVyYW50LWVtYWlsIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNyZXN0YXUxcmFudC1hZGRyZXNzLFxcbiN0ZWxlcGhvbmUtbnVtYmVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNnaW56YS1tYXAge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGhlaWdodDogMzByZW07XFxufVxcblxcbiNyZW5kZXItbWVudS1kaXYge1xcbiAgbWluLWhlaWdodDogdmFyKC0tbWFpbi1jb250ZW50LWRpdi1zaXplKTsgXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgLyogQXBwbHkgMC4wMDFyZW0gdG8gYXZvaWQgcHVzaGluZyBmb290ZXIgZG93bndhcmRzICovXFxuICBwYWRkaW5nOiAwLjAwMXJlbSBjYWxjKDUwJSAtIDIwcmVtKTtcXG59XFxuXFxuLml0ZW0ge1xcbmJvcmRlci1ib3R0b206IDAuMXJlbSBkb3R0ZWQgI2M1YzVjNTtcXG5icmVhay1pbnNpZGU6IGF2b2lkO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5saXN0LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvci1yZWQpO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnREFBZ0Q7RUFDaEQsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsU0FBUztFQUNULHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLG1EQUFtRDtFQUNuRCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsU0FBUztFQUNULGVBQWU7RUFDZixzREFBc0Q7RUFDdEQsV0FBVztFQUNYLDZDQUE2QztFQUM3QyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztDQUdDO0FBQ0Q7RUFDRSx3RkFBd0Y7RUFDeEYsd0NBQXdDO0VBQ3hDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbURBQThDO0FBQ2hEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbURBQTZDO0FBQy9DLENBQUE7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1EQUE4QztFQUM5QyxxREFBcUQ7RUFDckQsbUNBQW1DO0FBQ3JDOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsOEJBQThCO0FBQzlCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYm9yZGVyLWNvbG9yLXJlZDogI2NmMjkxZDtcXG4gIC0tZGFya2VyLXJlZDogI0I1MDcxNztcXG4gIC0tZW1wdHktYmFja2dyb3VuZC1ncmF5OiAjMWQxZDFkO1xcbiAgLS1saWdodC1ncmF5OiAjYmZiZmJmO1xcbiAgLS1hbG1vc3QtYmxhY2s6ICMxMzEzMTM7XFxuICAtLW9mZndoaXRlOiAjRUNFQ0VDO1xcbiAgLS1mb290ZXItYmFja2dyb3VuZC10cmFuc3BhcmVudDogcmdiYSgwLDAsMCwwLjMpO1xcbiAgLS1tYWluLWNvbnRlbnQtZGl2LXNpemU6IGNhbGMoMTAwdmggLSA3LjVyZW0pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbW9zdC1ibGFjayk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbiNuYXYtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLXJlZCk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG59XFxuXFxuI3RhYi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhYnMge1xcbiAgbWFyZ2luOiAwIDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIlRla29cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYWN0aXZlLFxcbi50YWJzOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrZXItcmVkKTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQtdHJhbnNwYXJlbnQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBBbGxvY2F0ZSAwLjJyZW0gaW4gaGVpZ2h0IGZvciBuYXYgYm9yZGVyICovXFxuICBoZWlnaHQ6IDIuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICBmb250LWZhbWlseTogXFxcIlRla29cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jZ2l0aHViLWxvZ28geyAgXFxuICBmb250LWZhbWlseTogXFxcIlRla29cXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4jZ2l0aHViLWxvZ286aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZ2l0aHViLWxpbmsge1xcbiAgY29sb3I6IHZhcigtLWRhcmtlci1yZWQpO1xcbn1cXG5cXG4vKiBcXG5NYWluIGNvbnRhaW5zIGVudGlyZSBwYWdlIGNvbnRlbnQgcGVyIHRhYiBcXG5leGNsdWRpbmcgbmF2IGJhciBhbmQgZm9vdGVyLlxcbiovXFxuI21haW4ge1xcbiAgLyogNXJlbSBoZWFkZXIgKyAyLjVyZW0gZm9vdGVyICgyLjNyZW0gaGVpZ2h0IGR1ZSB0byByZWQgbmF2IGJvcmRlcidzIDAuMnJlbSkgPSA3LjVyZW0gKi9cXG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1haW4tY29udGVudC1kaXYtc2l6ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lbXB0eS1iYWNrZ3JvdW5kLWdyYXkpO1xcbn1cXG5cXG4jaG9tZS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiB2YXIoLS1tYWluLWNvbnRlbnQtZGl2LXNpemUpOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy9zcmMvcGhvdG9zL2hvbWUtZGFya2VyLmpwZycpO1xcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICBmb250LXNpemU6IDZyZW07XFxufVxcblxcbiNyZXN0YXVyYW50LWxpbmUge1xcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvci1yZWQpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jY29udGFjdC11cy1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiB2YXIoLS1tYWluLWNvbnRlbnQtZGl2LXNpemUpOyBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy9zcmMvcGhvdG9zL2NvbnRhY3QtdXMuanBnJyk7XFxufTtcXG5cXG4jbWFwLWRpdiB7XFxuICBoZWlnaHQ6IDMwcmVtO1xcbn1cXG5cXG4jdGVsZXBob25lLW51bWJlcixcXG4jcmVzdGF1cmFudC1hZGRyZXNzLFxcbiNyZXN0YXVyYW50LWVtYWlsIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNyZXN0YXUxcmFudC1hZGRyZXNzLFxcbiN0ZWxlcGhvbmUtbnVtYmVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNnaW56YS1tYXAge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGhlaWdodDogMzByZW07XFxufVxcblxcbiNyZW5kZXItbWVudS1kaXYge1xcbiAgbWluLWhlaWdodDogdmFyKC0tbWFpbi1jb250ZW50LWRpdi1zaXplKTsgXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy9zcmMvcGhvdG9zL21lbnUtZGFya2VyLmpwZycpO1xcbiAgLyogQXBwbHkgMC4wMDFyZW0gdG8gYXZvaWQgcHVzaGluZyBmb290ZXIgZG93bndhcmRzICovXFxuICBwYWRkaW5nOiAwLjAwMXJlbSBjYWxjKDUwJSAtIDIwcmVtKTtcXG59XFxuXFxuLml0ZW0ge1xcbmJvcmRlci1ib3R0b206IDAuMXJlbSBkb3R0ZWQgI2M1YzVjNTtcXG5icmVhay1pbnNpZGU6IGF2b2lkO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5zcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW07XFxuICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbi5saXN0LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGVrb1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvci1yZWQpO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbi5saXN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlVGV4dCBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCByZXN0YXVyYW50TWFwIGZyb20gJy9zcmMvcGhvdG9zL2dpbnphLW1hcC5qcGcnO1xuXG5jb25zdCByZW5kZXJDb250YWN0VXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3RVc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0VXNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LXVzLWRpdicpO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVGV4dChcbiAgICAgICdyZXN0YXVyYW50ZW1haWxAZ2luemFreXUuY29tJyxcbiAgICAgICdwJyxcbiAgICAgICdyZXN0YXVyYW50LWVtYWlsJyxcbiAgICApXG4gICk7XG4gIGNvbnRhY3RVc0Rpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUZXh0KFxuICAgICAgJzEyMy00NTYtNzg5JyxcbiAgICAgICdwJyxcbiAgICAgICd0ZWxlcGhvbmUtbnVtYmVyJyxcbiAgICApXG4gICk7XG4gIGNvbnRhY3RVc0Rpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUZXh0KFxuICAgICAgJ1Rva3lvLCBDaHVvIENpdHksIEdpbnphJyxcbiAgICAgICdwJyxcbiAgICAgICdyZXN0YXVyYW50LWFkZHJlc3MnLFxuICAgIClcbiAgKTtcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1hcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hcC1kaXYnKTtcblxuICAvLy8vIGNvbnN0IGdpbnphTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIC8vLy8gZ2luemFNYXAuc3JjID0gJy9zcmMvcGhvdG9zL2dpbnphLW1hcC5qcGcnO1xuICBjb25zdCBnaW56YU1hcCA9IG5ldyBJbWFnZSgpO1xuICBnaW56YU1hcC5zcmMgPSByZXN0YXVyYW50TWFwO1xuICBnaW56YU1hcC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpbnphLW1hcCcpO1xuICBtYXAuYXBwZW5kQ2hpbGQoZ2luemFNYXApO1xuICBjb250YWN0VXNEaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgcmV0dXJuIGNvbnRhY3RVc0Rpdjtcbn07XG5cbmNvbnN0IGluaXRpYXRlQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJDb250YWN0VXMoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWF0ZUNvbnRhY3RVczsiLCJjb25zdCBjcmVhdGVUZXh0ID0gKHRleHQsIHRhZywgaWROYW1lLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XG4gIHRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIHRleHRFbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGV4dDsiLCJpbXBvcnQgY3JlYXRlVGV4dCBmcm9tIFwiLi9oZWxwZXJzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob21lRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1kaXYnKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVUZXh0KFxuICAgICAgJ0dpbnphIEt5dScsIFxuICAgICAgJ2gxJywgXG4gICAgICAncmVzdGF1cmFudC1uYW1lJywgXG4gICAgKVxuICApO1xuICBob21lRGl2LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVRleHQoXG4gICAgICAnV29ybGQtY2xhc3MuIFNpbmNlIDE5MzUuJyxcbiAgICAgICdwJyxcbiAgICAgICdyZXN0YXVyYW50LWxpbmUnLFxuICAgIClcbiAgKTtcbiAgcmV0dXJuIGhvbWVEaXY7XG59O1xuXG5jb25zdCBpbml0aWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuICBtYWluLmFwcGVuZENoaWxkKHJlbmRlckhvbWUoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWF0ZUhvbWU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlck1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVuZGVyTWVudURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbmRlci1tZW51LWRpdicpO1xuICByZW5kZXJNZW51RGl2LmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIDxoMiBjbGFzcz1cImxpc3QtdGl0bGVcIj5Bc3NvcnRlZCBTdXNoaTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPk9SSUJFPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqU3LDAwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5LQVJBVFNVPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxMSwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+S1lVQkVZPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxNiw7MDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgPGgyIGNsYXNzPVwibGlzdC10aXRsZVwiPlNldCBDb3Vyc2U8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5JR0E8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTIxLDAwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5CSVpFTjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMjUsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPlJPU0FOSklOPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUzMCwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICA8aDIgY2xhc3M9XCJsaXN0LXRpdGxlXCI+U2hvLUNodTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPk5JS0FJRE8gKEJhcmxleSk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTkwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5TSElSQU5BTUkgKFN3ZWV0IFBvdGF0byk8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTkwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIj48c3BhbiBjbGFzcz1cIm5hbWVcIj5JU0FNSSAoU3dlZXQgUG90YXRvKTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMSw1MDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+SlVVWU9OREFJIChSaWNlKTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxLDkwMDwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICAgICAgPGgyIGNsYXNzPVwibGlzdC10aXRsZVwiPldoaXNreTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPlNJTkdMRVRPTiAxMiB5ZWFyczwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPsKlMiwwMDA8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJpdGVtXCI+PHNwYW4gY2xhc3M9XCJuYW1lXCI+Q0hJVEE8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7CpTIsMDAwPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXRlbVwiPjxzcGFuIGNsYXNzPVwibmFtZVwiPllBTUFaQUtJIDEyIHllYXJzPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+wqUxLDgwMDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgPC9kaXY+IFxuICBgXG4gIHJldHVybiByZW5kZXJNZW51RGl2O1xufTtcblxuY29uc3QgaW5pdGlhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChyZW5kZXJNZW51KCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhdGVNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBpbml0aWF0ZUNvbnRhY3RVcyBmcm9tIFwiLi9jb250YWN0VXNcIjtcbmltcG9ydCBpbml0aWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGZvb3RlckdpdGh1YkxvZ28gZnJvbSAnL3NyYy9waG90b3MvZ2l0aHViTG9nby5wbmcnXG5cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1iYXInKTtcblxuICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0YWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0YWItY29udGFpbmVyJyk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuXG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lVGFiLnRleHRDb250ZW50ID0gJ0hPTUUnO1xuICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIGNvbnN0IGNvbnRhY3RVc1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnRhY3RVc1RhYi50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcbiAgY29udGFjdFVzVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RVc1RhYik7XG5cbiAgcmV0dXJuIG5hdkJhcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG5cbiAgY29uc3QgZm9vdGVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZm9vdGVyTWVzc2FnZS50ZXh0Q29udGVudCA9ICdEZXZlbG9wZWQgYnkgJztcblxuICBjb25zdCBnaXRodWJMaW5rVXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmtVc2VyTmFtZS50ZXh0Q29udGVudCA9ICdDZW50aWdyYW1zJztcbiAgZ2l0aHViTGlua1VzZXJOYW1lLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0NlbnRpZ3JhbXMnO1xuICBnaXRodWJMaW5rVXNlck5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItbGluaycpO1xuICBmb290ZXJNZXNzYWdlLmFwcGVuZChnaXRodWJMaW5rVXNlck5hbWUpO1xuXG4gIC8vLy8gY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAvLy8vIGdpdGh1YkxvZ28uc3JjID0gJy9zcmMvcGhvdG9zL2dpdGh1YkxvZ28ucG5nJztcbiAgY29uc3QgZ2l0aHViTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBnaXRodWJMb2dvLnNyYyA9IGZvb3RlckdpdGh1YkxvZ287XG4gIGdpdGh1YkxvZ28uc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItbG9nbycpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTWVzc2FnZSk7XG4gIGZvb3Rlck1lc3NhZ2UuYXBwZW5kQ2hpbGQoZ2l0aHViTG9nbyk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBpbml0aWF0ZUhvbWUoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICBjb25zdCBjbGlja2VkVGFiID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gIGlmIChjbGlja2VkVGFiID09PSAnSE9NRScpIHtcbiAgICAgIGluaXRpYXRlSG9tZSgpO1xuICB9IGVsc2UgaWYgKGNsaWNrZWRUYWIgPT09ICdNRU5VJykge1xuICAgICAgaW5pdGlhdGVNZW51KCk7XG4gIH0gZWxzZSBpZiAoY2xpY2tlZFRhYiA9PT0gJ0NPTlRBQ1QgVVMnKSB7XG4gICAgICBpbml0aWF0ZUNvbnRhY3RVcygpO1xuICB9XG59KTtcbmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
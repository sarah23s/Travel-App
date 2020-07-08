var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/footer.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/footer.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "footer {\n  background: #153B67; }\n  footer div {\n    width: fit-content;\n    margin: auto;\n    padding: 15px 0 10px 0; }\n  footer .socialIcons {\n    color: white;\n    margin: 3px; }\n  footer h3 {\n    width: fit-content;\n    margin: auto;\n    color: white;\n    padding-bottom: 10px;\n    font-size: 15px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".navbar {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #153B67;\n  list-style: none;\n  border-bottom: 2px solid white;\n  z-index: 2; }\n  .navbar #title {\n    float: left;\n    font-family: 'Lobster', cursive;\n    font-size: 40px;\n    color: white;\n    margin: 5px 0 8px 60px; }\n  .navbar div {\n    margin-top: 5px;\n    justify-content: flex-end; }\n  .navbar .nav-item {\n    display: inline-block;\n    width: 150px;\n    text-align: center; }\n    .navbar .nav-item .nav-link {\n      color: white;\n      font-weight: bold;\n      font-size: 20px;\n      font-family: cursive;\n      text-decoration: none; }\n      .navbar .nav-item .nav-link:hover {\n        background: #667a91; }\n  .navbar i {\n    visibility: hidden;\n    color: white;\n    display: none; }\n\nbutton {\n  float: right;\n  margin: 8px 23px 0 0; }\n\n.active_nav {\n  background: #394b61;\n  border-style: inset; }\n\n@media all and (max-width: 990px) {\n  .navbar-nav {\n    float: right; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/planner.jpg */ "./src/client/images/planner.jpg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  padding: 0;\n  margin: 0; }\n\n#home {\n  background-image: linear-gradient(180deg, rgba(14, 14, 65, 0.749) 0%, rgba(219, 219, 219, 0.31) 70%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: 50%;\n  background-attachment: fixed;\n  opacity: 0.8;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #fff; }\n\n#reserve_div {\n  margin-top: 9rem;\n  font-family: cursive;\n  font-size: 50px;\n  font-weight: bold;\n  text-align: center; }\n  #reserve_div form {\n    width: 100%;\n    padding: 1rem;\n    margin: 1.5rem auto;\n    background: rgba(196, 223, 255, 0.603);\n    border-radius: 15px;\n    font-family: 'Kalam', cursive;\n    font-weight: normal;\n    font-size: 28px; }\n    #reserve_div form label {\n      display: block;\n      color: black;\n      margin: 10px 20px 0 10px; }\n    #reserve_div form input {\n      display: block;\n      width: 300px;\n      margin: 0 auto 20px auto;\n      height: 30px;\n      border-radius: 5px;\n      border: 1px solid #153B67;\n      padding: 2px 10px;\n      font-size: 18px; }\n    #reserve_div form #trip_date {\n      color: #929292;\n      border: none; }\n    #reserve_div form #search_btn {\n      color: white;\n      background: #091b2e; }\n\n#my_trips {\n  min-height: 700px;\n  background: rgba(247, 247, 247, 0.55); }\n  #my_trips h1 {\n    padding: 2rem;\n    font-family: cursive;\n    font-size: 40px;\n    font-weight: bold;\n    text-align: center; }\n  #my_trips .container {\n    margin: auto; }\n    #my_trips .container .afterRow .card {\n      width: 25rem;\n      padding: 20px 30px;\n      margin: 0 auto 50px auto;\n      float: none;\n      border-radius: 10px;\n      z-index: 0; }\n      #my_trips .container .afterRow .card:hover {\n        transform: scale(1.05);\n        box-shadow: 0 8px 16px 0 rgba(9, 27, 46, 0.5); }\n      #my_trips .container .afterRow .card img {\n        width: 20rem;\n        height: 15rem;\n        margin: 15px auto;\n        border: 1px solid gray;\n        border-radius: 5px; }\n      #my_trips .container .afterRow .card h3 {\n        text-align: center;\n        font-family: cursive; }\n      #my_trips .container .afterRow .card .card-text {\n        font-size: 18px;\n        margin: 5px; }\n      #my_trips .container .afterRow .card button {\n        width: 60%;\n        margin: 10px auto 0px auto;\n        padding: 5px;\n        color: white;\n        background: #ff6663;\n        border-radius: 5px;\n        border: 1px solid #fa0602;\n        border-style: outset; }\n        #my_trips .container .afterRow .card button:hover {\n          background: #b53431;\n          border-style: inset; }\n\n@media all and (max-width: 990px) {\n  #my_trips .container .card {\n    width: 20rem;\n    padding: 10px 20px; }\n  #my_trips .container .card img {\n    width: 15rem;\n    height: 15rem;\n    margin: 10px auto; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/modal.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/modal.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 3;\n  /* Sit on top */\n  padding-top: 120px;\n  /* Location of the box */\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.516);\n  /* Black w/ opacity */\n  /* Modal Content */\n  /* The Close Button */ }\n  .modal .modal_content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 12px 20px;\n    border: 1px solid #888;\n    width: 780px;\n    height: 400px; }\n  .modal #modal_close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    padding: 0;\n    margin: 0; }\n    .modal #modal_close:hover, .modal #modal_close:focus {\n      color: #000;\n      text-decoration: none;\n      cursor: pointer; }\n  .modal #modal_card {\n    display: flex;\n    flex-direction: row; }\n    .modal #modal_card #modal_img {\n      display: inline-block;\n      width: 350px;\n      height: 300px;\n      margin: 10px auto 5px auto; }\n    .modal #modal_card #modal_text {\n      width: 380px;\n      color: black;\n      display: inline-block;\n      margin: auto;\n      font-family: 'Fondamento', cursive;\n      font-size: 18px;\n      padding: 0 10px 20px 20px; }\n      .modal #modal_card #modal_text #modal_title {\n        display: block;\n        font-family: cursive;\n        font-weight: bold;\n        margin: 20px auto; }\n      .modal #modal_card #modal_text p {\n        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; }\n  .modal #save_trip_btn {\n    width: 350px;\n    padding: 5px;\n    margin: 0%;\n    float: none;\n    color: white;\n    border-radius: 5px;\n    background: #fe3532;\n    border: 1px solid #910907; }\n    .modal #save_trip_btn:hover {\n      background: #8e2626;\n      border-style: inset; }\n\n@media all and (max-width: 830px) {\n  #modal_card {\n    display: block; }\n    #modal_card #modal_img {\n      display: block;\n      width: 150px;\n      height: 200px;\n      margin: 3px auto 3px auto; }\n    #modal_card #modal_text {\n      width: 380px;\n      color: black;\n      display: block;\n      margin: auto;\n      font-family: 'Fondamento', cursive;\n      font-size: 18px;\n      padding: 0 10px 20px 20px; }\n      #modal_card #modal_text #modal_title {\n        display: block;\n        font-family: cursive;\n        font-weight: bold;\n        margin-bottom: 20px; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/client/app.js":
/*!***************************!*\
  !*** ./src/client/app.js ***!
  \***************************/
/*! exports provided: handleSubmit, checkForInfo, openModal, updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_infoChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/infoChecker */ "./src/client/js/infoChecker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkForInfo", function() { return _js_infoChecker__WEBPACK_IMPORTED_MODULE_0__["checkForInfo"]; });

/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/formHandler */ "./src/client/js/formHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_1__["handleSubmit"]; });

/* harmony import */ var _js_openModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/openModal */ "./src/client/js/openModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return _js_openModal__WEBPACK_IMPORTED_MODULE_2__["openModal"]; });

/* harmony import */ var _js_updateUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/updateUI */ "./src/client/js/updateUI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return _js_updateUI__WEBPACK_IMPORTED_MODULE_3__["updateUI"]; });

/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.scss */ "./src/client/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/footer.scss */ "./src/client/styles/footer.scss");
/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/header.scss */ "./src/client/styles/header.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/modal.scss */ "./src/client/styles/modal.scss");
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_modal_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_planner_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/planner.jpg */ "./src/client/images/planner.jpg");
/* harmony import */ var _images_clouds_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/clouds.jpeg */ "./src/client/images/clouds.jpeg");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);















async function performSearch() {
    const submitBtn = document.getElementById('search_btn');
    submitBtn.setAttribute('value', 'Searching...' );
    submitBtn.disabled = true;

    Client.handleSubmit(event);

}

function performDelete(target) {
    // console.log("IN DELEETTEEEE");
    let confirmation = confirm("Do you really want to delete this trip?")
    if (confirmation) {
        const deleteDiv = target.parentElement.parentElement;
        deleteDiv.remove();
    }
}

function performActiveNavItem(target) {
    // console.log("IN ACTIVE NAV ITEM");

    const activeSecLi = document.querySelector('.active_nav');
    if (!(activeSecLi === null)) {
        activeSecLi.classList.remove('active_nav');
    }

    target.classList.add('active_nav');
}


document.addEventListener('click', function (e) {
    if (e.target.className === 'delete_trip_btn') {
        performDelete(e.target);
    }
    if (e.target.className === 'nav-item' || e.target.className === 'nav-link') {
        if (e.target.className === 'nav-link') {
            performActiveNavItem(e.target.parentElement);
        }
        else {
            performActiveNavItem(e.target);
        }
    }
    else if (e.target.id === 'search_btn') {
        performSearch();
    }
})


//need to be edited
window.addEventListener('scroll', function () {
    // let fromTop = window.scrollY;
    let position = window.pageYOffset;

    const allLinks = document.querySelectorAll('.nav-link');
    console.log("allLinks: " + allLinks.length);


    allLinks.forEach((link) => {
        var sectionId = link.hash;
        sectionId = sectionId.substring(1);
        console.log("sectionId: " + sectionId);

        const sections = document.getElementById(sectionId);
        console.log("sctionss: "+ JSON.stringify(sections));


        // did not reach to any yet
        if (!sections) {
            return;
        }

        // Add active class
        if (sections.offsetTop <= position + 100) {
            performActiveNavItem(sections);
        }
    
    });
});






/***/ }),

/***/ "./src/client/images/clouds.jpeg":
/*!***************************************!*\
  !*** ./src/client/images/clouds.jpeg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "21e8fb560e9e6d5d08f8702970771637.jpeg");

/***/ }),

/***/ "./src/client/images/planner.jpg":
/*!***************************************!*\
  !*** ./src/client/images/planner.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5f057df941a276174d680713835d7896.jpg");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: handleSubmit, sentiment_analysis_TEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return handleSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentiment_analysis_TEST", function() { return sentiment_analysis_TEST; });
// const fetch = require("node-fetch");
global.fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

function handleSubmit(event) {
    event.preventDefault()

    // check what data was put into the form fields
    let formPlace = document.getElementById('trip_place').value
    let formDate = document.getElementById('trip_date').value

    
    if (typeof (formPlace) === null || undefined) {
        if (typeof (formDate) === null || undefined) {
            alert("all fields should be completed");
            return;
        }
    }

    var offset = new Date().getTimezoneOffset() ;

    const data = {
        city: formPlace,
        departDate: formDate,
        timeZoneOffset: offset,
    };

    Client.checkForInfo(data);

    console.log("::: Form Submitted :::");
}

async function sentiment_analysis_TEST(input_text) {
    var response = await fetch("http://localhost:3051/sentiment_text");
    console.log("response: ", response);
}




/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/client/js/infoChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/infoChecker.js ***!
  \**************************************/
/*! exports provided: checkForInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForInfo", function() { return checkForInfo; });
let UIdata = {};

async function checkForInfo(data) {
    try {
        const postData = await fetch('/userInput', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const newData = await postData.json();
        Client.openModal(newData);

    } catch (error) {
        console.log("HELLOOOOO THIS IS AN ERROR in infoChecker");
        console.log(error);
    }
}

 


/***/ }),

/***/ "./src/client/js/openModal.js":
/*!************************************!*\
  !*** ./src/client/js/openModal.js ***!
  \************************************/
/*! exports provided: openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
// function closeModal(){
//     const modal = document.getElementById('myModal');
//     modal.style.display = "none";
// }

async function openModal(data) {
    console.log("adfaGS");

    const xBtn = document.getElementById('modal_close');
    xBtn.addEventListener('click', function (){
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    });

    const modal = document.getElementById('myModal');
    modal.style.display = "block";

    const modalImg = document.getElementById('modal_img')
    modalImg.setAttribute('src', data.imageUrl);

    const modalTitle = document.getElementById('modal_title');
    modalTitle.innerHTML = '<stong>Trip to : </stong>' + data.city;


    const modalText = document.getElementById('modal_text');

    const modalP0 = document.createElement('p');
    modalP0.setAttribute('class', 'modal_p');
    modalP0.innerHTML = 'Your trip to <strong><em> ' + data.city + ', ' + data.country + '</em></strong> is ' + data.diff + ' days away';

    const modalP1 = document.createElement('p');
    modalP1.setAttribute('class', 'modal_p');
    modalP1.innerHTML = '<strong>Departure Date: </strong>' + data.date;

    const modalP2 = document.createElement('p');
    modalP2.setAttribute('class', 'modal_p');
    modalP2.innerHTML = '<strong>Low Temp: </strong>' + data.lowTemp + ' °C';

    const modalP3 = document.createElement('p');
    modalP3.setAttribute('class', 'modal_p');
    modalP3.innerHTML = '<strong>High Temp: </strong>' + data.maxTemp + ' °C';

    const modalP4 = document.createElement('p');
    modalP4.setAttribute('class', 'modal_p');
    modalP4.innerHTML = '<strong>Weather Description: </strong>' + data.weatherDescription;

    modalText.appendChild(modalP0);
    modalText.appendChild(modalP1);
    modalText.appendChild(modalP2);
    modalText.appendChild(modalP3);
    modalText.appendChild(modalP4);

    const submitBtn = document.getElementById('search_btn');
    submitBtn.setAttribute('value', 'Search');
    submitBtn.disabled = false;

    const saveBtn = document.getElementById('save_trip_btn');
    saveBtn.addEventListener('click', function (){
        Client.updateUI(data);
        modalTitle.innerHTML = '';
        modalP0.remove();
        modalP1.remove();
        modalP2.remove();
        modalP3.remove();
        modalImg.setAttribute('src', '');
    });
}

 

/***/ }),

/***/ "./src/client/js/updateUI.js":
/*!***********************************!*\
  !*** ./src/client/js/updateUI.js ***!
  \***********************************/
/*! exports provided: updateUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
async function updateUI(data) {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";

    const rowDiv = document.getElementsByClassName('row')[0];

    const div = document.createElement('div');
    div.classList.add('afterRow', 'col-lg', 'col-md-12', 'col-lg-6');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const img = document.createElement('img');
    img.setAttribute('src', data.imageUrl);
    img.setAttribute('alt', "City photo");

    const cardTitle = document.createElement('h3');
    cardTitle.innerHTML = '<stong>Trip to: </stong>' + data.city;

    const modalP0 = document.createElement('p');
    modalP0.setAttribute('class', 'card-text');
    modalP0.innerHTML = 'Your trip to <strong><em> ' + data.city + ', ' + data.country + '</em></strong> is ' + data.diff + ' days away';

    const modalP1 = document.createElement('p');
    modalP1.setAttribute('class', 'card-text');
    modalP1.innerHTML = '<strong>Departure Date: </strong>' + data.date;

    const modalP2 = document.createElement('p');
    modalP2.setAttribute('class', 'card-text');
    modalP2.innerHTML = '<strong>Low Temp: </strong>' + data.lowTemp + ' °C';

    const modalP3 = document.createElement('p');
    modalP3.setAttribute('class', 'card-text');
    modalP3.innerHTML = '<strong>High Temp: </strong>' + data.maxTemp + ' °C';

    const modalP4 = document.createElement('p');
    modalP4.setAttribute('class', 'card-text');
    modalP4.innerHTML = '<strong>Weather Description: </strong>' + data.weatherDescription;


    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete_trip_btn');
    deleteBtn.innerText = 'Delete Trip';

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(modalP0);
    cardDiv.appendChild(modalP1);
    cardDiv.appendChild(modalP2);
    cardDiv.appendChild(modalP3);
    cardDiv.appendChild(modalP4);
    cardDiv.appendChild(deleteBtn);

    div.appendChild(cardDiv);
    rowDiv.appendChild(div);

}




/***/ }),

/***/ "./src/client/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/footer.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/header.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/client/styles/main.scss":
/*!*************************************!*\
  !*** ./src/client/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/client/styles/modal.scss":
/*!**************************************!*\
  !*** ./src/client/styles/modal.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/client/styles/modal.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
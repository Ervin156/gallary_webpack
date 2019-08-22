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

/***/ "./src/Gallary.js":
/*!************************!*\
  !*** ./src/Gallary.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ \"./src/Request.js\");\n/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Img */ \"./src/Img.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Gallery =\n/*#__PURE__*/\nfunction () {\n  function Gallery(_ref) {\n    var limit = _ref.limit,\n        page = _ref.page,\n        gallery_id = _ref.gallery_id,\n        nav_id = _ref.nav_id;\n\n    _classCallCheck(this, Gallery);\n\n    this.limit = limit;\n    this.page = page; // this.gallery_id = gallery_id;\n    // this.nav_id = nav_id;\n\n    this.photos = [];\n    this.container = document.querySelector(gallery_id);\n    this.btnLeft = document.querySelector(\"\".concat(nav_id, \" #prev\"));\n    this.btnRight = document.querySelector(\"\".concat(nav_id, \" #next\"));\n    this.input = document.querySelector(\"\".concat(nav_id, \" input\"));\n    this.select = document.querySelector(\"\".concat(nav_id, \" select\"));\n    this.renderList = this.renderList.bind(this);\n    this.onlikeHandler = this.onlikeHandler.bind(this);\n    this.changePage = this.changePage.bind(this);\n  }\n\n  _createClass(Gallery, [{\n    key: \"build\",\n    value: function build() {\n      this.input.value = this.page;\n      this.select.value = this.limit;\n      this.btnLeft.onclick = this.changePage;\n    }\n  }, {\n    key: \"onlikeHandler\",\n    value: function onlikeHandler(photo, like) {\n      _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].likePhotos(photo.id);\n    }\n  }, {\n    key: \"changePage\",\n    value: function changePage(e) {\n      var IS_LEFT = e.target === this.btnLeft;\n      var IS_RIGHT = e.target === this.btnRight;\n      var IS_SELECT = e.target === this.select;\n      var IS_INPUT = e.target === this.input;\n\n      if (IS_LEFT && this.page > 1) {\n        this.page--;\n      }\n\n      if (IS_RIGHT) {\n        this.page++;\n      }\n\n      if (IS_SELECT) {\n        this.limit = this.select.value;\n      }\n\n      if (IS_INPUT) {\n        this.limit = this.input.value;\n      }\n\n      !IS_INPUT && (this.input.value = this.page);\n      this.renderList();\n    }\n  }, {\n    key: \"renderList\",\n    value: function renderList() {\n      var _this = this;\n\n      _Request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listPhotos(this.limit, this.page).then(function (data) {\n        var _this$container;\n\n        _this.photos = data.map(function (photo) {\n          var img = new _Img__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            photo: photo,\n            onlikeHandler: _this.onlikeHandler\n          });\n          return img.build();\n        });\n\n        (_this$container = _this.container).append.apply(_this$container, _toConsumableArray(_this.photos));\n      });\n    }\n  }]);\n\n  return Gallery;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\n//# sourceURL=webpack:///./src/Gallary.js?");

/***/ }),

/***/ "./src/Img.js":
/*!********************!*\
  !*** ./src/Img.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Img =\n/*#__PURE__*/\nfunction () {\n  function Img(_ref) {\n    var photo = _ref.photo,\n        onlikeHandler = _ref.onlikeHandler;\n\n    _classCallCheck(this, Img);\n\n    this.photo = photo;\n    this.onlikeHandler = onlikeHandler;\n    this.wrap = document.createElement(\"div\");\n    this.img = document.createElement(\"img\");\n    this.like = document.createElement(\"span\");\n    this.date_at = document.createElement(\"i\");\n  }\n\n  _createClass(Img, [{\n    key: \"getFormatDate\",\n    value: function getFormatDate() {\n      var updated_at = this.photo.updated_at;\n      var date = new Date(updated_at);\n      return date.toLocaleDateString();\n    }\n  }, {\n    key: \"build\",\n    value: function build() {\n      var _this = this;\n\n      var _this$photo = this.photo,\n          likes = _this$photo.likes,\n          thumb = _this$photo.urls.thumb;\n      this.wrap.className = \"photo\";\n      this.img.src = thumb;\n      this.like.innerHTML = likes;\n\n      this.like.onklick = function () {\n        _this.onlikeHandler(_this.photo, _this.like);\n      };\n\n      this.date_at.innerHTML = this.getFormatDate();\n      this.wrap.append(this.like);\n      this.wrap.append(this.date_at);\n      this.wrap.append(this.img);\n      return this.wrap;\n    }\n  }]);\n\n  return Img;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Img);\n\n//# sourceURL=webpack:///./src/Img.js?");

/***/ }),

/***/ "./src/Request.js":
/*!************************!*\
  !*** ./src/Request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Request =\n/*#__PURE__*/\nfunction () {\n  function Request() {\n    _classCallCheck(this, Request);\n  }\n\n  _createClass(Request, [{\n    key: \"listPhotos\",\n    value: function listPhotos(limit, page) {\n      var url = \"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"], \"?client_id=\").concat(_settings__WEBPACK_IMPORTED_MODULE_0__[\"CLIENT_ID\"], \"&per_page\").concat(limit, \"&page=\").concat(page);\n      return fetch(url).then(function (response) {\n        return response.json();\n      });\n    }\n  }, {\n    key: \"likePhotos\",\n    value: function likePhotos(photo, like) {\n      var url = \"\".concat(_settings__WEBPACK_IMPORTED_MODULE_0__[\"BASE_URL\"]).concat(photo.id, \"/like/?client_id=\").concat(_settings__WEBPACK_IMPORTED_MODULE_0__[\"CLIENT_ID\"]);\n      return fetch(url, {\n        method: \"POST\"\n      }).then(function (response) {\n        return response.json();\n      });\n    }\n  }]);\n\n  return Request;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Request());\n\n//# sourceURL=webpack:///./src/Request.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gallary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallary */ \"./src/Gallary.js\");\n\nvar gallery = new _Gallary__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  limit: 10,\n  page: 1,\n  gallery_id: \"#gallery\",\n  nav_id: \"#navigation\"\n});\ngallery.renderList();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: BASE_URL, CLIENT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BASE_URL\", function() { return BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLIENT_ID\", function() { return CLIENT_ID; });\nvar BASE_URL = \"https://api.unsplash.com/photos\";\nvar CLIENT_ID = \"ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c\";\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ })

/******/ });
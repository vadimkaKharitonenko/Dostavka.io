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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_scss__WEBPACK_IMPORTED_MODULE_0__);

const scripts = {};

function importAllScripts(context) {
  context.keys().forEach(key => scripts[key] = context(key));
}

function importAllStyles(context) {
  context.keys().forEach(key => context(key));
}

importAllScripts(__webpack_require__(1));
importAllStyles(__webpack_require__(6));
importAllScripts(__webpack_require__(7));
importAllStyles(__webpack_require__(9));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./callback-form/callback-form.js": 2,
	"./clients/clients.js": 3,
	"./header/header.js": 4,
	"./success-form/success-form.js": 5
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const agreementCheckbox = document.querySelector('.js-agreement-checkbox');
const openCallbackBtns = document.querySelectorAll('.js-open-callback-form');
const callbackPopup = document.querySelector('.js-callback-form-popup');
const callbackPopupClose = document.querySelector('.js-callback-form-close');
const callbackForm = document.querySelector('.js-callback-form');

function openCallbackForm(e) {
  e.preventDefault();
  if (callbackPopup) callbackPopup.classList.remove('hidden');
}

function closeCallbackForm(e) {
  e.preventDefault();
  if (callbackPopup) callbackPopup.classList.add('hidden');
}

function openSuccess(e) {
  e.preventDefault();
  if (callbackPopup) callbackPopup.classList.add('hidden');
  if (document.querySelector('.js-success-form-popup')) document.querySelector('.js-success-form-popup').classList.remove('hidden');
}

if (agreementCheckbox) agreementCheckbox.onclick = () => agreementCheckbox.classList.toggle('is-checked');
if (openCallbackBtns) Array.from(openCallbackBtns).map(btn => btn.onclick = e => openCallbackForm(e));
if (callbackPopupClose) callbackPopupClose.onclick = e => closeCallbackForm(e);
if (callbackForm) callbackForm.onsubmit = e => openSuccess(e);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const clients = document.querySelectorAll('.js-client');

function onToggleClient(e) {
  if (e.target.classList.contains('.client')) return e.target.classList.toggle('is-expanded');
  return e.target.closest('.client').classList.toggle('is-expanded');
}

if (clients) Array.from(clients).map(client => {
  client.onclick = e => onToggleClient(e);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const navigationLinks = document.querySelectorAll('.js-navigation-link');

function smoothScrollToAnchor(e) {
  e.preventDefault();
  const target = document.querySelector('.' + e.target.getAttribute('data-target'));
  target.scrollIntoView({
    behavior: 'smooth'
  });
}

if (navigationLinks) Array.from(navigationLinks).map(link => link.onclick = e => smoothScrollToAnchor(e));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const successPopupClose = document.querySelector('.js-success-form-close');
const successPopup = document.querySelector('.js-success-form-popup');

function closeSuccessForm(e) {
  e.preventDefault();
  if (successPopup) successPopup.classList.add('hidden');
}

if (successPopupClose) successPopupClose.onclick = e => closeSuccessForm(e);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./advantages/advantages.scss": 14,
	"./banner/banner.scss": 16,
	"./button/button.scss": 20,
	"./callback-form/callback-form.scss": 22,
	"./clients/clients.scss": 24,
	"./donat/donat.scss": 26,
	"./footer/footer.scss": 28,
	"./header/header.scss": 30,
	"./indicators/indicators.scss": 32,
	"./our-clients/our-clients.scss": 34,
	"./plan/plan.scss": 36,
	"./price/price.scss": 41,
	"./success-form/success-form.scss": 44,
	"./targets/targets.scss": 46
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.scss": 48
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
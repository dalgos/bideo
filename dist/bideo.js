/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var polyfill = __webpack_require__(2);
var Bideo = function Bideo(config) {

  var CONFIG = Object.assign({
    selector: '',
    width: '1140px',
    step: 12,
    duration: 1000
  }, config);

  var bideo = document.querySelector(CONFIG.selector);
  var timer = 0;
  var currentStep = 0;
  var distance = parseInt(CONFIG.width, 10) / parseInt(CONFIG.step, 10);
  var timerInterval = Math.round(parseInt(CONFIG.duration, 10) / parseInt(CONFIG.step, 10));

  function play() {
    pause();
    timer = setTimeout(function timerHandler() {
      bideo.style.backgroundPositionX = ++currentStep * distance * -1 + 'px';
      if (currentStep < CONFIG.step) {
        timer = setTimeout(timerHandler, timerInterval);
      } else {
        currentStep = 0;
      }
    }, timerInterval);
  }

  function pause() {
    clearTimeout(timer);
  }

  return {
    play: play,
    pause: pause
  };
};

module.exports = Bideo;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  if (typeof Object.assign != 'function') {
    (function () {
      Object.assign = function (target) {
        'use strict';
        // 우리는 반드시 특정한 케이스에 대해서 확인해야 합니다.

        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];
          if (source !== undefined && source !== null) {
            for (var nextKey in source) {
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
        }
        return output;
      };
    })();
  }
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var window = __webpack_require__(1);
window.Bideo = __webpack_require__(0);
console.log(window.Bideo);

/***/ })
/******/ ]);
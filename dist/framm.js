/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var noop = __webpack_require__(0);
module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 280 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 498 : _ref$height,
      _ref$maxSequence = _ref.maxSequence,
      maxSequence = _ref$maxSequence === undefined ? 125 : _ref$maxSequence,
      _ref$sec = _ref.sec,
      sec = _ref$sec === undefined ? 50 : _ref$sec,
      _ref$column = _ref.column,
      column = _ref$column === undefined ? 35 : _ref$column,
      _ref$element = _ref.element,
      element = _ref$element === undefined ? document.getElementById('_frames') : _ref$element,
      _ref$complete = _ref.complete,
      complete = _ref$complete === undefined ? noop : _ref$complete;

  var curSeq = 0;
  var row = 0;
  var timer = void 0;

  var play = function play() {
    stop();
    show();
    timer = setInterval(function () {
      if (curSeq < maxSequence - 1) {
        curSeq++;
      } else {
        clearInterval(timer);
        complete();
        return false;
      }
      row = Math.floor(curSeq / column);
      element.style.backgroundPositionX = (curSeq - row * column) * width * -1 + 'px';
      element.style.backgroundPositionY = row * height * -1 + 'px';
    }, sec);
    return self;
  };

  var stop = function stop() {
    clearInterval(timer);
    curSeq = row = 0;
    return self;
  };

  var hide = function hide() {
    stop();
    element.style.display = 'none';
    return self;
  };

  var show = function show() {
    element.style.display = 'block';
    return self;
  };

  var self = {
    play: play,
    stop: stop,
    hide: hide,
    show: show
  };

  return self;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var noop = function noop() {};
exports.load = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$stateChange = _ref.stateChange,
      stateChange = _ref$stateChange === undefined ? noop : _ref$stateChange,
      _ref$callback = _ref.callback,
      callback = _ref$callback === undefined ? noop : _ref$callback,
      _ref$onProgress = _ref.onProgress,
      onProgress = _ref$onProgress === undefined ? noop : _ref$onProgress;

  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onreadystatechange = stateChange;
  req.onprogress = onProgress;
  req.onload = callback;
  req.onerror = function (err) {
    throw new Error(err);
  };
  req.send(null);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var noop = __webpack_require__(0);
module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$element = _ref.element,
      element = _ref$element === undefined ? document.body : _ref$element,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? noop : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === undefined ? noop : _ref$right;

  var beforePoint = [0, 0];
  var afterPoint = [0, 0];

  function eventHandler(evt) {
    if (evt.type === 'mouseenter') {
      beforePoint = [evt.pageX, evt.pageY];
    } else if (evt.type === 'mouseleave') {
      afterPoint = [evt.pageX, evt.pageY];
      beforePoint[0] < afterPoint[0] ? right() : left();
    }
  }

  element.addEventListener('mouseenter', eventHandler);
  element.addEventListener('mouseleave', eventHandler);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var animate = __webpack_require__(1);
var load = __webpack_require__(2);
var tracker = __webpack_require__(3);

(function (root) {
  root.mabijs = root.mabijs || {};
  root.mabijs = {
    framm: {
      animate: animate,
      load: load
    },
    tracker: tracker
  };
})(window);

/***/ })
/******/ ]);

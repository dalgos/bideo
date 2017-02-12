'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory;
  } else {
    root.Bideo = factory();
  }
})(window || undefined, function () {

  return function (config) {

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
});

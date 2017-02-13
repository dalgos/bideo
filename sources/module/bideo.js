const polyfill = require('./polyfill');
const Bideo = function (config) {

  const CONFIG = Object.assign({
    selector: '',
    width: '1140px',
    step: 12,
    duration: 1000
  }, config);

  const bideo = document.querySelector(CONFIG.selector);
  let timer = 0;
  let currentStep = 0;
  let distance = parseInt(CONFIG.width, 10) / parseInt(CONFIG.step, 10);
  let timerInterval = Math.round(parseInt(CONFIG.duration, 10) / parseInt(CONFIG.step, 10));

  function play() {
    pause();
    timer = setTimeout(function timerHandler() {
      bideo.style.backgroundPositionX = (++currentStep * distance * -1) + 'px';
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
    play,
    pause,
  };
};

module.exports = Bideo;

(function($, root) {

  var noop = function () {};

  root.mabijs = root.mabijs || {};
  root.mabijs = {
    animate: function (option) {

      var width = option.width || 280;
      var height = option.height || 498;
      var maxSequence = option.maxSequence || 125;
      var sec = option.sec || 50;
      var column = option.column || 35;
      var element = option.element || document.getElementById('_frames');
      var complete = option.complete || noop;

      var curSeq = 0;
      var row = 0;
      var timer;

      function play() {
        stop();
        show();
        timer = setInterval(function () {
          if (curSeq < maxSequence - 1) {
            curSeq ++;
          } else {
            clearInterval(timer);
            complete();
            return false;
          }
          row = Math.floor(curSeq / column);
          element.style.backgroundPositionX = ((curSeq - row * column) * width * -1) + 'px';
          element.style.backgroundPositionY = (row * height * -1) + 'px';
        }, sec);
        return this;
      }

      function stop() {
        clearInterval(timer);
        curSeq = row = 0;
        return this;
      }

      function hide() {
        stop();
        element.style.display = 'none';
        return this;
      }

      function show() {
        element.style.display = 'block';
        return this;
      }

      return {
        play: play,
        stop: stop,
        hide: hide,
        show: show
      };

    },
    tracker: function (options) {
      var element = options.element || document.body;
      var left = options.left || noop;
      var right = options.right || noop;
      var beforePoint = [0, 0];
      var afterPoint = [0, 0];

      function eventHandler(evt) {
        if (evt.type === 'mouseenter') {
          beforePoint = [evt.pageX, evt.pageY];
        } else {
          afterPoint = [evt.pageX, evt.pageY];
          beforePoint[0] < afterPoint[0] ? right() : left();
        }
      }

      $(element).on('mouseenter mouseleave', eventHandler);

    },
    load: function (options) {

      var urls = options.urls || [];
      var callback = options.callback || noop;
      var completed = [];

      if (urls.length) {
        for(var i = 0, loop = urls.length; i < loop; ++i) {
          var url = urls[i];
          $img = $('<img/>');
          $.get(url, function (idx) {
            completed.push(true);
            urls.length === completed.length && callback();
          });
          $img.attr('src', url);
        }
      }

    }
  };

}(jQuery, window));

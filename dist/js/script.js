'use strict';

(function ($, Drupal) {
  var $win = $(window);
  // set header color based on theme settings
  Drupal.behaviors.headerBGCOLOR = {
    attach: function attach(context, settings) {
      // eslint-disable-line no-unused-vars, object-shorthand
      var $el = $('.top-header');
      if ($el.hasClass('standard')) {
        $el.css('background', $el.data('bgcolor'));
      }
    }
  };

  // convert hex color codes to rgba
  function hexToRgbA(hex, opacity) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
  }

  // set fixed header based on theme setting sticky header
  $win.on('load scroll', function () {
    var $el = $('.top-header');
    if ($win.width() >= 992) {
      var scroll = $win.scrollTop();
      if ($el.data('fixed')) {
        if (scroll) {
          $el.addClass('header-fixed');
          $el.css('background', hexToRgbA($el.data('bgcolor'), 90));
          // if theme setting sticky header resize enable
          if ($el.data('resize')) {
            $el.addClass('header-resize');
          }
        } else {
          $el.removeClass('header-fixed header-resize');
          if ($el.hasClass('overlay')) {
            $el.css('background', '');
          }
        }
      }
    }
  });
})(jQuery, Drupal, document);
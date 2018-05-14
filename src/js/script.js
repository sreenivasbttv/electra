(function ($, Drupal, document) {
  const $win = $(window);
  // set header color based on theme settings
  Drupal.behaviors.headerBGCOLOR = {
    attach: function (context, settings) {
      const $el = $('.top-header');
      if ($el.hasClass('standard')) {
        $el.css('background', $el.data('bgcolor'));
      }
    },
  };

  // convert hex color codes to rgba
  function hexToRgbA(hex, opacity) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
  }

  // set fixed header based on theme setting sticky header
  $win.on('load scroll', function () {
    const $el = $('.top-header');
    if ($win.width() >= 992) {
      const scroll = $win.scrollTop();
      if ($el.data('fixed')) {
        if (scroll) {
          $el.addClass('header-fixed');
          $el.css('background', hexToRgbA($el.data('bgcolor'), 90));
          // if theme setting sticky header resize enable
          if ($el.data('resize')) {
            $el.addClass('header-resize');
          }
        }
        else {
          $el.removeClass('header-fixed header-resize');
          if ($el.hasClass('overlay')) {
            $el.css('background', '');
          }
        }
      }
    }
  });
})(jQuery, Drupal, document);

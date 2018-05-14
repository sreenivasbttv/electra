(function ($, Drupal, document) {
  'use strict';
  
  var $win = $(window);
  var $doc = $(document);

  // set header color based on theme settings
  Drupal.behaviors.headerBGCOLOR = {
    attach: function (context, settings) {
      var $el = $(".top-header");
      if ($el.hasClass('standard')) {
        $el.css("background", $el.data("bgcolor"));
      }
    }
  };

  // convert hex color codes to rgba
  function hexToRgbA(hex,opacity){
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

  // set fixed header based on theme setting sticky header
  $win.on('load scroll', function () {
    if ($win.width() >= 992) {
      var scroll = $win.scrollTop();
      var $el = $(".top-header");
      if (Boolean($el.data("fixed"))) {
        if (scroll) {
          $el.addClass("header-fixed");
          $el.css("background", hexToRgbA($el.data("bgcolor"),90));
          // if theme setting sticky header resize enable
          if (Boolean($el.data("resize"))) {
            $el.addClass("header-resize");
          }
        } else {
          $el.removeClass("header-fixed header-resize");
          if ($el.hasClass('overlay')) {
            $el.css("background", '');
          }
        }
      }
    }
  });
})(jQuery, Drupal, document);

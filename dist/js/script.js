'use strict';

jQuery(function ($) {
  'use strict';

  var $win = $(window);
  var $doc = $(document);

  // set fixed header based on theme setting sticky header
  $win.on('scroll', function () {
    if ($win.width() >= 992) {
      var scroll = $win.scrollTop();
      var $el = $(".top-header");
      if (Boolean($el.data("fixed"))) {
        if (scroll) {
          $el.addClass("header-fixed");
          // if theme setting sticky header resize enable
          if (Boolean($el.data("resize"))) {
            $el.addClass("header-resize");
          }
        } else {
          $el.removeClass("header-fixed header-resize");
        }
      }
    }
  });
});
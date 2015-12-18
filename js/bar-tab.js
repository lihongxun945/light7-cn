/* global $:true */
+function ($) {
  "use strict";
  $(document).on("click", ".tab-item", function(e) {
    var $target = $(e.currentTarget);
    if(!$target.hasClass("tab-link")) {
      $target.parent().find(".active").removeClass("active");
      $target.addClass("active");
    }
  });

  var highlight = function(e, pageId) {
    var $tab = $(".bar-tab .tab-item[href='#"+pageId+"']");
    $tab.parent().find(".active").removeClass("active");
    $tab.addClass("active");
  };
  $(document).on("pageInit", highlight);
  $(document).on("pageReinit", highlight);

  $.showToolbar = function(show) {
    $(document.body)[show ? "removeClass" : "addClass"]("tabbar-hidden");
  };

}($);

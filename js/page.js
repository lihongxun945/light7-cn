/* global $:true */
+ function($) {
  "use strict";
  
  $.getCurrentPage = function() {
    return $(".page")[0] || document.body;
  };
}($);

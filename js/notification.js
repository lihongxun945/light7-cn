/* ===============================================================================
************   Notification ************
=============================================================================== */
/* global $:true */
+function ($) {
  "use strict";

  var defaults;

  var show = function() {
  };

  var hide = function() {
  };

  $.notification = $.noti = function(params) {
    params = $.extend({}, defaults, params);
    var noti = $(".notification");
    if(!noti[0]) noti = $('<div class="notification"></div>').appendTo(document.body);

    noti.html(params.tpl);

    noti.show();

    noti.addClass("notification-in");
  };

  defaults = $.noti.prototype.defaults = {
    title: undefined,
    text: undefined,
    image: undefined,
    tpl:  '<div class="notification-inner">' +
            '<div class="notification-media">' +
            'dasdada' +
            '</div>' +
            '<div class="notification-content">' +
            '</div>' +
          '</div>'
  };

}($);

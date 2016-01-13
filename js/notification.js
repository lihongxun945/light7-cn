/* ===============================================================================
************   Notification ************
=============================================================================== */
/* global $:true */
+function ($) {
  "use strict";

  var noti, defaults, timeout, start, diff;

  var touchStart = function(e) {
    var p = $.getTouchPosition(e);
    start = p;
    noti.addClass("touching");
  }
  var touchMove = function(e) {
    if(!start) return false;
    var p = $.getTouchPosition(e);
    diff = p.y - start.y;
    if(diff > 0) {
      diff = Math.sqrt(diff);
    }

    noti.css("transform", "translate3d(0, "+diff+"px, 0)");
  }
  var touchEnd = function(e) {
    noti.removeClass("touching");
    noti.attr("style", "");
    if(diff < 0 && (Math.abs(diff) > noti.height()/2)) {
      $.closeNotification();
    }

    start = false;
  }

  var attachEvents = function(el) {
    el.on($.touchEvents.start, touchStart);
    el.on($.touchEvents.move, touchMove);
    el.on($.touchEvents.end, touchEnd);
  }

  $.notification = $.noti = function(params) {
    if(typeof params === typeof "a") {
      params = {
        text: params
      };
    }
    params = $.extend({}, defaults, params);
    noti = $(".notification");
    if(!noti[0]) { // create a new notification
      noti = $('<div class="notification"></div>').appendTo(document.body);
      attachEvents(noti);
    }

    noti.html(params.tpl);

    noti.show();

    noti.addClass("notification-in");

    var startTimeout = function() {
      if(timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      timeout = setTimeout(function() {
        if(noti.hasClass("moving")) {
          startTimeout();
        } else {
          $.closeNotification();
        }
      }, params.time);
    }

  };

  $.closeNotification = function() {
    timeout && clearTimeout(timeout);
    timeout = null;
    $(".notification").removeClass("notification-in").transitionEnd(function() {
      $(this).remove();
    });
  }

  defaults = $.noti.prototype.defaults = {
    title: undefined,
    text: undefined,
    image: undefined,
    time: 4000,
    tpl:  '<div class="notification-inner">' +
            '<div class="notification-media">' +
            'dasdada' +
            '</div>' +
            '<div class="notification-content">' +
            '</div>' +
            '<div class="notification-handle-bar"></div>' +
          '</div>'
  };

}($);

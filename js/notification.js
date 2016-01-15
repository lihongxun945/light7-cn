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
    e.preventDefault();
    e.stopPropagation();
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
    if(diff < 0 && (Math.abs(diff) > noti.height()*.3)) {
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

    noti.off("click");
    if(params.onClick) noti.on("click", function() {
      params.onClick(params.data);
    });

    noti.html($.t7.compile(params.tpl)(params));

    noti.show();

    noti.addClass("notification-in");
    noti.data("params", params);

    var startTimeout = function() {
      if(timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      timeout = setTimeout(function() {
        if(noti.hasClass("touching")) {
          startTimeout();
        } else {
          $.closeNotification();
        }
      }, params.time);
    }

    startTimeout();

  };

  $.closeNotification = function() {
    timeout && clearTimeout(timeout);
    timeout = null;
    var noti = $(".notification").removeClass("notification-in").transitionEnd(function() {
      $(this).remove();
    });

    if(noti[0]) {
      var params = $(".notification").data("params");
      if(params && params.onClose) {
        params.onClose(params.data);
      }
    }
  }

  defaults = $.noti.prototype.defaults = {
    title: undefined,
    text: undefined,
    media: undefined,
    time: 4000,
    onClick: undefined,
    onClose: undefined,
    data: undefined,
    tpl:  '<div class="notification-inner">' +
            '{{#if media}}<div class="notification-media">{{media}}</div>{{/if}}' +
            '<div class="notification-content">' +
            '{{#if title}}<div class="notification-title">{{title}}</div>{{/if}}' +
            '{{#if text}}<div class="notification-text">{{text}}</div>{{/if}}' +
            '</div>' +
            '<div class="notification-handle-bar"></div>' +
          '</div>'
  };

}($);

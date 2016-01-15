/* global $:true */
+function ($) {
  "use strict";

  var Index = function(params) {
    this.params = params;
    this.tpl = $.t7(this.params.indexListTemplate).compile();
  };

  Index.prototype.render = function(list) {
    this.list = $(list || ".list");
    this.draw();
  };

  Index.prototype.draw = function() {
    if(this.indexList) this.indexList.remove();
    this.titles = this.list.find(this.params.titleSelector);
    var titleTexts = this.titles.map(function(i, t) {
      return $(t).data("index") || $(t).text();
    }).toArray();

    this.indexList = $("<ul class='index-list-bar'></ul>").appendTo(this.list.parents(".page"));
    this.indexList.html(this.tpl({indexes: titleTexts}));
    this.indexList.on($.touchEvents.start, $.proxy(this.touchStart, this));
    this.indexList.on($.touchEvents.start + " " + $.touchEvents.move, $.proxy(this.touchMove, this));
    this.indexList.on($.touchEvents.end, $.proxy(this.touchEnd, this));

    this.content = this.list.parents(".content");
  };

  Index.prototype.touchStart = function() {
    this.pageOffsetTop = this.content.offset().top;
    this.touching = true;
  };

  Index.prototype.touchMove = function(e) {
    if(!this.touching) return;
    e.preventDefault();
    var li = this.getElementOnTouch($.getTouchPosition(e));
    if(!li) return;
    var title = this.titles.eq(li.data("index"));
    var titleTop = title.parent().offset().top; // if a element has class list-group-title, it will be sticky in safari, so it's offset is not correct
    var top =  titleTop - this.pageOffsetTop + this.content.scrollTop();
    this.content.scrollTop(top);
  };

  Index.prototype.touchEnd = function() {
    this.touching = false;
  };

  Index.prototype.getElementOnTouch = function(position) {
    var result = null;
    this.indexList.find("li").each(function() {
      if(result) return;
      var $this = $(this);
      var offset = $this.offset();
      if(offset.top < position.y && offset.top + $this.outerHeight() > position.y) {
        result = $this;
      }
    });
    return result;
  };

  $.fn.indexList = function(params) {
    return this.each(function() {
      if(!this) return;

      var list = $(this);

      var index = list.data("index");

      if(!index) {
        params = $.extend({}, $.fn.indexList.prototype.defaults, params);
        index = new Index(params).render(list);
        list.data("index", index);
      }

      return index;

    });
  };


  $.fn.indexList.prototype.defaults = {
    titleSelector: ".list-group-title",
    indexListTemplate: "{{#indexes}}<li data-index={{@index}}><strong>{{this}}</strong></li>{{/indexes}}"
  };

  $.initIndexList = function(selector) {
    var container = $(selector);
    if(container.hasClass(".contacts-block")) {
      container.indexList();
    } else {
      container.find(".contacts-block").indexList();
    }
  };

}($);

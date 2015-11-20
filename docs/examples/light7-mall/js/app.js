$(document).on("pageInit", "#page-home", function(e, id, $page) {

  $(document).on('refresh', '.page-home',function(e) {
    setTimeout(function() {
      $($("#index-tpl").html()).insertBefore($(".list a").eq(0));
      $.pullToRefreshDone('.page-home');
    }, 2000);
  });

  var loading = false;
  $(document).on('infinite', '.page-home',function() {
    if(loading) return;
    loading = true;
    setTimeout(function() {
      $(".page-home .list").append($($("#index-tpl").html()));
      loading = false;
    }, 2000);
  });

});

$(document).on("pageInit", "#page-goods", function(e, id, $page) {
  var loading = false;
  $(document).on('infinite', '.page-goods',function() {
    if(loading) return;
    loading = true;
    setTimeout(function() {
      $(".page-goods ul").append($(".page-goods ul").html());
      loading = false;
    }, 2000);
  });
});

var $dark = $("#dark-switch").on("change", function() {
  $(document.body)[$dark.is(":checked") ? "addClass" : "removeClass"]("theme-dark");
});

$.init();

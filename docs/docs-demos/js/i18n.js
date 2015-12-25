$(function() {
  $(document).on("pageInit", function() {
    $("#birthday").calendar({
      dateFormat: "yy-mm-dd",
      onChange: function(p, v, d) {
        console.log(p, v, d);
      }
    });
  });
  $(document).on("click", ".show-modal", function() {
    $.confirm("我的按钮是中文");
  });
  $.init();
});

$(document).on("click", "#show-noti", function() {
  $.notification({
    title: "Baby",
    text: "I miss you",
    media: "<img src='/assets/img/i-wechat.png'>",
    data: "123",
    onClick: function(data) {
      $.alert("Click" + data);
    },
    onClose: function(data) {
      $.alert("Close "+data);
    }
  });
});
$(document).on("click", "#close-noti", function() {
  $.closeNotification();
});

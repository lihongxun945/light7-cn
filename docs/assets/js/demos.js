$(function () {
  'use strict';

  $(document).on("pageInit", "#page-ptr", function(e, id, page) {
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 2s timeout
      setTimeout(function() {
        var cardHTML = '<div class="card">' +
          '<div class="card-header">Title</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">Contents Contents Contents Contents Contents Contents Contents Contents Contents ' +
          '</div>' +
          '</div>' +
          '</div>';

        $content.find('.card-container').prepend(cardHTML);
        // Done
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });

  $(document).on("pageInit", "#page-infinite-scroll", function(e, id, page) {
    function addItems(number, lastIndex) {
      var html = '';
      for (var i = 0; i < 20; i++) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item</div></div></li>';
      }
      $('.infinite-scroll .list-container').append(html);
    }
    var loading = false;
    $(page).on('infinite', function() {

      if (loading) return;

      loading = true;

      setTimeout(function() {
        loading = false;

        addItems();
      }, 1000);
    });
  });


  $(document).on("pageInit", "#page-photo-browser", function(e, id, page) {
    var myPhotoBrowserStandalone = $.photoBrowser({
      photos : [
        '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
      ]
    });
    $(page).on('click','.pb-standalone',function () {
      myPhotoBrowserStandalone.open();
    });
    /*=== Popup ===*/
    var myPhotoBrowserPopup = $.photoBrowser({
      photos : [
        '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
      ],
      type: 'popup'
    });
    $(page).on('click','.pb-popup',function () {
      myPhotoBrowserPopup.open();
    });
    /*=== 有标题 ===*/
    var myPhotoBrowserCaptions = $.photoBrowser({
      photos : [
        {
          url: '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
          caption: 'Caption 1 Text'
        },
        {
          url: '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
          caption: 'Second Caption Text'
        },
        // 这个没有标题
        {
          url: '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
        },
      ],
      theme: 'dark',
      type: 'standalone'
    });
    $(page).on('click','.pb-standalone-captions',function () {
      myPhotoBrowserCaptions.open();
    });
  });
  

  //对话框
  $(document).on("pageInit", "#page-modal", function(e, id, page) {
    var $content = $(page).find('.content');
    $content.on('click','.alert-text',function () {
      $.alert('Hello Fool');
    });

    $content.on('click','.alert-text-title', function () {
      $.alert('Alter message', 'title!');
    });

    $content.on('click', '.alert-text-title-callback',function () {
      $.alert('Custom Alert message', 'custom alert title!', function () {
        $.alert('Yout clicked OK button!')
      });
    });
    $content.on('click','.confirm-ok', function () {
      $.confirm('Are you sure?', function () {
        $.alert('You clicked OK button!');
      });
    });
    $content.on('click','.prompt-ok', function () {
      $.prompt("What's your name?", function (value) {
        $.alert('Your name is "' + value + '"');
      });
    });
  });

  //操作表
  $(document).on("pageInit", "#page-action", function(e, id, page) {
    $(page).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: 'Please Choose',
          label: true
        },
        {
          text: 'Potato',
          bold: true,
          color: 'danger',
          onClick: function() {
            $.alert("You choosed Potato");
          }
        },
        {
          text: 'Tomato',
          color: "success",
          onClick: function() {
            $.alert("You choosed Tomato");
          }
        }
      ];
      var buttons2 = [
        {
          text: 'Cancel',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
    }); 
  });

  $(document).on("pageInit", "#page-preloader", function(e, id, page) {
    $(page).on('click','.open-preloader-title', function () {
      $.showPreloader('Loading...')
      setTimeout(function () {
        $.hidePreloader();
      }, 2000);
    });
    $(page).on('click','.open-indicator', function () {
      $.showIndicator();
      setTimeout(function () {
        $.hideIndicator();
      }, 2000);
    });
  });


  $(document).on("click", ".select-color", function(e) {
    var b = $(e.target);
    document.body.className = "theme-" + (b.data("color") || "");
    b.parent().find(".active").removeClass("active");
    b.addClass("active");
  });

  //picker
  $(document).on("pageInit", "#page-picker", function(e, id, page) {
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
        <button class="button button-link pull-left">\
      Btn\
      </button>\
      <button class="button button-link pull-right close-picker">\
      OK\
      </button>\
      <h1 class="title">Title</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
        }
      ]
    });
    $("#picker-name").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">Choose Name</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['Mr', 'Ms']
        },
        {
          textAlign: 'center',
          values: ['Amy', 'Bob', 'Cat', 'Dog', 'Ella', 'Fox', 'Google']
        }
      ]
    });
  });
  $(document).on("pageInit", "#page-datetime-picker", function(e) {
    $("#datetime-picker").datetimePicker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">datetime</h1>\
      </header>'
    });
  });

  $(document).on("pageInit", "#page-city-picker", function(e) {
    $("#city-picker").cityPicker({});
  });

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

  $.init();
});

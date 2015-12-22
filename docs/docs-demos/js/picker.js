$(function() {
  $(document).on("pageInit", function() {
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">Choose your phone</h1>\
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
      <h1 class="title">Your Name</h1>\
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
    $("#datetime-picker").datetimePicker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">Datetime</h1>\
      </header>'
    });
    $("#city-picker").cityPicker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">Address</h1>\
      </header>'
    });
  });
  $.init();
});

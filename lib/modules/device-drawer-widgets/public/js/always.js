apos.define('device-drawer-widgets', {
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
      self.play = function($widget, data, options) {
          //The actual functions
          $widget.click('.title', function(e) {
            if ($widget.find('.deviceDrawer').hasClass('active')){
              $('.deviceDrawer.active').removeClass('active')
            } else {
              $('.deviceDrawer.active').removeClass('active')
              $widget.find('.deviceDrawer').addClass('active');
            }
          var icon = $widget.find('.title i')
          icon.toggleClass('fa-caret-down');
          icon.toggleClass('fa-caret-up');
          // Stop bubbling and default behavior for jQuery event
          return false;
        });
      };
    }
  });
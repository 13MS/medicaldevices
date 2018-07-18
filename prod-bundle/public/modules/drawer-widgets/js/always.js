apos.define('drawer-widgets', {
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
      self.play = function($widget, data, options) {
          //The actual functions
          $widget.find('.title').click(function(e) {
          if ($widget.find('.drawer').hasClass('active')){
            $('.drawer.active').removeClass('active')
          } else {
            $('.drawer.active').removeClass('active')
            $widget.find('.drawer').addClass('active');
          }
          $widget.find('i').toggleClass('fa-caret-down');
          $widget.find('i').toggleClass('fa-caret-up');
          // Stop bubbling and default behavior for jQuery event
          return false;
        });
      };
    }
  });
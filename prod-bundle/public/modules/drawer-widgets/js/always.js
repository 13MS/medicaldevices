apos.define('drawer-widgets', {
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
      self.play = function($widget, data, options) {
          //The actual functions
        $widget.find('.title').click(function() {
          $widget.find('.content').toggle();
          $widget.find('.title i').toggleClass('fa-caret-down');
          $widget.find('.title i').toggleClass('fa-caret-up');
          // Stop bubbling and default behavior for jQuery event
          return false;
        });
      };
    }
  });
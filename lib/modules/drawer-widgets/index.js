module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Drawer',
    addFields: [
      {
        name: 'question',
        type: 'string',
        label: 'Question',
        required: true
      },
        {
          name: 'answer',
          type: 'singleton',
          widgetType: 'apostrophe-rich-text',
          label: 'Answer',
          options: {
            toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ],
            styles: [
                { name: 'Paragraph', element: 'p' }
            ]
            },
          required: true
        },
    ],
    construct: function(self, options) {
      var superPushAssets = self.pushAssets;
      self.pushAssets = function() {
        superPushAssets();
        self.pushAsset('stylesheet', 'always', { when: 'always' });
        self.pushAsset('script', 'always', { when: 'always' });
      };
    }
  };
module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Device Drawer',
    addFields: [
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        required: true
      },
        {
          name: 'leftCol',
          type: 'singleton',
          widgetType: 'apostrophe-images',
          label: 'Left Image',
          contextual: true
        },
        {
          name: 'rightCol',
          type: 'area',
          label: 'Right Content',
          contextual: true
        }
    ],
    construct: function(self, options) {
      var superPushAssets = self.pushAssets;
      self.pushAssets = function() {
        superPushAssets();
        self.pushAsset('stylesheet', 'always', { when: 'always' });
        self.pushAsset('script', 'always', { when: 'always' });
      }
    }
  };
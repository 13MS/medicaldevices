module.exports = {
    beforeConstruct: function(self, options) {
      options.addFields = [
        {
            type: 'attachment',
            name: 'banner',
            label: 'Banner',
            group: 'images'
        },
        {
          type: 'attachment',
          name: 'facebookImage',
          label: 'Facebook Image',
          group: 'images'
        }
      ].concat(options.addFields || []);
    }
  };
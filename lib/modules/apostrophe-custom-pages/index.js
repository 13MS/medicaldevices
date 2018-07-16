module.exports = {
    beforeConstruct: function(self, options) {
      options.addFields = [
        {
            type: 'attachment',
            name: 'banner',
            label: 'Banner',
            group: 'images'
        }
      ].concat(options.addFields || []);
    }
  };
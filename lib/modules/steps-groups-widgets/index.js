module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Steps',
    addFields: [
      {
        type: 'area',
        name: 'steps',
        label: 'Steps',
        options: {
          widgets: {
            'steps': {}
          }
        }
      }
    ]
  };
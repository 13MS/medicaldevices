module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Steps',
    addFields: [
      {
        type: 'boolean',
        name: 'numbered',
        label: 'Numbered'
      },
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
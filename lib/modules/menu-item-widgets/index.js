module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Menu Item',
    addFields: [
      {
        name: 'main_item',
        type: 'singleton',
        label: 'Main Item',
        widgetType: 'page-link',
        required: true
      },
      {
        name: 'secondary_items',
        type: 'area',
        label: 'Secondary Items',
        options: {
          widgets: {
            'page-link': {}
          }
        }
      }
    ]
  };
module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Action Box',
    addFields: [
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        required: true
      },
      {
        name: 'image',
        label: 'Image',
        type: 'attachment',
        group: 'images'
      },
        {
          name: 'link',
          label: 'Link',
          type: 'singleton',
          widgetType: 'page-link'
        }
    ]
  };
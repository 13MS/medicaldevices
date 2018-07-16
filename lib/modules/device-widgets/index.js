module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Device',
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
        type: 'singleton',
        widgetType: 'apostrophe-images',
        options: {
          size: 'full',
          noHeight: true
        }
      },
        {
          name: 'description',
          label: 'Description',
          type: 'singleton',
          widgetType: 'apostrophe-rich-text',
          options: {
            toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
          }
        }
    ]
  };
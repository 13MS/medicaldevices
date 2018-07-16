module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Step',
    addFields: [
      {
        name: 'title',
        type: 'string',
        label: 'Title',
        required: true
      },
      {
        type: 'area',
        name: 'content',
        label: 'Content',
        options: {
          widgets: {
            'apostrophe-rich-text': {
              toolbar: [ 'Bold', 'Italic' ]
            },
            'link': {},
            'page-link': {}
          }
        }
      }
    ]
  };
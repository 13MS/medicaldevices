module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Step',
    addFields: [
      {
        name: 'title',
        type: 'string',
        label: 'Title'
      },
      {
        type: 'area',
        name: 'content',
        label: 'Content',
        options: {
          widgets: {
            'apostrophe-rich-text': {
              toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
            },
            'link': {},
            'page-link': {}
          }
        }
      }
    ]
  };
module.exports = {
    extend: 'apostrophe-widgets',
    label: 'Link to a Page',
    addFields: [
      {
        name: '_page',
        type: 'joinByOne',
        withType: 'apostrophe-page',
        label: 'Page',
        required: true,
        idField: 'pageId',
        filters: {
            projection: {
              title: 1,
              slug: 1
            }
          }
      },{
        name: 'anchor',
        type: 'string',
        label: 'Anchor Link'
      },{
        name: 'custom_name',
        type: 'string',
        label: 'Custom Name'
      }
    ]
  };
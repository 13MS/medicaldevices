module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Image Link',
  addFields: [
    {
      name: 'url',
      type: 'url',
      label: 'URL',
      required: true
    },
    {
      name: 'image',
      type: 'singleton',
      label: 'Image',
      widgetType: 'apostrophe-images',
      required: true
    }
  ]
};
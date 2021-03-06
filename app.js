var path = require('path');
require('dotenv').config();

var apos = require('apostrophe')({
  shortName: 'medical-devices',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    'medical-theme' : {},
    'greybox-widgets': {},
    'link-widgets': {},
    'image-link-widgets': {},
    'page-link-widgets': {},
    'device-drawer-widgets': {}, 
    'drawer-widgets': {},
    'steps-widgets': {},
    'steps-groups-widgets': {},
    'device-widgets': {},
    'action-box-widgets': {},
    'youtube-player-widgets': {},
    'menu-item-widgets': {},

    //SEO Module
    'apostrophe-seo': {},

    //Blog modules
    'apostrophe-blog': {contextual: true},
    'apostrophe-blog-pages': {},
    'apostrophe-blog-widgets': {},

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },


    //Adding settings to pages
    'default-pages': {
      extend: 'apostrophe-custom-pages',
      // Must match the `name` given when configuring `types`
      // for apostrophe-pages
      name: 'default',
      addFields: [
        {
          name: 'dark',
          type: 'boolean',
          label: 'Dark Mode'
        }
      ]
    },

     // This configures our default page template
     'apostrophe-pages': {
      filters: {
        // Grab our ancestor pages, with two levels of subpages
        ancestors: {
          children: {
            depth: 2
          }
        },
        // We usually want children of the current page, too
        children: true
      },
      types: [
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'act',
          label: 'Take Action'
        },
        {
          name: 'about',
          label: 'About'
        },
        {
          name: 'resources',
          label: 'Resources'
        },
        {
          name: 'apostrophe-blog-page',
          label: 'Blog'
        },
      ]
    },
    'apostrophe-attachments': {
      uploadfs: {
        backend: 's3',
        secret: process.env.S3SECRET,
        key: process.env.S3KEY,
        bucket: 'medical-devices',
        region: 'us-east-2',
        https: true
      }
    }

  }
});

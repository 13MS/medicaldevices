var path = require('path');

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
    'page-link-widgets': {},
    'device-drawer-widgets': {}, 
    'drawer-widgets': {},
    'steps-widgets': {},
    'steps-groups-widgets': {},
    'device-widgets': {},
    'action-box-widgets': {},


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
        secret: 'EK2V9G2y+6bXx6y7No2tpVJ57l7dFnLRN38SPl7b',
        key: 'AKIAJOZY4ZMIJUUA2Z2A',
        bucket: 'medical-devices',
        region: 'us-east-2',
        https: true
      }
    }

  }
});

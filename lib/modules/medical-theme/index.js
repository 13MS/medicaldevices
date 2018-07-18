// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x

module.exports = {
  construct : function(self,options){
    // Every asset you have in public folder
    self.pushAsset('script', 'facebookSDK');
    self.pushAsset('script', 'slick');
    self.pushAsset('script', 'jquery.waypoints.min');
    self.pushAsset('script', 'jquery.counterup.min');
    self.pushAsset('script', 'parallax.min');
    self.pushAsset('script', 'site');
    self.pushAsset('stylesheet', 'site');
  }
};

define(function() {

  var LeapView = require("leap/view");
  var template = require("tpl!templates/main");
  var _ = require("underscore");

  var Pages = {
    home: require("views/pages/home"),
    about: require("views/pages/about"),
    contact: require("views/pages/contact"),
    notfound: require("views/pages/notfound")
  };

  return LeapView.extend({
    
    template: template,

    subviewCreators: {
      sidebar: function() {
        return new SidebarView();
      }
    },

    transitionTo: function(pageName, args) {

      var page = new Pages[pageName](args);

      var enter = function() {
        this.createSubview("page", page);
        page.enter();
        sidebar.update(pageName);
      };

      //If there is already a page subview, make it exit first
      if (this.subviews.page) {
        this.subviews.page.exit().then(_.bind(enter, this));
      }
      //Otherwise just enter the new one straight away
      else {
        enter();
      }
    }

  });

});
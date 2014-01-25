define(function() {

  var Backbone = require("backbone");
  var mediator = require("leap/mediator");
  var MainView = require("views/main");
  var Pages = {
    home: require("views/home"),
    about: require("views/about"),
    contact: require("views/contact")
  };

  var Router = Backbone.Router.extend({

    routes: {
      "": "home",
      "*notfound": "notfound"
    },

    notfound: function() {

    }

  });

});
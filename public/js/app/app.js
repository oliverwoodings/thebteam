define(function() {

  var Backbone = require("backbone");
  var mediator = require("leap/mediator");
  var MainView = require("views/main");

  var mainView = new MainView();

  var Router = Backbone.Router.extend({

    routes: {
      "": "home",
      "notfound": "notfound",
      "about": "about",
      "contact": "contact",
    },

    about: function() {
      mainView.transitionTo("about");
    },

    home: function() {
      var home = new Pages.Home();
      mainView.transitionTo(Home);
    },

    contact: function() {
      var contact = new Pages.Contact();
      mainView.transitionTo(contact);
    },

    notfound: function() {
      var notfound = new Pages.Notfound();
      mainView.transitionTo(notfound);
    }

  });

  mainView.render();

  mediator.router = window.router = new Router();
  Backbone.history.start({pushState: false});

});
define(function() {

  require.config({
    baseUrl: "js",

    paths: {
      //App shortcuts
      "templates": "app/templates",
      "views": "app/views",

      //3rd party
      "jquery": "bower_components/jquery/jquery",
      "backbone": "bower_components/backbone/backbone",
      "underscore": "bower_components/underscore/underscore",
      "when": "bower_components/when/when",
      "requirejs": "bower_components/requirejs/require",
      "tpl": "bower_components/requirejs-tpl/tpl",
      "backbone.stickit": "bower_components/backbone.stickit/backbone.stickit",
      "backbone.eventbinder": "bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder.min",
      "leap": "bower_components/leap",
      "text": "bower_components/requirejs-text/text",
    },

    shim: {
      "underscore": {
        exports: "_"
      },
      "backbone": {
        deps: [ "jquery", "underscore" ],
        exports: "Backbone"
      },
      "backbone.stickit": {
        deps: [ "backbone", "jquery" ]
      }
    }
  });

  require(["app/app"]);

});
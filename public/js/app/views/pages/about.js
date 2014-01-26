define(function() {

  var Page = require("views/page");
  var template = require("tpl!templates/pages/about");

  return Page.extend({

    template: template

  });

});
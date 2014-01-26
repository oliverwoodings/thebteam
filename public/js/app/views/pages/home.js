define(function() {

  var Page = require("views/page");
  var template = require("tpl!templates/pages/home");

  return Page.extend({

    template: template

  });

});
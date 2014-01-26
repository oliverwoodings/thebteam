define(function() {

  var Page = require("views/page");
  var template = require("tpl!templates/pages/notfound");

  return Page.extend({

    template: template

  });

});
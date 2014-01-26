define(function() {

  var LeapView = require("leap/view");
  var when = require("when");

  return LeapView.extend({

    enter: function() {
      var dfd = when.defer();
      this.$el.fadeIn(500, dfd.resolve);
      return dfd.promise();
    },

    exit: function() {
      var dfd = when.defer();
      this.$el.fadeOut(500, dfd.resolve);
      return dfd.promise();
    }

  });

});
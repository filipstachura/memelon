MemesIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('memes_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});

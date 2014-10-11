MemesIndexController = RouteController.extend({
  waitOn: function () {
    return [Meteor.subscribe('memes_index'), Meteor.subscribe('circles_index')];
  },

  data: function () {
    return {
      circles: Circles.find({}, { sort: { name: 1 } })
    }
  },

  action: function () {
    this.render();
  }
});

MemesIndexController = RouteController.extend({
  template: 'MemesIndex',
 
  waitOn: function () {
    return [Meteor.subscribe('memes_index'), Meteor.subscribe('circles_index')];
  },

  data: function () {
    if (this.ready()) {
      var circleId = this.params._id;
      if (!circleId) {
        circleId = Circles.findOne({ name: 'public' })._id
      }

      return {
        circles: Circles.find({}, { sort: { name: 1 } }),
        items: function () {
          return Memes.find(
            {
              circle: circleId,
            }, {
              sort: { createdAt: -1 }
            });
        }
      }
    }
  },

  action: function () {
    this.render();
  }
});

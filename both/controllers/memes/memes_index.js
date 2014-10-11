MemesIndexController = RouteController.extend({
  template: 'MemesIndex',
 
  waitOn: function () {
    var circleId = this.params._id;
    console.log("circleId" + circleId);
    return [Meteor.subscribe('memes_index', circleId), Meteor.subscribe('circles_index')];
  },

  data: function () {
    if (this.ready()) {
      var circleId = this.params._id;
      var currentCircleName = "All newest";
      if (circleId) {
        currentCircleName = '#' + Circles.findOne({_id: circleId}).name;
      }

      return {
        currentCircleName: currentCircleName,
        circles: Circles.find({}, { sort: { name: 1 } }),
        items: function () {
          return Memes.find({}, { sort: { createdAt: -1 } });
        }
      }
    }
  },

  action: function () {
    this.render();
  }
});

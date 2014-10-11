Meteor.startup( function () {
  if(Circles.find().count() > 0) return;

  for(var i = 0; i < 3; i++){
    Circles.insert({
      name: "Circle " + i,
      createdAt: new Date
    });
  }
});

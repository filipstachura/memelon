
/*****************************************************************************/
/* CreateMeme: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateMeme.events({
  'keyup input': function (event, template) {
      var topText = template.find('#top-line').value.toUpperCase();
      var bottomText = template.find('#bottom-line').value.toUpperCase();
      Meme(Session.get("newPicture"), 'preview-canvas', topText, bottomText);
  },
  'click .circle-button': function(event, template) {
    Session.set("addToCircleId", $(event.target).attr("value"));
  },
  'click #save-meme': function(event, template) {
      var topText = template.find('#top-line').value;
      var bottomText = template.find('#bottom-line').value;
      var imageBase64 = template.find("#preview-canvas").toDataURL("image/jpeg");
      Memes.insert({
        picture: imageBase64,
        topText: topText,
        bottomText: bottomText,
        createdAt: new Date,
        circle: Session.get("addToCircleId")
      });
      Router.go("memes.index");
  }
});

Template.CreateMeme.helpers({
   circles: function () {
     return Circles.find({}, { sort: { createdAt: -1 } });
   },
   selectedCircle: function () {
     var circleId = Session.get("addToCircleId");
     var circle = null;
     if(!circleId){
       circle = Circles.findOne();
       circleId = circle._id;
       Session.set("addToCircleId", circleId);
     } else {
       circle = Circles.findOne({_id: circleId});
     }
     return circle;
   }
});

/*****************************************************************************/
/* CreateMeme: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateMeme.created = function () {
};

Template.CreateMeme.rendered = function () {
  Meme(Session.get("newPicture"), 'preview-canvas');
};

Template.CreateMeme.destroyed = function () {
};



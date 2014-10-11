
/*****************************************************************************/
/* CreateMeme: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateMeme.events({
  'keyup input': function (event, template) {
      var topText = template.find('#top-line').value;
      var bottomText = template.find('#bottom-line').value;
      Meme(Session.get("newPicture"), 'canvas', topText, bottomText);
  },
  'click #save': function(event, template) {
      var topText = template.find('#top-line').value;
      var bottomText = template.find('#bottom-line').value;
      var imageBase64 = template.find("#canvas").toDataURL();
      var chosenCircle = template.find('.active').value;

      Memes.insert({
        picture: imageBase64,
        topText: topText,
        bottomText: bottomText,
        createdAt: new Date,
        circle: chosenCircle
      });
      Router.go("memes.index");
  },
  'click .circle-button': function(event, template) {
    $(event.currentTarget).addClass('active').siblings().removeClass('active');
  }
});

Template.CreateMeme.helpers({
   circles: function () {
     return Circles.find({}, { sort: { createdAt: -1 } });
   }
});

/*****************************************************************************/
/* CreateMeme: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateMeme.created = function () {
};

Template.CreateMeme.rendered = function () {
  Meme(Session.get("newPicture"), 'canvas');
};

Template.CreateMeme.destroyed = function () {
};



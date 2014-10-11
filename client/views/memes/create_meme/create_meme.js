
/*****************************************************************************/
/* CreateMeme: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateMeme.events({
  'keyup input': function (event, template) {
      var topText = template.find('#top-line').value;
      var bottomText = template.find('#bottom-line').value;
      Meme(Session.get("newPicture"), 'preview-canvas', topText, bottomText);
  },
  'click .circle-button': function(event, template) {
      var topText = template.find('#top-line').value;
      var bottomText = template.find('#bottom-line').value;
      var imageBase64 = template.find("#preview-canvas").toDataURL("image/jpeg");
      Memes.insert({
        picture: imageBase64,
        topText: topText,
        bottomText: bottomText,
        createdAt: new Date,
        circle: this._id
      });
      Router.go("memes.index");
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
  Meme(Session.get("newPicture"), 'preview-canvas');
};

Template.CreateMeme.destroyed = function () {
};



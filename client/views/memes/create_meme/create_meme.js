
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
      Memes.insert({
        picture: imageBase64,
        topText: topText,
        bottomText: bottomText,
        createdAt: new Date
      });
      Router.go("memes.index");
  }
});

Template.CreateMeme.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
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



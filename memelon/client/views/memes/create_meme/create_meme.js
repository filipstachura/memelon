
/*****************************************************************************/
/* CreateMeme: Event Handlers and Helpersss .js*/
/*****************************************************************************/

Template.CreateMeme.events({
  'keyup input': function (e, tmpl) {
      var topText = tmpl.find('#top-line').value;
      var bottomText = tmpl.find('#bottom-line').value;
      Meme(Session.get("newPicture"), 'canvas', topText, bottomText);
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



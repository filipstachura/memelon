
/*****************************************************************************/
/* CreateMemeButton: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateMemeButton.events({
  'click #make-meme': function(event, template) {
      console.log("clicked");
  }
});

Template.CreateMemeButton.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateMemeButton: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateMemeButton.created = function () {
};

Template.CreateMemeButton.rendered = function () {
};

Template.CreateMemeButton.destroyed = function () {
};



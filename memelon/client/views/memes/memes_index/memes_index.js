
/*****************************************************************************/
/* MemesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MemesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.MemesIndex.helpers({
   items: function () {
     return Memes.find({}, { sort: { createdAt: -1 } });
   }
});

/*****************************************************************************/
/* MemesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.MemesIndex.created = function () {
};

Template.MemesIndex.rendered = function () {
};

Template.MemesIndex.destroyed = function () {
};




/*****************************************************************************/
/* MemesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MemesIndex.events({
  'change #selected_circle': function (event, template) {
    var circleId = template.find('.select-circle-option:selected').value;
    Router.go('circle.memes', {_id: circleId});
  }

  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CircleSelectOption.helpers({
  isSelected: function () { 
    return (name == 'public') ? 'selected': name;
  }
});

Template.MemesIndex.helpers({
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



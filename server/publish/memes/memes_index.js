/*****************************************************************************/
/* MemesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('memes_index', function () {
  return Memes.find();
});
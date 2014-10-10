/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
config = {
  picture: {
    size: {
      width:600,
      height:450
    }
  }
};

_.extend(App, {
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

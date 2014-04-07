define(['App', 'backbone', 'marionette', 'views/application-view'],
    function (App, Backbone, Marionette, ApplicationView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            var Controller = {};

            Controller.view = new ApplicationView();
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            
        }
    });
});
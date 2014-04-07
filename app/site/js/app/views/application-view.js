define(['App', 'backbone', 'marionette', 'collections/PostCollection', 'views/post-sidebar-view', 'moment'],
    function (App, Backbone, Marionette, PostCollection, PostSidebarView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {

        	this.collection = new PostCollection();
        	this.collection.fetch();

            App.sidebarRegion.show(new PostSidebarView({
            	collection: this.collection
            }));
        }
    });
});
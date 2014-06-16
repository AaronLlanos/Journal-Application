define(['jquery', 'backbone', 'marionette', 'Vent', 'underscore', 'collections/PostCollection', 'views/app-navbar', 'views/post-sidebar-view'],
    function ($, Backbone, Marionette, Vent, _, PostCollection, AppNavbarView, PostSidebarView) {
        
        var App = new Backbone.Marionette.Application();

        App.addRegions({
            mainRegion:"#page-main",
            sidebarRegion:'#page-sidebar',
            navbarRegion: '#navbar'
        });

        App.addInitializer(function (options) {
        
            App.navbarRegion.show(
                new AppNavbarView()
            );

            App.sidebarRegion.show(
                new PostSidebarView({
                    collection: App.postCollection
                })
            );

        });

        App.navigate = function(route, options) {
            options || (options = {});
            Backbone.history.navigate(route, options);
        };      

        App.getCurrentRoute = function() {
            return Backbone.history.fragment;
        };

        App.postCollection = new PostCollection();
        App.postCollection.fetch();

        return App;
    });
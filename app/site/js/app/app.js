define(['jquery', 'backbone', 'marionette', 'vent', 'underscore', 'handlebars','views/post-detail-view'],
    function ($, Backbone, Marionette, vent, _, Handlebars, PostView) {
        var App = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            mainRegion:"#page-main",
            sidebarRegion:'#page-sidebar'
        });

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        App.mobile = isMobile();

        App.addInitializer(function (options) {
            Backbone.history.start();
        });

        vent.on('post:show', function(model){
            App.mainRegion.show(new PostView({model: model}));
        });

        return App;
    });
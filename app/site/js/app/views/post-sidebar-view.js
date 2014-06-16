define(['app', 'marionette', 'Vent', 'handlebars', 'text!templates/post-sidebar-view.html', 'views/post-sidebar-item-view'],
    function (App, Marionette, Vent, Handlebars, template, PostItemView) {
        
        return Marionette.CompositeView.extend({

		    template: _.template(template),

		    itemView: PostItemView,

		    itemViewContainer: '#list_view',

		    initialize: function(){
                this.listenTo(this.collection, 'change', this.render);
                this.listenTo(this.collection, 'add', this.render);
            },

            events: {
                'click #add': 'addPost'
            },

            addPost: function() {
                App.navigate('#add', {trigger: true, replace: true});
            },

            onRender: function() {
            }

		  });

    });
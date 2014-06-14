define(['marionette', 'Vent', 'handlebars', 'text!templates/post-sidebar-view.html', 'views/post-sidebar-item-view'],
    function (Marionette, Vent, Handlebars, template, PostItemView) {
        
        return Marionette.CompositeView.extend({

		    template: _.template(template),

		    itemView: PostItemView,

		    itemViewContainer: '#list_view',

		    initialize: function(){
                this.listenTo(this.collection, 'change', this.render);
            },

            onRender: function() {
            	console.log(this.collection);
            }

		  });

    });
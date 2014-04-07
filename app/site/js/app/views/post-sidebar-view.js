define(['marionette', 'handlebars', 'views/post-sidebar-item-view', 'text!templates/post-sidebar.html'],
    function (Marionette, Handlebars, PostItemView, template) {
        
        return Marionette.CollectionView.extend({

		    template: _.template(template),

		    itemView: PostItemView,

		    itemViewContainer: 'ul'

		  });

    });
define(['app', 'marionette', 'underscore', 'Vent', 'text!templates/post-detail-view.html'],
    function (app, Marionette, _, Vent, template) {

        return Marionette.ItemView.extend({

            template: _.template(template),

            events: {
            	'click #edit': 'editPost',
            	'click #delete': 'deletePost'
            },

            editPost: function() {
            	app.navigate('#post/edit/' + this.model.get('id'), {trigger: true, replace: true});
            },	

            deletePost: function() {
                this.model.destroy();
                this.remove();
            }
            
        });
    });
define(['app', 'marionette', 'underscore', 'Vent', 'models/PostModel', 'text!templates/post-sidebar-item.html'],
    function (app, Marionette, _, Vent, PostModel, template) {

        return Marionette.ItemView.extend({

            template: _.template(template),

            model: PostModel,

            events: {
                'click' : 'showPost'
            },

            initialize: function() {
                console.log('hello');
            },

            showPost: function(){ 
                app.navigate('#post/' + this.model.get('id'), {trigger: true, replace: true});
            }

        });
    });
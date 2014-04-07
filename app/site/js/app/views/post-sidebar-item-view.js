define(['marionette', 'underscore', 'vent', 'models/PostModel', 'text!templates/post-sidebar-item.html'],
    function (Marionette, _, vent, PostModel, template) {

        return Marionette.ItemView.extend({

            template: _.template(template),

            model: PostModel,

            // View Event Handlers
            events: {
                'click' : 'showPost'
            },

            showPost: function(){
                vent.trigger('post:show', this.model);
            }

        });
    });
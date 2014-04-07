define(['marionette', 'underscore', 'vent', 'models/PostModel', 'text!templates/post-detail.html'],
    function (Marionette, _, vent, PostModel, template) {

        return Marionette.ItemView.extend({

            template: _.template(template),

            model: PostModel,

            // View Event Handlers
            events: {
                'click' : 'something'
            },

            something: function(){
                console.log(this);
            }

        });
    });
define(["jquery", "backbone"],
    function ($, Backbone) {
        // Creates a new Backbone Model class object
        var PostModel = Backbone.Model.extend({
            
            urlRoot: '/api/v1/posts',

            defaults: {
                title : '',
                summary : '',
                tags : 'None',
                date_created: '',
            },

            parse: function(response){
                response.id = response._id;
                return response;
            }
        });

        return PostModel;
    }
);
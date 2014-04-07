define(["jquery","backbone","models/PostModel"],
  function($, Backbone, PostModel) {
    // Creates a new Backbone Collection class object
    var PostCollection = Backbone.Collection.extend({
     
	    url: '/api/v1/posts',

	    model: PostModel

    });

    return PostCollection;

  });
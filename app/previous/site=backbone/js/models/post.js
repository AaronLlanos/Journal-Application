var app = app || {};

app.Post = Backbone.Model.extend({
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
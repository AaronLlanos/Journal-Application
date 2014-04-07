var app = app || {};

app.postShowView = Backbone.View.extend({

	el: '#page-content',

	tagName: 'div',
	className: 'post',
	template: _.template($("#postTemplate").html()),
	
	initialize: function(){

		this.render();
	
	},

	render: function(){

		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	events: {
		'click .delete' : 'deletePost',
		'click .edit' : 'editPost',
	},

	deletePost: function(){

		// Deletes the model from memory
		this.model.destroy();

		// Removes this from the view
		this.unbind();
		this.model.unbind();

	}, 
	editPost: function(){

		// Removes this from the view
		this.unbind();
		this.model.unbind();

		// returns view to edit this model
		new app.postEditView(this.model);
	}

});
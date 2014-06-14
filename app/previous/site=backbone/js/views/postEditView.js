var app = app || {};

app.postEditView = Backbone.View.extend({

	el: '#page-content',

	tagName: 'div',
	className: 'post',
	template: _.template($("#postEditTemplate").html()),
	
	initialize: function(model){
		this.model = model;

		this.render();
	},

	render: function(){

		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	events: {
		'click .save' : 'savePost'
	},

	savePost: function(){

		var formData = Backbone.Syphon.serialize(this);

		if(formData['tags']){
			var tags = formData['tags'];
			formData['tags'] = [];
			_.each(tags.split( ' ' ), function( tag ) {
	            formData['tags'].push({ 'tag': tag });
	        });
	        console.log(tags);
		}else{
			formData['tags'] = { 'tag': '' };
		}

		this.model.set(formData);

		this.model.save();

		this.close();
	}

});
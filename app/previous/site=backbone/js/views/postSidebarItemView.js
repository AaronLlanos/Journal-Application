var app = app || {};

app.postSidebarItemView = Backbone.View.extend({

	tagName: 'p',
	className: 'post-item',
	template: _.template($("#postSidebarItemTemplate").html()),

	initialize: function() {
        this.model.on("change", this.render, this);
        this.model.on("close", this.close, this);
    },

	render: function(){
		
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	
	},

	events: {
		'click' : 'showPost',
	},

	showPost: function(){

		// Sets the model active
		$('a').removeClass('active');
		this.$el.children('a').addClass('active');

	}

});
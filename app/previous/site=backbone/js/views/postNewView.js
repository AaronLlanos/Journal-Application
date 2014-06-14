var app = app || {};

app.postNewView = Backbone.View.extend({

	tagName: 'div',
	className: 'post',
	template: _.template($("#postNewTemplate").html()),
	
	initialize: function(option){

		this.option = option;

		console.log(moment(this.option.month + '-' + this.option.date + '-' + this.option.year, 'MM-DD-YYYY').format());

		this.collection = new app.Posts();
		this.render();
	},

	render: function(){

		this.$el.html(this.template());

		return this;
	},

	events: {
		'click .save' : 'savePost'
	},

	savePost: function(e){
	
		var formData = Backbone.Syphon.serialize(this);

		if(formData['tags']){
			var tags = formData['tags'];
			formData['tags'] = [];
			_.each(tags.split(' '), function( tag ) {
	            if(tag !== ''){
	            	formData['tags'].push({ 'tag': tag });
	            }
	        });
		}

		// Also adds the date created to the form
		formData['date_created'] = moment(this.option.month + '-' + this.option.date + '-' + this.option.year, 'MM-DD-YYYY').format();

		var model = this.collection.create(formData);

		new app.postSidebarDayView({
			month: moment().format("MM"),
			date: moment().date(),
			year: moment().year(),
			datetime: moment().format()
		});

		new app.postShowView({model: model});

		this.close();
	}

});
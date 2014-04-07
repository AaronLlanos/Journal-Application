var app = app || {};

app.postSidebarDayView = Backbone.View.extend({

	el: '#page-sidebar',

	initialize: function(option){

		// Option value will contain
		// date : 0 - 31
		// month : 0 - 12
		// year: 
		// datetime : 2014-01-20T06:27:09+00:00 (moment().format())
		this.option = option;

		this.collection = new app.Posts();
		this.collection.fetch({reset: true});

		// Renders the view
		this.render(option);

		// Listens to when the view is reset
		this.listenTo(this.collection, 'reset', this.render);
		// Listens to when a collection member is deleted
		this.collection.bind('remove', this.render, this);
		// Listens to when a collection memeber is added
		this.collection.bind('add', this.render, this);
	},

	// Renders each of the sidebar items
	render: function(){

		// Puts the date as the first item
		this.$el.html('<a href="#" class="back"><span class="glyphicon glyphicon-arrow-left"></span>Month</p>');
		this.$el.append('<p><a href="#" class="list-group-item" style="background:rgb(153, 153, 153); !important;color:white">' + moment().month(this.option.month).format('MMMM') + ' ' + this.option.date + ', ' + this.option.year + "</a></p><hr>");
		this.$el.append('<p><a href="#" class="list-group-item text-center" style="background:rgb(92, 184, 92);" id="addPost"><span class="glyphicon glyphicon-plus"></span></a></p>');

		var results = [];

		this.collection.each(function(item){
			// Checking if the post was made on the date it is on
			if(moment(moment(item.get('date_created')).format('YYYY-MM-DD')).isSame(moment(this.option.year + '-' + this.option.month +  '-' + this.option.date, 'YYYY-MM-DD').format('YYYY-MM-DD')))
			{
				// Collates the results
				results += item;

				this.renderPost(item);
			}
		}, this);

		if(results == ''){
			// Inform user there is nothing written for today
			this.$el.append('<p><a href="#" class="list-group-item">Nothing written for today</a></p>');
		
		}
	},

	renderPost: function(item){
		
		// Passes the model as an item to the postSidebarItemView
		// Retrives the result
		var postItemView = new app.postSidebarItemView({
			model: item
		});

			// Appends the view inside this view
			this.$el.append(postItemView.render().el);
	},

	events: {
		'click .back' : 'renderDayView',
		'click #addPost': 'addPost'
	},

	addPost: function(){
		new app.postNewView({
			month: this.option.month,
			date: this.option.date,
			year: this.option.year,
			datetime: this.option.datetime,
		});
	},

	renderDayView: function(){
		
		new app.postSidebarMonthView({
			month: this.option.month,
			date: this.option.date,
			year: this.option.year,
			datetime: this.option.datetime,
			collection: this.collection
		});
	}

});
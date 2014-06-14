var app = app || {};

// Gets the amount of months in a year

app.postSidebarMonthView = Backbone.View.extend({

	el: '#page-sidebar',

	initialize: function(option){

		// Option value will contain
		// date : 0 - 31
		// month : 0 - 12
		// year: 
		// datetime : 2014-01-20T06:27:09+00:00 (moment().format())
		this.option = option;

		var raw = this.collection.pluck('date_created');
		var date = [];

		_.each(raw, function(elem){
			if(moment(elem).format('MM-YYYY') == option.month + '-' + option.year){
				date[moment(elem).format('DD')] = ++ date[moment(elem).format('DD')] || 1;
			}else{
				
			}
		});

		this.date = date;

		// Renders the view
		this.render();

	},

	// Renders each of the sidebar items
	render: function(){

		// Empties the sidebar
		this.$el.empty();
		this.$el.html('<a href="#" class="back"><span class="glyphicon glyphicon-arrow-left"></span>Month</p>');
		this.$el.append('<p><a href="#" class="list-group-item" style="background:rgb(153, 153, 153); !important;color:white">' + moment().month(this.option.month).format('MMMM') + "</a></p><hr>");

		// Renders a sidebar item for each day of the year
		var length = this.daysInMonth(this.option.month, this.option.year);
		for (var i = 1; i <= length ; i++) {
			// Render a list item for each of the dates
			if(i == moment().date()){
				var count = 0;
				if(this.date[moment().format('DD')]){ count = this.date[moment().format('DD')]; }
				this.$el.append('<p><a id="'+i+'" href="#" class="list-group-item active date">' + i + "<span class='badge'>" + count + "</span></a></p>");
			}else{
				var count = 0;
				if(this.date[i]){ count = this.date[i]; }
				this.$el.append('<p><a id="'+i+'" href="#" class="list-group-item date">' + i + "<span class='badge'>"+ count + "</span></a></p>");
			}
		};

	},

	daysInMonth: function(month, year) {
	    return new Date(year, month, 0).getDate();
	},

	events: {
		'click .date' : 'renderDayView'
	},

	renderDayView: function(e){
		e.preventDefault();

		// Removes this from the view
		this.unbind();

		new app.postSidebarDayView({
			date : e.currentTarget.attributes.id.value,
			month : this.option.month,
			year: this.option.year,
			datetime: this.option.datetime
		});

	}

});
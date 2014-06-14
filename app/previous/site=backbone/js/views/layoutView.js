var app = app || {};

app.layoutView = Backbone.View.extend({

	el: 'body',

	initialize: function(){
		
		new app.postSidebarDayView({
			month: moment().month(moment().month()).format('MM'),
			date: moment().date(),
			year: moment().year(),
			datetime: moment().format()
		});

	},
	
});

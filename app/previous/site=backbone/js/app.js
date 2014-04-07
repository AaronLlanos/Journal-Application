var app = app || {};

$(function(){
	new app.layoutView();
});

Backbone.View.prototype.close = function(){
	this.remove();
	this.stopListening();
	this.unbind();
	if (this.onClose){
		this.onClose();
	}
}
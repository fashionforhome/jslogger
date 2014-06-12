var FrontendRenderer = function() {
	this.render = function(msg, exception, level){
		this.createDiv(msg, exception, level);
	};

	this.createDiv = function(msg, exception, level) {
		jQuery('body').append("<div class='mainLog'><h3>"+msg+"<br/><span>"+exception.stack+"</span></h1></div>");
		jQuery('.mainLog:last').addClass("_"+String(level));
	};
}
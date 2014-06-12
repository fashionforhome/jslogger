var FrontendRenderer = function() {
	this.render = function(msg, exception, level){
		this.createDiv(msg, exception, level);
	};

	this.createDiv = function(msg, exception, level) {
		jQuery('body').append("<div class='mainLog'><h3>"+ level + " " + msg + "<br/><span>"+exception.stack+"</span></h3><h4>Exception Object <span>"+exception+"</span></h4></div>");
		jQuery('.mainLog:last').addClass("_"+String(level));
		jQuery('.mainLog').show("slow");
	};
}
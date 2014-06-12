var FrontendRenderer = function() {
	this.render = function(msg, exception, level){
		this.createDiv(msg,exception);
		this.styleLevelHandler(level);
	};

	this.createDiv = function(msg, exception) {
		jQuery('body').append("<div class='mainLog'><h3>"+msg+"<br/><span>"+exception.stack+"</span></h1></div>");
	};

	this.styleLevelHandler = function(level){
		jQuery('.mainLog').addClass(level);
	}
}
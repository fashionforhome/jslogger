var Logger = function() {

	this.EMERGENCY  = 1;
	this.ALERT      = 2;
	this.CRITICAL   = 3;
	this.ERROR      = 4;
	this.WARNING    = 5;
	this.NOTICE     = 6;
	this.INFO       = 7;
	this.DEBUG      = 8;

	var rendererList = [];

	this.addRenderer = function(renderers) {
		rendererList.push(renderers);
		return this;
	};

	this.emergency = function(msg, exception){
		log(msg, exception, this.EMERGENCY);
	};

	this.alert = function(msg, exception){
		log(msg, exception, this.ALERT);
	};

	this.critical = function(msg, exception){
		log(msg, exception, this.CRITICAL);
	};

	this.error = function(msg, exception){
		log(msg, exception, this.ERROR);
	};

	this.warning = function(msg, exception){
		log(msg, exception, this.WARNING);
	};

	this.notice = function(msg, exception){
		log(msg, exception, this.NOTICE);
	};

	this.info = function(msg, exception){
		log(msg, exception, this.INFO);
	};

	this.debug = function(msg, exception){
		log(msg, exception, this.DEBUG);
	};

//	this.setLogLevel = function(level) {
//		if(level !== parseInt(level)){
//			console.log('WTF are you giving me!');
//		} else {
//			console.log("correct");
//		}
//	};

	function log(msg, exception, logLevel) {
		jQuery.each(rendererList, function( index, renderer ) {
			renderer.render(msg, exception, logLevel );
		});
	}
}

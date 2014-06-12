var Logger = function() {

	this.EMERGENCY  = 600;
	this.ALERT      = 550;
	this.CRITICAL   = 500;
	this.ERROR      = 400;
	this.WARNING    = 300;
	this.NOTICE     = 250;
	this.INFO       = 200;
	this.DEBUG      = 100;

	var rendererList = [];
	var logLevel = 400;

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

	this.setLogLevel = function(level) {
		if(level !== parseInt(level)){
			console.log('WTF are you giving me!');
		} else {
			logLevel = level;
		}
	};

	function log(msg, exception, logtype) {
		if(logtype >= logLevel){
			jQuery.each(rendererList, function( index, renderer ) {
				renderer.render(msg, exception, logtype );
			});
		}
	}
}

clientConfig = clientConfig || {};

var jsServiceLogger;
jQuery( document ).ready( function() {

	try{
		jsServiceLogger = new jsLogger();
	} catch(e) {
		jsServiceLogger = {};
	}

	if (jQuery.isEmptyObject(clientConfig) || jQuery.isEmptyObject(jsServiceLogger)) {
		return;
	}

	jQuery.each(clientConfig.renderer, function(index, renderer){
		jsServiceLogger.addRenderer(renderer);
	});

	window.onerror = function(msg, url, line) {
		// You can view the information in an alert to see things working
		// like so:
		jsServiceLogger.error('Message:' + msg + ' | ' + 'url:' + url + ' | ' + 'line #:' + line );

		var suppressErrorAlert = true;
		// If you return true, then error alerts (like in older versions of
		// Internet Explorer) will be suppressed.
		return suppressErrorAlert;
	};

});
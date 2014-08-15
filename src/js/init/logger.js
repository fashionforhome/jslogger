var jsLogger = jsLogger || {};
jsLogger.clientConfig = jsLogger.clientConfig || {};

var jsServiceLogger;
jQuery( document ).ready( function() {

	try{
		jsServiceLogger = new jsLogger();
	} catch(e) {
		jsServiceLogger = {};
	}

	if (jQuery.isEmptyObject(jsLogger.clientConfig) || jQuery.isEmptyObject(jsServiceLogger)) {
		return;
	}

	jsServiceLogger.addRendererByConfig(jsLogger.clientConfig.renderer);

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
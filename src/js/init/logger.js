var jsLogger = jsLogger || {};
jsLogger.clientConfig = jsLogger.clientConfig || {};

/** @type { jsLogger|{} } */
var jsServiceLogger = (function() {

	serviceLogger = new jsLogger();

	if (jQuery.isEmptyObject(jsLogger.clientConfig) || jQuery.isEmptyObject(serviceLogger)) {
		return {};
	}

	serviceLogger.setConfig(jsLogger.clientConfig);
	serviceLogger.init();

	window.onerror = function(msg, url, line) {
		// You can view the information in an alert to see things working
		// like so:
		serviceLogger.error('Message:' + msg + ' | ' + 'url:' + url + ' | ' + 'line #:' + line );

		var suppressErrorAlert = true;
		// If you return true, then error alerts (like in older versions of
		// Internet Explorer) will be suppressed.
		return suppressErrorAlert;
	};

	return serviceLogger;
}());
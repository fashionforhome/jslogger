/**
 * @author Tino Stöckel <tino.stoeckel@fashionforhome.de>
 *
 * @copyright (c) 2014 by fashion4home GmbH <www.fashionforhome.de>
 * @license GPL-3.0
 * @license http://opensource.org/licenses/GPL-3.0 GNU GENERAL PUBLIC LICENSE
 *
 * @version 1.0.0
 */
var jsLogger = jsLogger || {};
jsLogger.clientConfig = jsLogger.clientConfig || {};

/** @type { jsLogger|{} } */
var jsServiceLogger = (function() {

	var serviceLogger = new jsLogger();

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
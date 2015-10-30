/**
 * Backend renderer
 * @var config - expected as JSON, e.q.: {'url':"http://www.abc.com", 'consoleResponse':false}
 *
 * @author Georgios Lolos <georgios.lolos@fashionforhome.de>
 *
 * @copyright (c) 2014 by fashion4home GmbH <www.fashionforhome.de>
 * @license GPL-3.0
 * @license http://opensource.org/licenses/GPL-3.0 GNU GENERAL PUBLIC LICENSE
 *
 * @version 1.0.0
 */
var BackendRenderer = function(config) {

	var clientDataCollector = new ClientDataCollector();

	/**
	 * creates the error message and sends it to the backend
	 *
	 * @param msg
	 * @param exception
	 * @param logType
	 */
	this.render = function(msg, exception, logType){
		if(config === undefined) {
			return;
		}

		jQuery.ajax({
			method: 'POST',
			url: config['url'],
			data: {
				logType: logType,
				message: buildMessage(msg, exception),
				clientData: clientDataCollector.toJsonString(),
				logfileName: config.logfileName
			},
			crossDomain: true
		}).done( function( data ) {
			if (config['consoleResponse'] === true) {
				window.console && console.log('BackendRenderer here:', data);
			}
		});

	};

	/**
	 * build the message string we want to log
	 * @param msg
	 * @param exception
	 * @returns {string}
	 */
	var buildMessage = function(msg, exception){
		var stackTrace = '';
		if(exception !== undefined){
			stackTrace = exception.stack;
		}
		return msg + ' | Stack-Trace: ' +stackTrace;
	};
};
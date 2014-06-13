/**
 * Backend renderer
 * @var config - expected as JSON, e.q.: {'url':"http://www.abc.com", 'consoleResponse':false}
 **/
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
		$.post(
			config['url'],
			{'logType': logType, 'message': buildMessage(msg, exception)}
		).done( function( data ) {
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
		return msg + ' | Exception-Message: ' + exception.stack + ' | Client-Data: ' + clientDataCollector.toJsonString();
	};
};
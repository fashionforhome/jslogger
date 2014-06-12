/*@var config - expected as JSON, e.q.: {'url':"http://www.abc.com", 'consoleResponse':false} */
var BackendRenderer = function(config) {

	var clientDataCollector = new ClientDataCollector();

	this.render = function(msg, exceptionObj, logType){
		$.post(
			config['url'],
			{'logType': logType, 'message': buildMessage(msg, exceptionObj)}
		).done( function( data ) {
			if (config['consoleResponse'] === true) {
				window.console && console.log('BackendRenderer here:', data);
			}
		});
	};

	var buildMessage = function(msg, exceptionObj){
		return msg + ' | Exception-Message: ' + exceptionObj + ' | Client-Data: ' + clientDataCollector.toJsonString();
	};
};
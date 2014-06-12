/*@var config - expected as JSON, e.q.: {'url':"http://www.abc.com", 'consoleResponse':false} */
var BackendRenderer = function(config) {

	this.render = function(msg, logType, exceptionObj){
		$.post(
			config['url'],
			{'logType': logType, 'message': buildMessage(msg, exceptionObj)}
		).done( function( data ) {
			if (config['consoleResponse'] === true) {
				window.console && console.log('BackendRenderer here:', data);
			}
		});
	};

	var buildMessage = function(msg, optionalData){
		return msg;
	};
};
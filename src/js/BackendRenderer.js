var BackendRenderer = function(config) {

	/*@var _config - expected as JSON: {'url':"http://www.abc.com", 'consoleResponse':false} */
	var _config = config;

	this.render = function(msg, logType, optionalData){
		$.post(
			_config['url'],
			{ 'logType': logType, 'message': _buildMessage(msg, optionalData) }
		).done( function( data ) {
			if (_config['consoleResponse'] === true) {
				window.console && console.log('BackendRenderer here:', data);
			}
		});
	};

	var _buildMessage = function(msg, optionalData){
		return msg;
	};
};
var ConsoleRenderer = function() {
	this.render = function(msg, exception, logType) {
		console.log('Message:', msg, ' | ExceptionObject:', exception, ' | LogType:', logType);
	};
};
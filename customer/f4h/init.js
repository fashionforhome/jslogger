var jsLogger = jsLogger || {};

jsLogger.clientConfig = {
	clientName : 'fashionforhome',
	shortTag : 'f4h',
	logLevel : 400,
	renderer : [
		{
			name: 'FrontendRenderer',
			config: {},
			enable: true,
			stages: {}
		},
		{
			name: 'BackendRenderer',
			config: {url: 'http://jslogger.fashionforhome.net/log.php', consoleResponse:false, logfileName:'js_f4h' },
			enable: false,
			stages: {}
		},
		{
			name: 'ConsoleRenderer',
			config: {},
			enable: true,
			stages: {}
		}
	]
};
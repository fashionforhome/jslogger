var jsLogger = jsLogger || {};

jsLogger.clientConfig = {
	clientName : 'fashionforhome_development',
	shortTag : 'development',
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
			config: {
				url: 'http://jslogger.fashionforhome.net/log.php',
				consoleResponse: false,
				logfileName: 'js_f4h_development'
			},
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
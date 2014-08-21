var jsLogger = jsLogger || {};

jsLogger.clientConfig = {
	clientName : 'fashionforhome_production',
	shortTag : 'production',
	logLevel : 400,
	renderer : [
		{
			name: 'FrontendRenderer',
			config: {},
			enable: false,
			stages: {}
		},
		{
			name: 'BackendRenderer',
			config: {
				url: 'http://jslogger.fashionforhome.net/log.php',
				consoleResponse: true,
				logfileName: 'js_f4h_production'
			},
			enable: true,
			stages: {}
		},
		{
			name: 'ConsoleRenderer',
			config: {},
			enable: false,
			stages: {}
		}
	]
};
var jsLogger = jsLogger || {};

jsLogger.clientConfig = {
	clientName : 'fashionforhome_testing',
	shortTag : 'testing',
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
				logfileName: 'js_f4h_testing'
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
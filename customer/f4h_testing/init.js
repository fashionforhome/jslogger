var clientConfig = {
	clientName : 'fashionforhome_testing',
	shortTag : 'f4h_testing',
	renderer : [
		{
			name: 'FrontendRenderer',
			config: {},
			enable: true,
			stages: {}
		},
		{
			name: 'BackendRenderer',
			config: {url: 'http://www.jslogger.rainer.dev.fashionforhome.de/log.php', consoleResponse:true, logfileName:'f4h_testing' },
			enable: true,
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
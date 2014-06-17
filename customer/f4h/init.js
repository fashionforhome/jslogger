var clientConfig = {
	clientName : 'fashionforhome',
	shortTag : 'f4h',
	renderer : [
		{
			name: 'FrontendRenderer',
			config: {},
			enable: true,
			stages: {}
		},
		{
			name: 'BackendRenderer',
			config: {url: 'http://www.jslogger.rainer.dev.fashionforhome.de/log.php', consoleResponse:true, logfileName:'f4h' },
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
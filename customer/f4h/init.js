var clientConfig = {
	clientName : 'fashionforhome',
	shortTag : 'f4h',
	renderer : [
		{
			name: 'FrontendRenderer',
			config: {},
			enable: false,
			stages: {}
		},
		{
			name: 'BackendRenderer',
			config: {url: 'http://www.jslogger.tino.dev.fashionforhome.de/log.php', consoleResponse:true },
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
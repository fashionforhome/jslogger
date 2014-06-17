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
			// @todo here we ned the final logger url
			config: {url: 'http://www.jslogger.rainer.dev.fashionforhome.de/log.php', consoleResponse:true},
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
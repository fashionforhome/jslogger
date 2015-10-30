/**
 * @author Tino Stöckel <tino.stoeckel@fashionforhome.de>
 *
 * @copyright (c) 2014 by fashion4home GmbH <www.fashionforhome.de>
 * @license GPL-3.0
 * @license http://opensource.org/licenses/GPL-3.0 GNU GENERAL PUBLIC LICENSE
 *
 * @version 1.0.0
 */
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
				consoleResponse: false,
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
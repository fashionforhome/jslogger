/**
 * @author Georgios Lolos <georgios.lolos@fashionforhome.de>
 *
 * @copyright (c) 2014 by fashion4home GmbH <www.fashionforhome.de>
 * @license GPL-3.0
 * @license http://opensource.org/licenses/GPL-3.0 GNU GENERAL PUBLIC LICENSE
 *
 * @version 1.0.0
 */
var ConsoleRenderer = function() {
	this.render = function(msg, exception, logType) {
		console.log('Message:', msg, ' | ExceptionObject:', exception, ' | LogType:', logType);
	};
};
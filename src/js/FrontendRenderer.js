var FrontendRenderer = function()
{
	/**
	 * Bool to be used in order for the header to be appended once
	 * @type {boolean}
	 */
	var headerCreated = false;
	/**
	 * Mapping concerning the Log Levels
	 * @type {{600: string, 550: string, 500: string, 400: string, 300: string, 250: string, 200: string, 100: string}}
	 */
	var levelErrors = {"600":"Emergency", "550":"Alert", "500":"Critical", "400":"Error", "300":"Warning", "250":"Notice", "200":"Info", "100":"Debug"};

	/**
	 * Initializes the Frontend Renderer executing the needed methods
	 * @param msg
	 * @param exception
	 * @param level
	 */
	this.render = function(msg, exception, level){
		createHeader();
		createLogReport(msg, exception, level);
		appendCloseThis();
		appendRemoveThisLevel(level);
		arrowButtonListeners();
	};

	/**
	 * appends the header to the Body
	 */
	function createHeader()
	{
		if(!headerCreated){
			jQuery('body').append("<div class='header'><div class='arrow-down'></div><div class='arrow-up'></div></div>");
		}
		headerCreated = true;
	}

	/**
	 * Creates the div with the Exceptions needed to be shown
	 * @param msg
	 * @param exception
	 * @param level
	 */
	function createLogReport(msg, exception, level)
	{
		//TODO overwork this quickfix
		var stack = '';
		if(exception !== undefined) {stack = exception.stack;}
		jQuery('body').append("<div class='mainLog'><h3>"+ levelErrors[level] + ": '" + msg + "'<br/><span>" + stack + "</span></h3></div>");
		jQuery('.mainLog:last').addClass("_" + String(level));
	}

	/**
	 * Appends the close button to every Exception
	 */
	function appendCloseThis()
	{
		jQuery('.mainLog:last-of-type').append("<div class='removeThis'>Close</div>");
	}

	/**
	 * Appends the close level button to every Exception
	 * @param level
	 */
	function appendRemoveThisLevel(level)
	{
		jQuery('.mainLog:last-of-type').append("<div class='removeThisLevel'>Remove " + levelErrors[level] + " Level</div>");
	}

	/**
	 * Adds listeners to every button
	 */
	function arrowButtonListeners()
	{
		jQuery('.removeThis').click(function() {
			jQuery(this).parent().hide("200", function() {
				jQuery(this).remove();
			});
		});
		jQuery('.arrow-down').click(function() {
			jQuery(this).hide();
			jQuery('.mainLog').slideDown();
			jQuery('.arrow-up').show();
		});
		jQuery('.arrow-up').click(function() {
			jQuery(this).hide();
			jQuery('.mainLog').slideUp();
			jQuery('.arrow-down').show();
		});
		jQuery('.removeThisLevel').click(function() {
			var levelToBeRemoved = jQuery(this).parent().attr('class').split(' ')[1];
			jQuery('.'+levelToBeRemoved).hide("200", function() {
				jQuery('.'+levelToBeRemoved).remove();
			});
		});
	}
};
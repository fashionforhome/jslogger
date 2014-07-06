var jsLogger = function() {

	/**
	 * Default values for the Log level
	 * @type Constants
	 */
	this.EMERGENCY  = 600;
	this.ALERT      = 550;
	this.CRITICAL   = 500;
	this.ERROR      = 400;
	this.WARNING    = 300;
	this.NOTICE     = 250;
	this.INFO       = 200;
	this.DEBUG      = 100;

	var that = this;

	/**
	 * Renderer List
	 * Currently Supported Frontend, Backend
	 * @type {Array}
	 */
	var rendererList = [];
	/**
	 * Default Log level = Error
	 * @type {number}
	 */
	var logLevel = 400;

	/**
	 * Adds a renderer in the list
	 * @param renderer
	 * @returns {jsLogger}
	 */
	this.addRenderer = function(renderer)
	{
		if (!isRenderInitialized(renderer)) {
			rendererList.push(renderer);
		}
		return this;
	};

	/**
	 * Emergency renderer
	 * @param msg
	 * @param exception
	 */
	this.emergency = function(msg, exception)
	{
		that.log(msg, exception, this.EMERGENCY);
	};

	/**
	 * Alert renderer
	 * @param msg
	 * @param exception
	 */
	this.alert = function(msg, exception)
	{
		that.log(msg, exception, this.ALERT);
	};

	/**
	 * Critical renderer
	 * @param msg
	 * @param exception
	 */
	this.critical = function(msg, exception)
	{
		that.log(msg, exception, this.CRITICAL);
	};

	/**
	 * Error renderer
	 * @param msg
	 * @param exception
	 */
	this.error = function(msg, exception)
	{
		that.log(msg, exception, this.ERROR);
	};

	/**
	 * Warning renderer
	 * @param msg
	 * @param exception
	 */
	this.warning = function(msg, exception)
	{
		that.log(msg, exception, this.WARNING);
	};

	/**
	 * Notice renderer
	 * @param msg
	 * @param exception
	 */
	this.notice = function(msg, exception)
	{
		that.log(msg, exception, this.NOTICE);
	};

	/**
	 * Info renderer
	 * @param msg
	 * @param exception
	 */
	this.info = function(msg, exception)
	{
		that.log(msg, exception, this.INFO);
	};

	/**
	 * Debug renderer
	 * @param msg
	 * @param exception
	 */
	this.debug = function(msg, exception)
	{
		that.log(msg, exception, this.DEBUG);
	};

	/**
	 * Overrides the default Log Level
	 * @param level
	 */
	this.setLogLevel = function(level)
	{
		if (level !== parseInt(level)) {
			console.log('WTF are you giving me!');
		} else {
			logLevel = level;
		}
	};

	/**
	 * Initializes the renderer
	 * @param msg
	 * @param exception
	 * @param logtype
	 */
	this.log = function(msg, exception, logtype)
	{
		if (logtype >= logLevel) {
			jQuery.each(rendererList, function( index, renderer ) {
				renderer.render(msg, exception, logtype );
			});
		}
	}

	/**
	 * Checks if renderer is already initialised
	 * ( Avoids double entries 'cause of double initialised Renderers )
	 * @param renderer
	 * @returns {boolean}
	 */
	function isRenderInitialized(renderer)
	{
		jQuery.each( rendererList, function(index, value){
			if(JSON.stringify(renderer) === JSON.stringify(rendererList[index])) {
				return true;
			}
		});

		return false;
	}

	/**
	 * Sets renderer by a passed config
	 *
	 * @param rendererConfig {array} e.q.: [{name: 'FrontendRenderer', config: {}, enable: false, stages: {}}]
	 */
	this.addRendererByConfig = function(rendererConfig) {
		jQuery.each(rendererConfig, function(index, rendererConf){

			if (rendererConf.name === 'BackendRenderer') {
				that.addRenderer(new BackendRenderer(rendererConf.config))
			}

			if (rendererConf.name === 'FrontendRenderer') {
				that.addRenderer(new FrontendRenderer())
			}

			if (rendererConf.name === 'ConsoleRenderer') {
				that.addRenderer(new ConsoleRenderer())
			}
		});
	};

};

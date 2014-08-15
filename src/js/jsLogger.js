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
	var _rendererList = [];

	/**
	 * Default Log level = Error
	 * @type {number}
	 */
	var _logLevel = 400;

	/**
	 * The config for the jsLogger.
	 *
	 * @type {Object}
	 */
	var _config = {};

	/**
	 * Set the config of the jsLogger.
	 *
	 * config looks like:
	 * {
	 * 	clientName : 'fashionforhome_testing',
	 * 	shortTag : 'f4h_testing',
	 * 	logLevel: 400,
	 * 	renderer : [
	 * 	{
	 *  	name: 'FrontendRenderer',
	 *  	config: {},
	 *  	enable: true,
	 *  	stages: {}
	 * 	},
	 * 	...
	 * 	...
	 * 	...
	 * }
	 * @param config {Object}
	 */
	this.setConfig = function(config) {
		_config = config;
	};

	/**
	 * Returns the config of the jsLogger.
	 */
	function getConfig() {
		return _config;
	}

	/**
	 * Initialize the jsLogger.
	 * It's needed to set a config before.
	 */
	this.init = function() {
		//store the config temporary, bec. of the following reset
		var initConfig = getConfig();

		//reset the jsLogger to it's default (also the config)
		that.reset();

		//start initialization
		that.setConfig(initConfig);
		that.setLogLevel(initConfig.logLevel);
		that.addRendererByConfig(initConfig.renderer);
	};

	/**
	 * Resets the jsLogger to it's default.
	 */
	this.reset = function() {
		_config = {};
		_rendererList = [];
		_logLevel = 400;
	};

	/**
	 * Adds a renderer in the list
	 * @param renderer
	 */
	this.addRenderer = function(renderer)
	{
		if (!isRenderInitialized(renderer)) {
			_rendererList.push(renderer);
		}
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
			_logLevel = level;
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
		if (logtype >= _logLevel) {
			jQuery.each(_rendererList, function( index, renderer ) {
				renderer.render(msg, exception, logtype );
			});
		}
	};

	/**
	 * Checks if renderer is already initialised
	 * ( Avoids double entries 'cause of double initialised Renderers )
	 * @param renderer
	 * @returns {boolean}
	 */
	function isRenderInitialized(renderer)
	{
		var isInitialized = false;
		jQuery.each(_rendererList, function(index, value){
			//continue loop
			if (isInitialized) {
				return true;
			}

			if(JSON.stringify(renderer) === JSON.stringify(_rendererList[index])) {
				isInitialized = true;
			}
		});

		return isInitialized;
	}

	/**
	 * Sets renderer by a passed config
	 *
	 * @param rendererConfig {array} e.q.: [{name: 'FrontendRenderer', config: {}, enable: false, stages: {}}]
	 */
	this.addRendererByConfig = function(rendererConfig) {
		jQuery.each(rendererConfig, function(index, rendererConf){

			//continue loop
			if (rendererConf.enable === false) {
				return true;
			}

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

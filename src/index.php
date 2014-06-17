<!Doctype html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="js/Logger.js"></script>
	<script src="js/FrontendRenderer.js"></script>
	<script src="js/BackendRenderer.js"></script>
	<script src="js/ConsoleRenderer.js"></script>
	<script src="js/lib/clientDataCollector.js"></script>
	<script>
		var logger = new Logger();
		logger.addRenderer(new FrontendRenderer());
		logger.setLogLevel(logger.EMERGENCY);

		jQuery( document ).ready(function() {
			try{
				throw Error('Exception mothafucka');
			} catch (e) {
				logger.emergency('paaaarto', e);
				logger.emergency('Wazzaaaa', e);
				logger.error('paaaarto', e);
				logger.error('Yooo niiiigaaazzz', e);
			}
			try{
				throw Error('Exception partner');
			} catch (e) {
				logger.info('paaaarto', e);
				logger.critical('paaaarto', e);
				logger.critical('paaaarto', e);
			}
		});
	</script>
</head>
<body>
</body>
</html>
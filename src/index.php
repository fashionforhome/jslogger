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
				throw Error('Exception exceptionMessage');
			} catch (e) {
				logger.emergency('emergency message 1', e);
				logger.emergency('emergency message 2', e);
				logger.error('error message 1', e);
			}
		});
	</script>
</head>
<body>
</body>
</html>
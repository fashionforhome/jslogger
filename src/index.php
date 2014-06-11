<!Doctype html>
<html>
<head>
	<script src="js/Logger.js"></script>
	<script src="js/FrontendRenderer.js"></script>
	<script src="js/BackendRenderer.js"></script>
	<script src="js/ConsoleRenderer.js"></script>
	<script>
		var logger = new Logger();
		logger.addRenderer(new ConsoleRenderer());

		try{
			throw Error('Exception');
		} catch (e) {
			logger.log(e.message, null);
		}
	</script>
</head>
</html>
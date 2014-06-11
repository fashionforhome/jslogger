<!Doctype html>
<html>
<head>
	<script src="Logger.js"></script>
	<script src="FrontendRenderer.js"></script>
	<script src="BackendRenderer.js"></script>
	<script src="ConsoleRenderer.js"></script>
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
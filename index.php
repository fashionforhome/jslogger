<!Doctype html>
<html>
<head>
	<script src="Logger.js"></script>
	<script src="FrontendRenderer.js"></script>
	<script>
		var logger = new Logger();
		logger.addRenderer(new FrontendRenderer());
		logger.addRenderer(new BackendRenderer());
	</script>
</head>
</html>
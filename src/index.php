<!Doctype html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="js/Logger.js"></script>
	<script src="js/FrontendRenderer.js"></script>
	<script src="js/BackendRenderer.js"></script>
	<script src="js/ConsoleRenderer.js"></script>
	<script src="js/lib/clientDataCollector.js"></script>
	<script>
		var logger = new Logger();
		logger.addRenderer(new FrontendRenderer());
		jQuery( document ).ready(function() {
			try{
				throw Error('Exception mothafucka');
			} catch (e) {
				logger.emergency('paaaarto', e);
				logger.error('paaaarto', e);
			}
			try{
				throw Error('Exception partner');
			} catch (e) {
				logger.info('paaaarto', e);
				logger.critical('paaaarto', e);
			}
			jQuery('.mainLog:last-of-type').append("<div class='arrow-up'></div>");
			jQuery('.arrow-up').click(function(){
				jQuery('.mainLog').slideUp('fast', function(){
					jQuery('.wrapper').show();
				});
			});
			jQuery('.arrow-down').click(function(){
				jQuery('.mainLog').slideDown();
				jQuery('.wrapper').hide();
			});
			setInterval(function(){
				jQuery('.arrow-down').toggle("slow");
			},500);

		});
	</script>
</head>
<body>
<div class="wrapper"><div class="arrow-down"></div></div>
</body>
</html>
var ConsoleRenderer = function() {
	this.render = function(msg, exception, level) {

		switch (level){
			case 1:
				this.errorRendercase();
				break;
			case 2:
				console.log("WARNING");
				break;
			default :
				console.log('gimme a right level');
		}

	}

	this.errorRendercase = function() {
		//do html
	}
}
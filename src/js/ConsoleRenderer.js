var ConsoleRenderer = function() {
	this.render = function(msg, exception, level) {
		console.log(msg, exception);

		switch (level){
			case 1:
				this.errorRendercase();
				break;
			case 2:
				alert("WARNING");
				break;
			default :
				alert('gimme a right level');
		}

	}

	this.errorRendercase = function() {
		//do html
	}
}
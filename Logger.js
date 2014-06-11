var Logger = function() {

    this.ERROR = 1;
    this.WARNING = 2;
    this.NOTICE = 3;
    this.INFO = 4;
    this.DEBUG = 5;

    var rendererList = [];

    this.addRenderer = function(renderers) {
        rendererList.push(renderers);
        return this;
    };

    this.setLogLevel = function(level) {
        if(level !== parseInt(level)){
            console.log('WTF are you giving me!');
        } else {
            console.log("correct");
        }
    };

     this.log = function() {
         for(var i=0; i<=1; i++){
             rendererList[i].render();
         }

    };
}

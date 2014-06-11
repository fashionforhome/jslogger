var Logger = function() {

    this.EMERGENCY = 1;
    this.ALERT     = 2;
    this.CRITICAL  = 3;
    this.ERROR     = 4;
    this.WARNING   = 5;
    this.NOTICE    = 6;
    this.INFO      = 7;
    this.DEBUG     = 8;

    var rendererList = [];

    this.addRenderer = function(renderers) {
        rendererList.push(renderers);
        return this;
    };

//    this.setLogLevel = function(level) {
//        if(level !== parseInt(level)){
//            console.log('WTF are you giving me!');
//        } else {
//            console.log("correct");
//        }
//    };

     this.log = function(msg,exception , logLevel) {
         var length = rendererList.length;
         for(var i=0; i<length; i++){
             rendererList[i].render(msg, exception, logLevel );
         }

    };
}

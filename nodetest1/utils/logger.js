var winston = require('winston');

var winston = new (winston.Logger)({
    transports: [
			      new (winston.transports.Console)
			      (
			    		  {
			    			  level: 'warn', 
			    			  handleExceptions: true, 
			    			  colorize:  true,
			    			  timestamp: true
		    			  }
	    		  ),
			      new (winston.transports.File)
			      (
			    		  { 
			    			  filename: 
			    				  './logs/logfile.log',  
			    				  level: 'silly', 
			    				  handleExceptions: true,
			    				  colorize: true,
			    				  timestamp: true,
			    				  
	    				  }
	    		  )
      			]
 });


module.exports = winston;  
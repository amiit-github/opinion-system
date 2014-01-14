var fs = require("fs");
var OAuth = require('oauth');
var datum = require('datumbox').factory("247037fb0d191ae468ed13fa7e02ab50");

	var config = JSON.parse(fs.readFileSync('appconfig/config.json'));
	var oauth = new OAuth.OAuth(
	      config.requestTokenLink,
	      config.accessTokenLink,
	      config.consumerKey,
	      config.consumerSecret,
	      '1.0A',
	      null,
	      'HMAC-SHA1'
	    );



function getTweetsByREST(url, callback) {
	oauth.get(url,
    	config.accessToken,
    	config.accessSecret,
    	function (e, data, res){
        	if (e) return console.error(e);   
        	var data = JSON.parse(data); 
        	callback(data);
    	});    
}

function getSentiment(doc, callback) {

        		
        		datum.twitterSentimentAnalysis(doc, function(err, result) {
			    	if ( err ) return console.log(err);
			    	callback(result);
			    	
				});      	
}

module.exports.getTweetsByREST = getTweetsByREST;
module.exports.getSentiment = getSentiment;
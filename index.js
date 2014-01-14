
var f = require("./functions.js");

f.getTweetsByREST('https://api.twitter.com/1.1/search/tweets.json?q=ronaldo&lang=en', function(data) {

  data.statuses.forEach(function(tweet) {
        f.getSentiment(tweet, function(result) {
          console.log("Tweet : "+tweet.text);
          console.log("Result : "+result);
        });
    });
});

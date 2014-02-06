opinion-system
==============

Description  of Files :

algorithm-python/ - contains sentiment analytsis algorithm implememtation using nltk. index.py is the main file.
                    Hosted on http://opinionmining.herokuapp.com.
                    
index.js - Contains NodeJS code, accesses the social api, fetches data from twitter/facebook/rottenTomatoes 
            and passes data to the api on above url and saves the sentiment result.
            It uses functions implemented in functions.js.
            
appconfig/ - contains aunthentication info required to access social api's.

node_modules/ - NodeJS helper modules.

Ignore files -	.gitignore fb-data.json rotten-tomatoes-usages.txt


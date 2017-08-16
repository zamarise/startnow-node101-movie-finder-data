// Global variables
const movieData = {
  
};

// OMDB API
const url = 'http://www.omdbapi.com';

// Create Express server framework
const express = require('express');

// "app" is an instance of Express
const app = express();

// Create Middleware [morgan & axios]

// Morgan is an HTTP request logger
const morgan = require('morgan');

// Axios is a promise based HTTP client for browser and node.js
const axios = require('axios');

// Concise output for development use
app.use(morgan('dev'));

// .get responds to requests at the root route
app.get('', (expressRequest, expressResponse) => {
// console.log('expressRequest.query.i', expressRequest.query.i *= tt3896198*);
  
// get Express request of client generated URL
  var userMovie = expressRequest.originalUrl;
  console.log('userMovie', userMovie);

    /* 

    if (condition) {
      receive request, check if exists then go fetch and then store the data
    }

    */

  if ((movieData.x) && (expressRequest = '/?i=tt3896198')) {
     expressResponse.json(movieData.x);
     console.log('data that I should have', movieData.x);
  } else {

  // Use axios to send a new get request to the OMDB server
  // url points to the OMDB server, userMovie points to "/?i=tt3896198" when testing, and OMDB api key is appended
  axios.get(url + userMovie + '&apikey=8730e0e')
    
    // .then is called when we receive a successful response
    // from the OMDB server
      .then(axiosResponse => {
        
        // .json sets the correct header type & stringifies & sends the data
        // axiosResponse is holding the data from the OMDB server
        movieData["x"] = axiosResponse.data;
        console.log('stored movie data', movieData.x)
        expressResponse.json(axiosResponse.data);
        console.log('response data', axiosResponse.data);
        console.log('axios response status', axiosResponse.status);
        
      })
      
      // .catch is called when we receive an error
      // from trying to hit the OMDB server
      .catch(axiosError => {
        
        // if there is an error then send status 500
        expressResponse
          .sendStatus(500);
          // .send();
        console.log('axios error', axiosError);

      });
  }
})
module.exports = app;

// Get Actin Required Information
var inquireArgument = require("inquirer");

// Create a "Prompt" with a series of questions.
inquireArgument
  .prompt(
    // Here we create a basic text prompt.
  {
    type: "list",
    message: "Choose from the list?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "todo"
  })
  .then(function(inquirerResponse) {
    console.log(inquirerResponse.todo)
    if(inquirerResponse.todo === "my-tweets"){
    return myTweets();  
    }
    if(inquirerResponse.todo === "spotify-this-song"){
    return spotifyThisSong();  
    }  
    if(inquirerResponse.todo === "movie-this"){
    return movieThis();  
    }
    else {
    return doWhatItSays();
    }  
  });


// My-Tweets Function
function myTweets(){
  console.log("myTweets");

var twitterUser = require("inquirer");

// Get Twitter User Name Info
twitterUser
  .prompt(
    // Here we create a basic text prompt.
  {
    type: "input",
    message: "Enter Twitter Screen Name?",
    name: "screenName"
  })
  .then(function(inquirerResponse){
    var screenName = inquirerResponse.screenName;
    console.log(screenName)

    var Twitter = require('twitter');
    var keys = require('./keys.js');
    var client = new Twitter(keys.twitterKeys);

    client.get('statuses/home_timeline',{screen_name: screenName, count: 20} , function(error, tweets, response){
    if(!error){
    for (var i=0; i<tweets.length; i++){
    console.log(tweets[i].text);
    console.log("--------------------")
    }
    }

  });
  });
};

// Spotify-This-Song Function
function spotifyThisSong(){
  console.log("spotifyThisSong");
};

// Movie-This Function
function movieThis(){
  console.log("movieThis");
};

// Do-What-It-Says Function
function doWhatItSays(){
  console.log("doWhatItSays");
};




// Initiate Variables to Start Process
var request = require('request');
var argument = process.argv[2];
var query = process.argv[3];
var fs = require('fs');


if(argument === "my-tweets"){
  return myTweets(); 
}
if((argument === "spotify-this-song") && (query != undefined)){
  return spotifyThisSong(); 
}  
if((argument === "spotify-this-song") && (query === undefined)){
  query = 'The Sign';
  return spotifyThisSong(); 
} 
if((argument === "movie-this") && (query != undefined)){
  return movieThis();
}
if((argument === "movie-this") && (query === undefined)){
  query = 'Mr. Nobody';
  return movieThis();
}
if (argument === "do-what-it-says"){
  return doWhatItSays();
}
else{
  console.log("Try Entering Correct Information")
};  


// My-Tweets Function
function myTweets(){
  console.log("myTweets");

var twitterUser = require("inquirer");

// Get Twitter User Name Info
twitterUser
  .prompt(
    // Here we create a basic text prompt.
    // User to enter his or her user information and product key
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

  var Spotify = require('node-spotify-api');
  
  // User to enter his or her client id and client secret information
  var spotify = new Spotify({
  id: "", // <your spotify client id>,
  secret: "" //<your spotify client secret>
  });
    
  spotify.search({ type: 'track', query: query}, function(err, data){     
    if (err) {
    return console.log('Error occurred: ' + err);
    }
    else {
      var data = data.tracks.items;
      for(var i =0; i < data.length; i++){
                
        console.log(data[i].name); 
        console.log(data[i].album.href);
        console.log(data[i].album.name); 
        console.log(data[i].preview_url); 
            
      for(var j =0; j < data[i].artists.length; j++){
        console.log(data[i].artists[j].name); 
      }
      }
    }
  });
};


// Movie-This Function
function movieThis(){
  console.log("movieThis");
console.log(query);

var queryUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=40e9cece"; 

request(queryUrl, function(error, response, body){

     if (!error && response.statusCode === 200) {
        var movieData= JSON.parse(response.body)
         console.log("Title: " + movieData.Title)
         console.log("Year: " + movieData.Year)
         console.log("IMDB Rating: " + movieData.imdbRating)
         console.log("Country: " + movieData.Country)
         console.log("Language: " + movieData.Language)
         console.log("Plot: " + movieData.Plot)
         console.log("Actors: " + movieData.Actors)
      } 
});
};
  
// Do-What-It-Says Function
function doWhatItSays(){
  console.log("doWhatItSays");
  fs.readFile('random.txt', "utf8", function(err, data){
    console.log(data);
  });
};
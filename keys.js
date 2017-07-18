console.log('this is loaded');

var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "consumer_key?",
      name: "consumer_key"
    },
    {
      type: "input",
      message: "consumer_secret?",
      name: "consumer_secret"
    },
    {
      type: "input",
      message: "access_token_key?",
      name: "access_token_key"
    },
    {
      type: "input",
      message: "access_token_secret?",
      name: "access_token_secret"
    }
  ])

  // Here is the funtion to pass on the keys
  .then(function(inquirerResponse) {
  	exports.twitterKeys = {
  consumer_key: inquirerResponse.consumer_key,
  consumer_secret: inquirerResponse.consumer_secret,
  access_token_key: inquirerResponse.access_token_key,
  access_token_secret: inquirerResponse.access_token_secret
	}
  });
// a small command line node app which takes a URL as a command-line argument as well 
// as a local file path and downloads the resource to the specified path. 

// 1. Take in command line arguments -> need to use process.argv
// 2. Make http request with request library 
// 3. Write file to folder using fs module 
// 4. Allow user to respond to app using terminal stdin (readline)

//edge cases: 
  // what if local file path already exists? -> overwrite file without prompting
  // what if local file path given is invalid? -> check if its valid, otherwise fail and let user know
      // create if statement to check if the file path is valid or not 
  // what happens if the given URL results in an error or non-200 result? -> terminate the app, inform the user and do not write 

const request = require('request');
const fs = require('fs'); //allows you to work with the file system on your computer
const readline = require('readline'); // provides a way of reading a datastream, one line at a time

// 1. get command line arguments 
const args = process.argv.slice(2);
const url = args[0]; // url argument 
const filePath = args[1]; // filepath where we want the resource to download

// 2. make http request
// request('http://example.edu', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// 3. write file to folder using fs 
// command to write files: fs.writeFile();
fs.writeFile("./test.txt", "Is this working", function(err) {
  if (err) {
    return console.log("Error, didn't print", err);
  }
  console.log("File has been written and saved?"); 
});


// desired output: "Downloaded and saved ${number of bytes} to ${local file path}"
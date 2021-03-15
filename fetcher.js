// a small command line node app which takes a URL as a command-line argument as well 
// as a local file path and downloads the resource to the specified path. 

// 4. Allow user to respond to app using terminal stdin (readline)

//edge cases: 
  // what if local file path already exists? -> overwrite file without prompting
  // what if local file path given is invalid? -> check if its valid, otherwise fail and let user know
      // create if statement to check if the file path is valid or not 
  // what happens if the given URL results in an error or non-200 result? -> terminate the app, inform the user and do not write 

const request = require('request');
const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const args = process.argv.slice(2);
const url = args[0]; 
const filePath = args[1];

request(url, (error, response, body) => {

  fs.writeFile(filePath, body, (error) => {
    if (error) {
      return console.log("Error, didn't print", error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  });
});

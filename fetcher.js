const request = require('request');
const fs = require('fs');
const readline = require('readline');
const isValid = require('is-valid-path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const args = process.argv.slice(2);
const url = args[0]; 
const filePath = args[1];

if (!isValid(filePath)) {
  rl.close();
  return console.log("Provided filepath is invalid, try again!");

} else {
  request(url, (error, response, body) => {

    if (error || response.statusCode !== 200) {
      rl.close();
      return console.log("Seems like that page doesn't exist or something :( Please double check and try again!");
    }

    fs.writeFile(filePath, body, (error) => {
      if (error) {
        return console.log("Error, didn't print", error);
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
      rl.close();
    });
  });
}

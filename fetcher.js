const fs = require('fs');
const request = require('request');
const URL = process.argv[2] ;
const localFilePath = process.argv[3];


request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  //get data into a file
  fs.writeFile(localFilePath,body , err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log("Downloaded and saved 1235 bytes to ./index.html");
  });








});
//get data by changing the website to URL in request which then we
//did an npm innit npm install request then node filename then website 
//were getting data from



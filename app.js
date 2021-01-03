//need create server and tell it to start listening on a certain port
const http = require('http');
const fs = require('fs'); //All file handling that we need to do
const port = 3000;

//create server, request and response params, inside the function we handle all the diff activity on the server. Everytime someone requests a page on the server, it will call this function
const server = http.createServer((req, res) => {
  //want to return a response to the user
  res.writeHead(200, { 'Content-Type': 'text/html' }) //params: statusCode, {diff headers you want to }
  fs.readFile('index.html', (err, data) => {
    //err if err happened, data is all data from inside that file
    if (err) {
      res.writeHead(404) //means not found couldn't find what user is looking for
      res.write('Error: File not found') //write out some text to screen, normally you want to render a specific file not found page
    } else { // in case there was no error
      res.write(data)
    }
    res.end(); //we've written everything we want to write
  })
});

//setup server to listen on port
server.listen(port, (err) => {
  if (err) {
    console.log('Something went wrong', error);
  } else {
    console.log('Server is listening on port ' + port);
  }
});

//to run server: `node app.js`
//need to restart server every single time we make a change
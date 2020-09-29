var express = require('express');
var app = express();

//  *****Routes*****
// "/" => "Hi there!"  *** DEFAULT ROUTE ***
app.get('/', function (req, res) {
  res.send('Hi there!');
});

// "/bye" => "Goodbye!"  *** Another Route ***
app.get('/bye', function (req, res) {
  console.log('SOMEONE MADE A REQUEST TO /BYE!!!');
  res.send('Goodbye!!');
});

// "/dog" => "MEOW!"
app.get('/dog', function (req, res) {
  console.log('SOMEONE MADE A REQUEST TO /DOG!!!');
  res.send('MEOW!');
});

//  *** USING  :  FOR PARAMS ***
app.get('/r/:subredditName', function (req, res) {
  var subreddit = req.params.subredditName;
  res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT!');
});

//  *** USE A * AS A DEFAULT CATCH ALL ***
app.get('*', function (req, res) {
  res.send('YOU ARE A STAR!!!');
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server has started!!!');
});

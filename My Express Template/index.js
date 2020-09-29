var express = require('express');
var app = express();

app.use(express.static('public'));
// app.set('view engine', 'ejs');

//  ***** ROUTES *****

// "/" => "Hi there!"  *** DEFAULT ROUTE ***
app.get('/', function (req, res) {
  res.send('Hi there!');
});

// "/dog" => "MEOW!"  *** Another Route ***
app.get('/dog', function (req, res) {
  console.log('SOMEONE MADE A REQUEST TO /DOG!!!');
  res.send('<h2>MEOW!</h2>');
});

//  *** USING  :  FOR PARAMS ***
app.get('/r/:subredditName', function (req, res) {
  var subreddit = req.params.subredditName;
  res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT!');
});

//  *** Render an HTML/EJS FILE... ***
app.get('/home/:something/:id', function (req, res) {
  let somethingVar = req.params.something;
  let idVar = req.params.id;

  res.send('home.ejs', {
    somethingToPass: somethingVar,
    idToPass: idVar,
  });
  res.send('<h2>A random message...</h2>');
});

//  *** USE A * AS A DEFAULT CATCH ALL ***
app.get('*', function (req, res) {
  res.send('YOU ARE A STAR!!!');
});

// Tell Express to listen for requests (start server)...

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('The server has started...');
});

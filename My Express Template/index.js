var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
// app.set('view engine', 'ejs');

//  ***** ROUTES *****

// "/" => "Hi there!"  *** DEFAULT ROUTE ***
app.get('/', function (req, res) {
  res.render('Hi there!');
});

// "/dog" => "MEOW!"  *** Another Route ***
app.get('/dog', function (req, res) {
  console.log('SOMEONE MADE A REQUEST TO /DOG!!!');
  res.render('<h2>MEOW!</h2>');
});

//  *** USING  :  FOR PARAMS ***
app.get('/r/:subredditName', function (req, res) {
  var subreddit = req.params.subredditName;
  res.render('WELCOME TO THE ' + subreddit.toUpperCase() + ' SUBREDDIT!');
});

//  *** Render an HTML/EJS FILE... ***
app.get('/home/:something/:id', function (req, res) {
  let somethingVar = req.params.something;
  let idVar = req.params.id;

  res.render('home.ejs', {
    somethingToPass: somethingVar,
    idToPass: idVar,
  });
  res.render('<h2>A random message...</h2>');
});

app.get('/friends', function (req, res) {
  let friends = ["Woo", "Eugene", "Jason", "Cliff", "Eugene"];

  res.render('friends.ejs', { friends: friends });
});

//   *** POST Route => see form on friends.ejs ***
// BE SURE TO npm install body-parser --save
app.post("/addfriend", function (req, res) {
  res.send('');
};

//  *** USE A * AS A DEFAULT CATCH ALL ***
app.get('*', function (req, res) {
  res.render('YOU ARE A STAR!!!');
});

// Tell Express to listen for requests (start server)...

app.listen(process.env.PORT, process.env.IP, function () {
  console.log('The server has started...');
});

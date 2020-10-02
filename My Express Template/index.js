var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
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

  res.render('home.ejs', {
    somethingToPass: somethingVar,
    idToPass: idVar,
  });
});


//   *** POST Route => see form on friends.ejs ***
let friends= ["Woo", "Eugene", "Jason", "Cliff", "Eugene"];

//   *** POST Route => see form on friends.ejs ***
// BE SURE TO npm install body-parser --save
app.post("/addfriend", function (req, res) {
  // the "newfriend" in req.body.newfriend below comes from name="newfriend" from the <input>"
    // *** to get data from a query string use this: req.query.newfriend ***
  let newFriendName = req.body.newfriend;
  friends.push(newFriendName);
  res.redirect('/friends');
};

app.get('/friends', function (req, res) {
  res.render('friends.ejs', { friends: friends });
});

//  *** USE A * AS A DEFAULT CATCH ALL ***
app.get('*', function (req, res) {
  res.send('YOU ARE A STAR!!!');
});


// Tell Express to listen for requests (start server)...
// app.listen(process.env.PORT, process.env.IP, function () {
//   console.log('The server has started...');
// });

app.listen(3000, function () {
  console.log('The server has started...');
});

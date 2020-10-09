var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');

// where the database lives... on my computer or in a cloud...
// mongoose.connect('mongodb://localhost:27017/collocafe', {
// mongoose.connect('mongodb+srv://yunshine:ilJC8239@cluster0.c4sfn.mongodb.net/collocafe?retryWrites=true&w=majority', {
// this will select the database url based on the environment that runs it...
const url = process.env.DATABASEURL || 'mongodb://localhost:27017/collocafe';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to database!'))
  .catch(error => console.log(error.message));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))
// app.set('view engine', 'ejs');


// SCHEMA SETUP
var cafeSchema = new mongoose.Schema({
  name: String,
  area: String
});

var Cafe = mongoose.model('Cafe', cafeSchema);

// Cafe.create({ name: "Cafe Kitsune", area: "Aoyama" }, function (err, cafe) {
//   if (err) {
//     console.log(error);
//   } else {
//     console.log("New Cafe: ");
//     console.log(cafe);
//   }
// });


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


// New Route to New Cafe Form
app.get("/cafes/new", function (req, res) {
  res.render("new.ejs");
});

// CREATE Route - add new cafe to DB
app.post("/cafes", function(req, res){
    // get data from form and add to cafes array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCafe = {name: name, image: image, description: desc}
    // Create a new campground and save to DB
    Cafe.create(newCafe, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to cafes page
            res.redirect("/cafes");
        }
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

app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log("The server has started...");
});

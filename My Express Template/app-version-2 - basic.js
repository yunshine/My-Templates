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
const cafeSchema = new mongoose.Schema({
  name: String,
  area: String
});

const Cafe = mongoose.model('Cafe', cafeSchema);

// Cafe.create({ name: "Cafe Kitsune", area: "Aoyama" }, function (err, cafe) {
//   if (err) {
//     console.log(error);
//   } else {
//     console.log("New Cafe: ");
//     console.log(cafe);
//   }
// });


let cafes = [
  {
    name: "Blue Bottle",
    area: "Apgujeong"
  },
  {
    name: "Trichromatic Coffee",
    area: "Nakano-Shimbashi Station"
  },
];

//  ***** ROUTES *****

// Root Route
app.get('/', function (req, res) {
  res.send('This is the root route...');
});

// Index Route
app.get('/cafes', function (req, res) {
  // Get all cafes from DB
  Cafe.find(function (err, allCafes) {
    if (err) {
      console.log(err);
    } else {
      res.render("index.ejs", { cafes: allCafes });
    }
  });
});

// app.get('/cafes', function (req, res) {
//   res.render('index.ejs', { cafes: cafes });
// });

// New Route - goes to new cafe form
app.get("/cafes/new", function (req, res) {
  res.render("new.ejs");
});

// Create Route - makes and saves a new cafe
app.post("/cafes", function (req, res) {
  // get data from form and add to cafes array
  var name = req.body.name;
  var area = req.body.area;
  var newCafe = { name: name, area: area }
  cafes.push(newCafe);
  res.redirect("/cafes");

  // *****  Create a new campground and save to DB  *****
  // Cafe.create(newCafe, function (err, newlyCreated) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     //redirect back to cafes page
  //     res.redirect("/cafes");
  //   }
  // });
});

// Default Route
app.get('*', function (req, res) {
  res.send('Are you lost?');
});


app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log("The server has started...");
});

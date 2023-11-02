var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('static'));

// use res.render to load up an ejs view file

const songs = [
  {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      length: "5:55"
  },
  {
      title: "Imagine",
      artist: "John Lennon",
      length: "3:02"
  },
  {
      title: "Hotel California",
      artist: "Eagles",
      length: "6:30"
  },
  {
      title: "Like a Rolling Stone",
      artist: "Bob Dylan",
      length: "6:13"
  },
  {
      title: "Gucci Gang",
      artist: "Lil Pump",
      length: "2:11"
  }
];

const timeslots = [
  { time: '9:00 AM - 10:00 AM' },
  { time: '10:00 AM - 11:00 AM' },
  { time: '11:00 AM - 12:00 PM' },
  { time: '12:00 PM - 1:00 PM' },
  { time: '1:00 PM - 2:00 PM' },
  { time: '2:00 PM - 3:00 PM' },
  { time: '3:00 PM - 4:00 PM' },
  { time: '4:00 PM - 5:00 PM' },
  { time: '5:00 PM - 6:00 PM' },
  { time: '6:00 PM - 7:00 PM' },
  { time: '7:00 PM - 8:00 PM' },
  { time: '8:00 PM - 9:00 PM' },
  { time: '9:00 PM - 10:00 PM' },

  // Add other timeslots as needed
];

// index page
app.get('/', function(req, res) {
  res.render('pages/index', { songs: songs, timeslots: timeslots });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});


app.listen(8080);
console.log('Server is listening on port 8080');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// sets the 'static' folder to static
app.use(express.static('static'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/swe432');
const db = mongoose.connection;

const musicSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  length: {
    type: String,
  }
});

const playlistSchema = new mongoose.Schema({
  timeslot: {
    type: String,
    required: true
  },
  songs: [musicSchema]
});

db.once('open', () => {
  console.log('DEBUG: Mongo session has been connected');
});

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
];

const Songs = mongoose.model('SongList', musicSchema, 'SongList');
const Playlist = mongoose.model('Playlist', playlistSchema, 'Playlist');


// index page
app.get('/', async function(req, res) {
  let songslist = await Songs.find();
  let playlistDB = await Playlist.find();

  res.render('pages/index', { 
    DBsongs: songslist, 
    timeslots: timeslots,
    playlist : playlistDB
   });
});

// about page
app.get('/home', function(req, res) {
  res.render('pages/home', {timeslots: timeslots });
});

app.post('/addSong', async (req, res) => {
  const selectedSongTitle = req.body.selectedSong;
  const formTimeslot = req.body.selectedTimeslot;

  const selectedSong = await Songs.findOne({title: selectedSongTitle});
  if (!selectedSong) {
    return res.status(404).json({ error: 'Selected song not found' });
  }

  const playlist = await Playlist.findOne({timeslot: formTimeslot});
  if (!playlist) {
    return res.status(404).json({error: 'Playlist not found'});
  }

  playlist.songs.push(selectedSong);
  await playlist.save();

  res.status(201).json({success: true, message: 'Song added to the playlist successfully'});

});


app.listen(8080);
console.log('Server is listening on port 8080');
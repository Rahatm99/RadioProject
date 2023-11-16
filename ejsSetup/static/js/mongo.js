const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/swe432');

const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  length: String
});

const playlistSchema = new mongoose.Schema({
    timeslot: {
      type: String,
      required: true
    },
    songs: [musicSchema]
  });

const Songs = mongoose.model('SongList', musicSchema, 'SongList');
const Playlist = mongoose.model('Playlist', playlistSchema, 'Playlist');

module.exports = Songs;
module.exports = Playlist;
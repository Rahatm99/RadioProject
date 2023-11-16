const currentPlaylistIndex = 0;

async function getAllSongs() {
    const dbsongs = await Songs.find();
}

async function getPlaylist() {
    const dbplaylist = await Playlist.find();
}

document.addEventListener("DOMContentLoaded", async function () {
    await getPlaylist();
    await getAllSongs();
});

async function displayPlaylist(index) {
    console.log("button check");

    const response = await fetch('/api/playlist');
    const playlist = await response.json();

    const selectedTimeslot = playlist[index];

    document.getElementById('timeslot').textContent = `Time: ${selectedTimeslot.timeslot}`;
    document.getElementById('djName').textContent = 'DJ: DJ Person 1';

    if (selectedTimeslot.songs.length > 0) {
        const firstSong = selectedTimeslot.songs[0];
        document.getElementById('songPlaying').textContent = `Now Playing: ${firstSong.title} | By: ${firstSong.artist} | Length: ${firstSong.length}`;
    } else {
        // Handle the case when there are no songs in the selected timeslot
        document.getElementById('songPlaying').textContent = 'Now Playing: Nothing | By: | Length:';
    }
}

//Alert when play button is clicked
function playSong(songName, songArtist, songLength) {
    console.log("button check222222");


    alert(`Now Playing: ${songName}`);

    // Add the song to the current playlist's songs array
    playlist[currentPlaylistIndex].songs.push({
        title: songName,
        artist: songArtist,
        length: songLength
    });

    // Changes song name in the main box
    const song = document.getElementById("songPlaying");
    song.textContent = `Now Playing: ${songName} | By: ${songArtist} | Length: ${songLength}`;
}

function confirmBooking() {
    const confirmation = window.confirm("Are you sure you want to book this DJ?")
}

//Search Function for DJs
function searchDJs() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var list = document.getElementById("djList");
    var item = list.getElementsByTagName("li");

    //Iterates through the list to find matches
    for (var i = 0; i < item.length; i++) {
        var text = item[i].textContent.toLowerCase();

        if (!text.includes(input)) {
            item[i].style.display = "none";
        }

        else {
            item[i].style.display = "list-item";
        }
    }
}

//Toggles lists from DJs to Songs
function toggleList() {
    var djList = document.getElementById("djList");
    var songList = document.getElementById("songList");

    if (djList.style.display === "block") {
        djList.style.display = "none";
        songList.style.display = "block";
    }

    else {
        djList.style.display = "block";
        songList.style.display = "none";
    }
}


//Creates a list by using the object
function displaySongs() {
    const songList = document.getElementById("songList");
    const DBsong = JSON.parse(DBsongs);

    DBsong.forEach(dbItem => {
        const songsDB = dbItem.songs;

        songsDB.forEach(song => {
            const list = document.createElement("li");
            list.textContent = `${song.title} by ${song.artist} (Length: ${song.length})`;

            const playButton = document.createElement("button");
            playButton.textContent = "Play";
            playButton.classList.add("BookButton");
            playButton.addEventListener("click", () => {
                playSong(song.title, song.artist, song.length);
            });

            list.appendChild(playButton);
            songList.appendChild(list);
        });
    });
}

//Applies after page is loaded
//document.addEventListener("DOMContentLoaded", displaySongs);
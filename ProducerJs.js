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

//List of songs
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

//Creates a list by using the object
function displaySongs() {
    const songList = document.getElementById("songList");

    songs.forEach(song => {
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
}

//Applies after page is loaded
document.addEventListener("DOMContentLoaded", displaySongs);

//Alert when play button is clicked
function playSong(songName, songArtist, songLength) {
    alert(`Now Playing: ${songName}`);

    //Changes song name in the main box
    const song = document.getElementById("songPlaying");
    song.textContent = `Now Playing: ${songName} | By: ${songArtist} | Length: ${songLength}`;
}

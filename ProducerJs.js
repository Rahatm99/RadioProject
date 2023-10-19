function confirmBooking() {
    const confirmation = window.confirm("Are you sure you want to book this DJ?")
}

//Search Function for DJs
function searchDJs() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var list = document.getElementById("djList");
    var items = list.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
        var text = items[i].textContent.toLowerCase();
        
        if (text.includes(input)) {
            items[i].style.display = "list-item";
        } 
        
        else {
            items[i].style.display = "none";
        }
    }
}

//Toggles lists from DJs to Songs
function toggleGridStyle() {
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
        playButton.addEventListener("click", () => {
            playSong(song.title);
        });

        list.appendChild(playButton);
        songList.appendChild(list);
    });
}

//Applies after page is loaded
document.addEventListener("DOMContentLoaded", displaySongs);

//Alert when play button is clicked
function playSong(songName) {
    alert(`Now Playing: ${songName}`);
}
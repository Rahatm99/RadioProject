function confirmBooking() {
    const confirmation = window.confirm("Are you sure you want to book this DJ?")
}

const element = document.getElementById("songButton");
element.addEventListener("click", playSong);

function playSong() {
    alert("Now Playing:");
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
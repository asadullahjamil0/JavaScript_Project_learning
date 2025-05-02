console.log("Let's write js");
let currentSong = new Audio();

function convertSecondsToMinutes(seconds) {
    // Calculate the number of minutes
    let minutes = Math.floor(seconds / 60);
    // Calculate the remaining seconds
    let remainingSeconds = Math.floor(seconds % 60);

    // Format minutes and seconds to always have two digits
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(remainingSeconds).padStart(2, '0');

    // Return the formatted time string
    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs() {
    let a = await fetch('http://127.0.0.1:5500/JavaSript/project%20-%20Spotify%20Clone/Songs/')
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/Songs/")[1]);
        }
    }
    return songs;
}

const playMusic = (track) => {
    // let audio = new Audio("/JavaSript/project%20-%20Spotify%20Clone/Songs/ " + track)
    currentSong.src = "/JavaSript/project%20-%20Spotify%20Clone/Songs/" + track;
    currentSong.play();
    play.src = "pause.svg"
    document.querySelector(".songInfo").innerHTML = track;
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function main() {

    // Getting the list of all songs
    let songs = await getSongs()
 
    // Show all the songs in the playlist
    let songsUL = document.querySelector(".songsList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songsUL.innerHTML = songsUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Harry</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img src="playButton.svg" alt="">
                            </div></li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songsList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    });

    // Attach an event listener to play,previous and next button
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "musicButton.svg";
        }
    })

    // listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${convertSecondsToMinutes(currentSong.currentTime)}/${convertSecondsToMinutes(currentSong.duration)}`
    })
}
main();

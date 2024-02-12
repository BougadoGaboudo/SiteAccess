const modalContainer = document.querySelector('.modal-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');

modalTriggers.forEach(trigger => trigger.addEventListener('click', toggleModal))

function toggleModal(){
    modalContainer.classList.toggle('active')
}

// global variable for the player
let player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    let stopButton1 = document.querySelector(".close-modal");
    stopButton1.addEventListener("click", function() {
        player.stopVideo();
    });
    let stopButton2 = document.querySelector(".overlay");
    stopButton2.addEventListener("click", function() {
        player.stopVideo();
    });

}

// Inject YouTube API script
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
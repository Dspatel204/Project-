
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("play-button");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}
function stopVideo() {
    if (!video.paused) {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);

video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});

video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});

video.addEventListener("click", stopVideo);


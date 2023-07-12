//button sleep get element DOM
let sleepEl = document.getElementById("sleep");

// B button reset get element DOM
let resetEl = document.getElementById("reset");
resetEl.addEventListener("click", reset);

//Variable for control video
const video = document.getElementById("video");
video.playbackRate = 0.5;

// A this is a "h2" element with a ID counter
let counterEl = document.getElementById("counter");

// A
//Counter for Sheep
function sleep() {
  counterEl.textContent++;
  counterEl.style.color = "red";
}

// B
function reset() {
  counterEl.textContent = 0;
  counterEl.style.color = "black";
}

//Video

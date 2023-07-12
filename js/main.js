//button sleep get element DOM
let sleepEl = document.getElementById("sleep");

// B button reset get element DOM
let resetEl = document.getElementById("reset");
resetEl.addEventListener("click", reset);

//Variable for control video
let videoEl = document.getElementById("video");
videoEl.playbackRate = 0.5;

// Obtenez une référence à l'élément de bouton de lecture
let playEl = document.getElementById("play");

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton de lecture
playEl.addEventListener("click", function () {
  // Vérifiez si la vidéo est en pause, puis démarrez la lecture
  if (videoEl.paused) {
    videoEl.play();
  }
});

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

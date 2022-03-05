const h1 = document.querySelector("h1");
const button = document.getElementById("buttons");

//asigning variable to all button

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openHat = document.getElementById("open");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

//asigning variable to all audio element
const audioBoom = document.getElementById("audioBoom");
const audioClap = document.getElementById("audioClap");
const audioHihat = document.getElementById("audioHihat");
const audioKick = document.getElementById("audioKick");
const audioOpen = document.getElementById("audioOpen");
const audioRide = document.getElementById("audioRide");
const audioSnare = document.getElementById("audioSnare");
const audioTink = document.getElementById("audioTink");
const audioTom = document.getElementById("audioTom");

// for clicking button

// mouse click
boom.addEventListener("click", () => {
  audioBoom.src = "./sounds/boom.wav";
});
clap.addEventListener("click", () => {
  audioClap.src = "./sounds/clap.wav";
});
hihat.addEventListener("click", () => {
  audioHihat.src = "./sounds/hihat.wav";
});

kick.addEventListener("click", () => {
  audioKick.src = "./sounds/kick.wav";
});
openHat.addEventListener("click", () => {
  audioOpen.src = "./sounds/openhat.wav";
});
ride.addEventListener("click", () => {
  audioRide.src = "./sounds/ride.wav";
});
snare.addEventListener("click", () => {
  audioSnare.src = "./sounds/snare.wav";
});
tink.addEventListener("click", () => {
  audioTink.src = "./sounds/tink.wav";
});
tom.addEventListener("click", () => {
  audioTom.src = "./sounds/tom.wav";
});
// key is not press

document.addEventListener("keyup", () => {
  boom.style.backgroundColor = "burlywood";
  clap.style.backgroundColor = "burlywood";
  hihat.style.backgroundColor = "burlywood";
  kick.style.backgroundColor = "burlywood";
  openHat.style.backgroundColor = "burlywood";
  ride.style.backgroundColor = "burlywood";
  snare.style.backgroundColor = "burlywood";
  tom.style.backgroundColor = "burlywood";
  tink.style.backgroundColor = "burlywood";

  h1.style.color = "burlywood";
  h1.style.fontSize = "35px";
});
//KEY PRESS

document.addEventListener("keypress", (event) => {
  if (event.key === "a" || event.key === "A") {
    audioBoom.src = "./sounds/boom.wav";
    boom.style.backgroundColor = "#3B62B1";
    h1.style.color = "red";
    h1.style.fontSize = "40px";
  } else if (event.key === "s" || event.key === "S") {
    audioClap.src = "./sounds/clap.wav";
    clap.style.backgroundColor = "#3B62B1";
    h1.style.color = "green";
    h1.style.fontSize = "40px";
  } else if (event.key === "d" || event.key === "D") {
    audioHihat.src = "./sounds/hihat.wav";
    hihat.style.backgroundColor = "#3B62B1";
    h1.style.color = "orange";
    h1.style.fontSize = "40px";
  } else if (event.key === "f" || event.key === "F") {
    audioKick.src = "./sounds/kick.wav";
    kick.style.backgroundColor = "#3B62B1";
    h1.style.color = "blue";
    h1.style.fontSize = "40px";
  } else if (event.key === "g" || event.key === "G") {
    audioOpen.src = "./sounds/openhat.wav";
    openHat.style.backgroundColor = "#3B62B1";
    h1.style.color = "purple";
    h1.style.fontSize = "40px";
  } else if (event.key === "h" || event.key === "H") {
    audioRide.src = "./sounds/ride.wav";
    ride.style.backgroundColor = "#3B62B1";
    h1.style.color = "blue";
    h1.style.fontSize = "40px";
  } else if (event.key === "j" || event.key === "J") {
    audioSnare.src = "./sounds/snare.wav";
    snare.style.backgroundColor = "#3B62B1";
    h1.style.color = "yellow";
    h1.style.fontSize = "40px";
  } else if (event.key === "k" || event.key === "K") {
    audioTink.src = "./sounds/tink.wav";
    tink.style.backgroundColor = "#3B62B1";
    h1.style.color = "pink";
    h1.style.fontSize = "40px";
  } else if (event.key === "l" || event.key === "L") {
    audioTom.src = "./sounds/tom.wav";
    tom.style.backgroundColor = "#3B62B1";
    h1.style.color = "brown";
    h1.style.fontSize = "40px";
  }
});

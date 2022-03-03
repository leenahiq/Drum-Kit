const header =document.getElementById("header");
const button = document.getElementById("buttons")

//asigning variable to all button

const boom =document.getElementById("boom")
const clap  =document.getElementById("clap")
const hihat =document.getElementById("hihat")
const kick =document.getElementById("kick")
const openHat =document.getElementById("open")
const ride =document.getElementById("ride")
const snare =document.getElementById("snare")
const tink =document.getElementById("tink")
const tom =document.getElementById("tom")


//asigning variable to all audio element
const audioBoom =document.getElementById("audioBoom")
const audioClap =document.getElementById("audioClap")
const audioHihat =document.getElementById("audioHihat")
const audioKick =document.getElementById("audioKick")
const audioOpen =document.getElementById("audioOpen")
const audioRide =document.getElementById("audioRide")
const audioSnare =document.getElementById("audioSnare")
const audioTink =document.getElementById("audioTink")
const audioTom =document.getElementById("audioTom")


// for clicking button 

// mouse click
boom.addEventListener("click", () => {
	audioBoom.src = "boom.wav";

});
clap.addEventListener("click", () => {
	audioClap.src = "clap.wav";
});
hihat.addEventListener("click", () => {
	audioHihat.src = "hihat.wav";
});

kick.addEventListener("click", () => {
	audioKick.src = "kick.wav";
});
openHat.addEventListener("click", () => {
	audioOpen.src = "openhat.wav";
});
ride.addEventListener("click", () => {
	audioRide.src = "ride.wav";
});
snare.addEventListener("click", () => {
	audioSnare.src = "snare.wav";
});
tink.addEventListener("click", () => {
	audioTink.src = "tink.wav";
});
tom.addEventListener("click", () => {
	audioTom.src = "tom.wav";
});
// key is not press 

document.addEventListener("keyup", () => {
    boom.style.backgroundColor = "blanchedalmond";
    clap.style.backgroundColor = "blanchedalmond";
	hihat.style.backgroundColor = "blanchedalmond";
	kick.style.backgroundColor = "blanchedalmond";
	openHat.style.backgroundColor = "blanchedalmond";
	ride.style.backgroundColor = "blanchedalmond";
	snare.style.backgroundColor = "blanchedalmond";
	tom.style.backgroundColor = "blanchedalmond";
	tink.style.backgroundColor = "blanchedalmond";
     header.style.color = "blanchedalmond";
 

  
  
});
//KEY PRESS 

document.addEventListener("keypress",(event) =>{
    if (event.key === "a" || event.key ===  "A"){
       audioBoom.src="boom.wav";
       boom.style.backgroundColor = "#3B62B1";
       header.style.color = "pink";
     

	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "s" || event.key ===  "S"){
        audioClap.src="clap.wav";
        clap.style.backgroundColor = "#3B62B1";
        header.style.color = "crimson";
    }
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "d" || event.key ===  "D"){
        audioHihat.src="hihat.wav";
        hihat.style.backgroundColor = "#3B62B1";
        header.style.color = "yellow";
	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "f" || event.key ===  "F"){
        audioKick.src="kick.wav";
        kick.style.backgroundColor = "#3B62B1";
        header.style.color = "blue";
	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "g" || event.key ===  "G"){
        audioOpen.src="openhat.wav";
        openHat.style.backgroundColor = "#3B62B1";
        header.style.color = "green";
	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "h" || event.key ===  "H"){
        audioRide.src="ride.wav";
        ride.style.backgroundColor = "#3B62B1";
        header.style.color = "purple";
	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "j" || event.key ===  "J"){
        audioSnare.src="snare.wav";
        snare.style.backgroundColor = "#3B62B1";
        header.style.color = "red";
	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "k" || event.key ===  "K"){
        audioTink.src="tink.wav";
        tink.style.backgroundColor = "#3B62B1";
        header.style.color = "orange";
	}
});
    document.addEventListener("keypress",(event) =>{
    if (event.key === "l" || event.key ===  "L"){
        audioTom.src="tom.wav";
        tom.style.backgroundColor = "#3B62B1";
        header.style.color = "blue";
    }    
});

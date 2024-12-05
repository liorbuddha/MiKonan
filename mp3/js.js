'use strict'
//Konanim list
let konanim = [
    "Ohad",
    "Ido",
    "Rafi",
    "Itamar",
    "Yossef",
    "Niran",
    "Lior",
    "Avichi"
]
//div to display list of konanim
let konanimView = document.querySelector(".konanimDiv");

Object.keys(konanim).forEach(konan=>{
    konanimView.innerHTML += `<div class = "konan">
    <h2 class="konanBtn" onClick="playKonan(${konan});">${konanim[konan]}</h2>
    </div>`;
    console.log(konan);
    console.log(konanim[konan]);
})
let playKonan = (konan)=>{
    console.log(konan);
    let name = `mp3/${konanim[konan]}.mp3`;

     let audio = new Audio(name);
     audio.addEventListener("canplaythrough", (event) => {
       /* the audio is now playable; play it if permissions allow */
       audio.play();
     });
 }


 let theWheel = new Winwheel({
    'canvasId'    : 'myCanvas',
    'numSegments' : 12,
    'fillStyle'   : '#e7706f',
    'lineWidth'   : 3
});
theWheel.drawSegments();

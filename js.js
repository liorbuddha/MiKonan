"use strict";
//Konanim list

let konanim = [
  "Ohad",
  "Ido",
  "Rafi",
  "Itamar",
  "Yossef",
  "Niran",
  "Lior",
  "Avichi",
  "Sharon",
  "Moudi",
  "Oleg",
  "YossefTushim",
  "Refaellush"
];
let sohnim = ["Avraham", 'Rami', "Avishay", "Avishay2","Avishay3", "Avishay4", "ShemSheli", "soda", "toda", "Ima", "Zalame", "HaideYaach"];
let lakohot = ['orMisedetAda', "Rayar", "EifoHauga","HineAnachnu" , "RayaLongTime",  "EliGil", "EliGilMaKore", "MotiRomema", "MotiDio", "Jessica1", "Jessica2", "AdratKodesh", "PizzaRoma"];
//div to display list of konanim
let konanimView = document.querySelector(".konanimDiv");

Object.keys(konanim).forEach((konan) => {
  konanimView.innerHTML += `<div class = "konan">
    <h2 class="konanBtn" onClick="playKonan(${konan});">${konanim[konan]}</h2>
    </div>`;
  console.log(konan);
  console.log(konanim[konan]);
});
let sohnimView = document.querySelector(".sohnim");

Object.keys(sohnim).forEach((konan) => {
  sohnimView.innerHTML += `<div class = "konan">
    <h2 class="konanBtn" onClick="playSohen(${konan});">${sohnim[konan]}</h2>
    </div>`;
  console.log(konan);
  console.log(sohnim[konan]);
});
let lakohotView = document.querySelector(".lakohot");

Object.keys(lakohot).forEach((konan) => {
  lakohotView.innerHTML += `<div class = "konan">
    <h2 class="konanBtn" onClick="playLakoah(${konan});">${lakohot[konan]}</h2>
    </div>`;
  console.log(konan);
  console.log(sohnim[konan]);
});
let playKonan = (konan) => {
  let name;
  console.log(typeof konan);

  name = `mp3/${konanim[konan]}.mp3`;

  let audio = new Audio(name);
  //audio.addEventListener("canplaythrough", (event) => {
  /* the audio is now playable; play it if permissions allow */
  audio.play();
  //});
};
let playSohen = (konan) => {
  let name;
  console.log(typeof konan);

  name = `mp3/${sohnim[konan]}.mp3`;

  let audio = new Audio(name);
  //audio.addEventListener("canplaythrough", (event) => {
  /* the audio is now playable; play it if permissions allow */
  audio.play();
  //});
  //});
};

let playLakoah = (konan) => {
  let name;
  console.log(typeof konan);
  if (konan === "Yossef") {
    let audio = new Audio(name);
    let audio2 = new Audio("mp3/Yossefold.mp3");
    audio2.play();

    audio.play();
  } else {
    name = `mp3/${lakohot[konan]}.mp3`;
  }

  let audio = new Audio(name);
  //audio.addEventListener("canplaythrough", (event) => {
  /* the audio is now playable; play it if permissions allow */
  audio.play();
  //});
};
/// Wheel of konanim
let theWheel = new Winwheel({
  canvasId: "myCanvas",
  numSegments: 9,
  textDirection: "reversed",
  segments: [
    { fillStyle: "#eae56f", text: "Ohad" },
    { fillStyle: "#89f26e", text: "Ido" },
    { fillStyle: "#7de6ef", text: "Rafi" },
    { fillStyle: "#e7706f", text: "Itamar" },
    { fillStyle: "#eae56f", text: "Yossef" },
    { fillStyle: "#89f26e", text: "Niran" },
    { fillStyle: "#7de6ef", text: "Lior" },
    { fillStyle: "#e7706f", text: "Avichai" },
    { fillStyle: "#e7466f", text: "Sharon" },
  ],
  fillStyle: "#e7706f",
  lineWidth: 3,
  outerRadius: 146, // Use these three properties to
  centerX: 200, // correctly position the wheel
  centerY: 201, // over the background.
  // Note animation properties passed in constructor parameters.
  animation: {
    type: "spinToStop", // Type of animation.
    duration: 5, // How long the animation is to take in seconds.
    spins: 8, // The number of complete 360 degree rotations the wheel is to do.
    callbackFinished: "alertPrize()",
    callbackAfter: "drawTriangle()",
  },
});
//start spin btn
let result;
let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", () => {
  theWheel.startAnimation();
});
//reset btn
let reset = document.querySelector(".resetBtn");
reset.addEventListener("click", () => {
  theWheel.stopAnimation(false);
  theWheel.rotationAngle = 0;
  theWheel.draw();
  drawTriangle();
});
// This function called after the spin animation has stopped.
let alertPrize = () => {
  // Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
  let winningSegment = theWheel.getIndicatedSegment();
  // Basic alert of the segment text which is the prize name.
  // alert("You have won " + winningSegment.text + "!");
  console.log("here "+winningSegment.text);
  playKonan(winningSegment.text);
};
let drawTriangle = () => {
  // Get the canvas context the wheel uses.
  let ctx = theWheel.ctx;

  ctx.strokeStyle = "navy"; // Set line colour.
  ctx.fillStyle = "aqua"; // Set fill colour.
  ctx.lineWidth = 2;
  ctx.beginPath(); // Begin path.
  ctx.moveTo(170, 5); // Move to initial position.
  ctx.lineTo(230, 5); // Draw lines to make the shape.
  ctx.lineTo(200, 40);
  ctx.lineTo(171, 5);
  ctx.stroke(); // Complete the path by stroking (draw lines).
  ctx.fill(); // Then fill.
};

//floating konan image
let konanImageBox = document.querySelector(".pic");
let jumpingWindow = document.querySelector(".popupContainer");
jumpingWindow.style.display = "none";
let openJumpingWindow = document.querySelector(".openJumpingWindow");
openJumpingWindow.addEventListener("click", () => {
  console.log("clicked");
  jumpingWindow.style.display = "flex";
  let name = `mp3/Koni.mp3`;

  let audio = new Audio(name);
  //audio.addEventListener("canplaythrough", (event) => {
  /* the audio is now playable; play it if permissions allow */
  audio.play();
});
let closeHalonKofez = document.querySelector(".btnCloseHalonKofez");
closeHalonKofez.addEventListener("click", () => {
  jumpingWindow.style.display = "none";
});

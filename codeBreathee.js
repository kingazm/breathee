document.getElementById("instruction").innerHTML = "start slowly breathing";

//ANIMATION SECTION
const dot = new Image();
function init() {
  dot.src = "dot.png"; //the image going around on circle
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0, 0, 300, 300); // clearing the canvas

  ctx.strokeStyle = "white"; //while transparent makes the stroke invisible
  ctx.save();
  ctx.translate(150, 150);

  //the dot moving mechanics
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 7) * time.getSeconds() +
      ((2 * Math.PI) / 7000) * time.getMilliseconds(),
  );
  //formula adjusted (numbers 4.1, 4100) so that one
  //circle takes up about seconds (+/-0.5s)
  // its meant to be calming mechanics
  //mix of box breathing and calm breaths
  //begin with calm small breaths and then etc.

  ctx.translate(105, 0);
  ctx.drawImage(dot, -12, -12, 30, 30);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); //the path
  ctx.stroke();

  window.requestAnimationFrame(draw);
}

//BREATHING ASSISTANCE - TEXT DISPLAY SECTION

function displayInstruction(instruction, timeout, countdown) {
	setTimeout(function() {document.getElementById("instruction").innerHTML = instruction;}, currentTime);
	currentTime += timeout;

	for (let i = countdown; i > 0; i--) {
		setTimeout(function() {document.getElementById("instruction").innerHTML = i;}, currentTime);
		currentTime += 1000;
	}
}

function back(){
    window.location.assign("homePage.htm");
}

init();

let currentTime = 2000;

//breathing cycle
for (let k = 0; k < 3; k++) {
	for (let j = 0; j < 3; j++) {
		displayInstruction("inhale", 4000, 0);
		displayInstruction("hold", 1000, 5);
		displayInstruction("exhale", 4000, 0);
		displayInstruction("hold", 1000, 5);

	}

	displayInstruction("try taking a few regular breaths", 6000, 0);
}

setTimeout(function() { window.location.assign("homePage.htm");}, currentTime);



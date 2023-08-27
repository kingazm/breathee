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

//TEXT SECTION

init();

function inhaleFunction(){
    document.getElementById("instruction").innerHTML = "inhale";
}
function exhaleFunction(){
    document.getElementById("instruction").innerHTML = "exhale";
}
function holdFunction(){
    document.getElementById("instruction").innerHTML = "hold";
}
function justBreatheFunction(){
    document.getElementById("instruction").innerHTML = "try to take a few regular breaths";
}
function breathee(){
    setTimeout(inhaleFunction(), 20000);
    setTimeout(holdFunction(), 8000);
}

//array of objects, used in "for" option but figure out some way to reset the loop, as the infinity loop is not possible
const timings = [
    { funct: inhaleFunction, delay: 4000 },
  { funct: holdFunction, delay: 6000 },
  { funct: exhaleFunction, delay: 10000 },
  { funct: inhaleFunction, delay: 16000 },
  { funct: holdFunction, delay: 20000 },
  { funct: exhaleFunction, delay: 24000 },
  { funct: justBreatheFunction, delay: 34000 },
  { funct: inhaleFunction, delay: 40000 },
  { funct: holdFunction, delay: 44000 },
  { funct: exhaleFunction, delay: 48000 },
  { funct: justBreatheFunction, delay: 54000 },
  { funct: inhaleFunction, delay: 60000 },
  { funct: holdFunction, delay: 66000 },
  { funct: exhaleFunction, delay: 70000 },
  { funct: justBreatheFunction, delay: 76000 },
  { funct: inhaleFunction, delay: 90000 },
  { funct: holdFunction, delay: 94000 },
  { funct: exhaleFunction, delay: 100000 },
  { funct: justBreatheFunction, delay: 110000 },
];
//adjust the timing
//for the time being, little ugly but works for now

for (const timing of timings) {
        setTimeout(timing.funct, timing.delay);
    }

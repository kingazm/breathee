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
    { funct: inhaleFunction, delay: 10000 },
  { funct: holdFunction, delay: 14000 },
  { funct: exhaleFunction, delay: 18000 },
  { funct: holdFunction, delay: 24000 },
  { funct: inhaleFunction, delay: 28000 },
  { funct: holdFunction, delay: 32000 },
  { funct: exhaleFunction, delay: 36000 },
  { funct: justBreatheFunction, delay: 40000 },
  { funct: inhaleFunction, delay: 50000 },
  { funct: holdFunction, delay: 54000 },
  { funct: exhaleFunction, delay: 58000 },
  { funct: holdFunction, delay: 64000 },
  { funct: inhaleFunction, delay: 68000 },
  { funct: holdFunction, delay: 72000 },
  { funct: exhaleFunction, delay: 76000 },
  { funct: justBreatheFunction, delay: 80000 },
  { funct: inhaleFunction, delay: 90000 },
{ funct: holdFunction, delay: 94000 },
{ funct: exhaleFunction, delay: 98000 },
{ funct: holdFunction, delay: 104000 },
{ funct: inhaleFunction, delay: 108000 },
{ funct: holdFunction, delay: 112000 },
{ funct: exhaleFunction, delay: 116000 },
{ funct: justBreatheFunction, delay: 120000 },
{ funct: inhaleFunction, delay: 130000 },
{ funct: holdFunction, delay: 134000 },
{ funct: exhaleFunction, delay: 138000 },
{ funct: holdFunction, delay: 144000 },
{ funct: inhaleFunction, delay: 148000 },
{ funct: holdFunction, delay: 152000 },
{ funct: exhaleFunction, delay: 156000 },
{ funct: justBreatheFunction, delay: 160000 },

];
//adjust the timing
//for the time being, little ugly but works for now
//after some time, make screen giving help tips and reseting back to home screen

for (const timing of timings) {
        setTimeout(timing.funct, timing.delay);
    }

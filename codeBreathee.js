
//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//ctx.beginPath();
//ctx.arc(95,50,40,0,2*Math.PI);
//ctx.stroke();



document.getElementById("instruction").innerHTML = "start slowly breathing";
//changes instruction to next instruction
//make that dependand on timer (make the timer)
//which will corespond to the breathing technique


//cicrle mechanics starting here
const dot = new Image();
function init() {
  dot.src = "dot.png"; //the sample image
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.clearRect(0, 0, 300, 300); // clearing the canvas

  ctx.strokeStyle = "rgba(100,100,100,100)";
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
  //consistent with the box breathing method
  //update 12.08 7:29 pm: slow down the ball
  // its meant to be calming mechanics
  //mix of box breathing and calm breaths!!!
  //begin with calm small breaths and then etc.

  ctx.translate(105, 0);
  ctx.drawImage(dot, -12, -12, 30, 30);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); //the path
  ctx.stroke();

  window.requestAnimationFrame(draw);
}

init();
//animate the text
function inhaleFunction(){
    document.getElementById("instruction").innerHTML = "inhale";
}
function exhaleFunction(){
    document.getElementById("instruction").innerHTML = "exhale";
}
function holdFunction(){
    document.getElementById("instruction").innerHTML = "hold";
}
function betterFunction(){
    document.getElementById("instruction").innerHTML = "better?";

    // instert clearing the canvas some way
}

//for (let i = 0; i < 4; i++) {
    //setTimeout(inhaleFunction,40000);
    //setTimeout(holdFunction,43000);
    //setTimeout(exhaleFunction,50000);
//}does not work properly?

/*
//to be put into a loop
setTimeout(inhaleFunction,40000);
setTimeout(holdFunction,43000);
setTimeout(exhaleFunction,50000);
setTimeout(inhaleFunction,90000);
setTimeout(holdFunction,93000);
setTimeout(exhaleFunction,100000);
setTimeout(betterFunction,110000);
*/


const timings = [
  { funct: inhaleFunction, delay: 40000 },
  { funct: holdFunction, delay: 43000 },
  { funct: exhaleFunction, delay: 50000 },
  { funct: inhaleFunction, delay: 90000 },
  { funct: holdFunction, delay: 93000 },
  { funct: exhaleFunction, delay: 100000 },
  { funct: betterFunction, delay: 110000 }
];

for (const timing of timings) {
  setTimeout(timing.funct, timing.delay);
}




//setTimeout(alert("Feeling better?"),1000)



//does not work in
// way setTimeout(holdFunction(omg),4000);
//an array?

//adjust the timing; fix why is the last one only appearing rn
//- timeout issue?
//actually, update, inhale appeared too but the
//timeouts seem to be working at the same time!
//so it's not the 1 after 2, but 1 and 2
//have to add the timeout of 1 to
//the time i want 2 to be after 1

//setTimeout(alert('Hello'),3000); checked that timeout works
//set the timer when page loads to track when to show inhale,
//hold, exhale (optionaly, when hold, stop motion)

//when this is done, try and optimize the mechanics
//with switch or sth

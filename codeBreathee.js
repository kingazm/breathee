
//var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");
//ctx.beginPath();
//ctx.arc(95,50,40,0,2*Math.PI);
//ctx.stroke();

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
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.drawImage(dot, -12, -12, 30, 30);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); //the path
  ctx.stroke();

  window.requestAnimationFrame(draw);
}

init();

//set the timer when page loads to track when to show inhale, hold, exhale (optionaly, when hold, stop motion)

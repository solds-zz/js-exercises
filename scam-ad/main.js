var direction = 400;
var increment;

function doAnimation() {
  var divAdvert = document.getElementById("divAdvert");
  var currentLeft = divAdvert.offsetLeft;
  if (currentLeft == 0) {
  	increment = 2;
  }
  if (currentLeft >= direction) {
  	increment = -2;
  }
  var newLocation = currentLeft + increment;
  divAdvert.style.left = newLocation + "px";
  divAdvert.style.color = "red";
}

function colorChange() {
   var divAdvert = document.getElementById("divAdvert");
   divAdvert.style.color = "blue";
}

setInterval(doAnimation, 10);
setInterval(colorChange, 10);

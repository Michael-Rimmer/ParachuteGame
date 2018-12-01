var troopers = [];
var bullets = [];
var debris = [];
var helicopters = [];
var turret;

// Debris Helicopter Trooper

window.onload = function() {
  turret = new Raster('turret');
  turret.position = new Point(200,380);

  path = new Path.Rectangle({
  	point: [75, 75],
  	size: [75, 75],
  	strokeColor: 'black'
  });
}();

function onFrame(event) {
  // Each frame, rotate the path by 3 degrees:
  if(Key.isDown('right')){
    turret.rotate(90);
  } else if(Key.isDown('left')) {
    turret.rotate(-3);
  }
}

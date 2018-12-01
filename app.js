import Turret from './js/Turret.js'
import Bullet from './js/Bullet.js'
import {Helicopter, Trooper} from './Helicopter.js'

var troopers = [];
var bullets = [];
var debris = [];
var helicopters = [];
var turret = new Turret(200, 380);

var troopers_img = [];
var bullets_img = [];
var debris_img = [];
var helicopters_img = [];
var turret_img;

const toDeg = 180/Math.PI;

const bullet_velocity = 1;

var frame_count = 0;

// Debris Helicopter Trooper

window.onload = function() {
}();

function onFrame(event) {
  clearRasters();
  frame_count = (frame_count + 1) % 120;
  // Each frame, rotate the path by 3 degrees:
  if (frame_count == 119) {
    helicopters.push(new Helicopter());
  }
  if(Key.isDown('right')){
    turret.rotate(90);
  } else if(Key.isDown('left')) {
    turret.rotate(-3);
  }
  objectToRaster();
}

function onKeyDown(event) {
  if (event.key = " ") {
    bullets.push(new Bullet(x, y, turret.getAngle(), bullet_velocity)); // TODO
  }
}

function objectToRaster() {
  clearRasters();

  turret_img = new Raster('turret');
  turret_img.rotate(turret.getAngle() * toDeg - 90);
  turret_img.position = newPoint(turret.getPosition_x(), turret.getPosition_y())

  helicopters.forEach(function(helicopter) {
    helicopter_img = new Raster('helicopter')
    helicopter_img.position = new Point(helicopter.display()[0], helicopter.display()[1]);
    if (helicopter.display()[2] === 'r') {
      // mirrorimage
    }

    helicopters_img.push(helicopter_img);
  });

  bullets.forEach(function(bullet) {
    bullet_img = new Raster('bullet')
    bullet_img.position = new Point(bullet.getPosition_x(), bullet.getPosition_y());
    bullet_img.rotate(bullet.getAngle() * toDeg - 90);

    bullets_img.push(helicopter_img);
  });
}

function clearRasters() {
  var troopers_img = [];
  var bullets_img = [];
  var debris_img = [];
  var helicopters_img = [];
  var turret_img = null;
}

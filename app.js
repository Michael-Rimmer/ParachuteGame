import Turret from './js/Turret.js'
import Bullet from './js/Bullet.js'
import {Helicopter, Trooper} from './Helicopter.js'

var troopers = [];
var bullets = [];
var debris = [];
var helicopters = [];
var turret = new Turret();

var troopers_img = [];
var bullets_img = [];
var debris_img = [];
var helicopters_img = [];
var turret_img;

const bullet_velocity = 1;

var frame_count = 0;

// Debris Helicopter Trooper

window.onload = function() {
  turret = new Raster('turret');
  turret.position = new Point(200,380);
}();

function onFrame(event) {
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
}

function onKeyDown(event) {
  if (event.key = " ") {
    bullets.push(new Bullet(x, y, turret.getAngle(), bullet_velocity));
  }
}

function objectToRaster() {

}

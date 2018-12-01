// globals
var canvas, ctx, gameSize, turret, helicopters, bullet, bullets = [];
const toDeg = 180 / Math.PI;

const bullet_velocity = [1, 1];
var velocity = {x: 1.8, y: -1.2};

var frame_count = 0;

// classes
class Bullet {
  // set the location of the bullet
  constructor(position_x, position_y, angle, velocity) {
    this.position_x = position_x;
    this.position_y = position_y;
    this.angle = angle;
    this.velocity = velocity;
  }

  get position_x() {
    return this._position_x;
  }
  get position_y() {
    return this._position_y;
  }
  get angle() {
    return this._angle;
  }

  set position_x(position_x) {
    this._position_x = position_x;
  }
  set position_y(position_y) {
    return this._position_y;
  }
  set angle(angle) {
    return this._angle;
  }

  move() {
    while (True) {
      if (this.angle >= (Math.pi) / 2) {
        const angle_temp = ((Math.pi) * 2) - this.angle;
        this.position_x += this.velocity * Math.cos(angle_temp) * 0.0001;
        this.position_y -= this.velocity * Math.sin(angle_temp) * 0.0001;
      } else {
        this.position_x -= this.velocity * Math.cos(angle_temp) * 0.0001;
        this.position_y -= this.velocity * Math.sin(angle_temp) * 0.0001;
      }
    }
  }

  // detect collision of the bullet with end of the frame and helicopers
  detectCollision() {}

  display() {
    let drawing = new Image();
    drawing.src =
        'resources/bullet.png';  // can also be a remote URL e.g. http://
    ctx.drawImage(drawing, turret.x, turret.y);
  }
}

class Helicoptor {
  constructor() {
    if (Math.round(Math.random())) {
      this.direction = 'l';
      this.x = 400;
      this.y = 20;
    } else {
      this.direction = 'r';
      this.x = 0;
      this.y = 20;
    }
    this.velocity = 0;
  }

  move() {
    if (this.direction == 'r') {
      this.x += 10;
    } else {
      this.x -= 10;
    }
  }

  display() {
    this.move();
    return [this.x, this.y, this.direction];
  }

  hit() {}
}

class Trooper extends Helicoptor {
  constructor() {
    super();
  }
}

class Turret {
  constructor() {
    this.angle = 0;
  }

  get angle() {
    return this._angle;
  }

  set angle(angle) {
    if (angle >= 0 && angle <= Math.pi) {
      this._angle = angle;
    } else {
      // throw 'Angle beyond the exceeded amount';
    }
  }
  display() {
    let drawing = new Image();
    drawing.src =
        '/resources/turret.png';  // can also be a remote URL e.g. http://
    ctx.drawImage(drawing, turret.x, turret.y);
  }
}

// Input
function keyDown(event) {
  if (event.code == 'ArrowLeft') {
    turret.x -= 10;
  } else if (event.code == 'ArrowRight') {
    turret.x += 10;
  } else if (event.code == 'Space') {
    bullets.push(new Bullet(0, 0, turret.angle, bullet_velocity));
  }
}

window.addEventListener('keydown', keyDown);

// INIT
function init() {
  // Creates window for game
  canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.border = '2px solid #a42bff';
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  gameSize = {x: canvas.width, y: canvas.height};

  gameState = true;
  map = [];
  set = setInterval(draw, 1);

  var troopers = [];
  bullets = [];
  bullet = new Bullet()
  var debris = [];
  var helicopters = [];

  turret = new Turret();
  return;
}

// DRAW
function draw() {
  // Clears previous drawings
  ctx.clearRect(0, 0, gameSize.x, gameSize.y);

  frame_count = (frame_count + 1) % 120;
  // Each frame, rotate the path by 3 degrees:
  if (frame_count == 119) {
    let foo = new Helicoptor();
    helicopters.push(foo);
  }
  helicopters.forEach(function(helicopter) {
    // helicopter.display();
  });

  bullets.forEach(function(bullet) {
    bullet.display();
  });

  bullet.display();
  turret.display();
}

// START
window.addEventListener('load', function() {
  // starts game
  init();
});

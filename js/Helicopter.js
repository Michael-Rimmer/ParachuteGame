<<<<<<< HEAD
class Helicopter {
  constructor(ctx) {
=======
export default class Helicoptor {
  constructor() {
>>>>>>> 258dc9132538be99db19b0a1b687b8fc5fcdc7f0
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
    this.ctx = ctx;
    update();
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

  update(){
    helicoper = new Image();
    helicoper.src = '../resources/helicoper.png';
    ctx.drawImage(helicopter, x, y);
  }
}

class Trooper extends Helicopter {
  constructor() {
    super();
  }

  update(){
    trooper = new Image();
    helicoper.src = '../resources/trooper.png';
    ctx.drawImage(troopers, x, y);
  }
}

export default {Helicopter, Trooper};

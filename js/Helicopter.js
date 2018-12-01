class Helicopter {
  constructor(ctx) {
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

  display() {
    return (this.x, this.y, this.direction);
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

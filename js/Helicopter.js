export default class Helicoptor {
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

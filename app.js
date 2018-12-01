
class Helicoptor {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.velocity = 0;
  }

  // Change [0, 2] to A ♦
  display() {}

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
  fire() {}
  rotate() {}
  hit() {}

  display() {}
}

class Debris {
  constructor() {
    this.x = 0;
    this.y = 0;
    velocity = 0;
  }

  display() {}
}

class Bullet extends Debris {
  constructor() {
    super();
  }
}



////////////////////// MAIN FUNCTION //////////////////////
var deck = new Deck(), Players, PLAYING = false;

// helper function to make code easier to read
function getID(x) {
  return document.getElementById(x);
}

// helper function to make code easier to read
function styleID(x) {
  return document.getElementById(x).style;
}

// helper function so I don't have to write
// Players[Players.length - 1] to access the user
Array.prototype.last = function() {
  return this[this.length - 1];
};

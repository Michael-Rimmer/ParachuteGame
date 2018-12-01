// declares these variables in the global scope
var canvas, ctx, paddle1, paddle2, gameSize, velocity, ball, map, gameState,
    set, point;

function init() {
  // Creates window for game
  canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 400;
  canvas.style.border = '2px solid #a42bff';
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);

  // assigns variables
  gameSize = {x: canvas.width, y: canvas.height};
  paddle1 = {x: 10, y: 20, w: 15, h: 65, score: 0};
  paddle2 = {x: 375, y: 20, w: 15, h: 65, score: 0};
  point = {P1: false, P2: true};
  ball = {x: 190, y: 190, w: 15, h: 15};
  velocity = {x: 1.8, y: -1.2};

  gameState = true;
  map = [];
  set = setInterval(draw, 100);

  return;
}

function draw() {
  if (gameState) {
    // Clears previous drawings
    ctx.clearRect(0, 0, gameSize.x, gameSize.y);
    ctx.fillStyle = '#000000';
    ctx.font = '2.5em Lucida Console';
    ctx.fillText(paddle1.score, 150, 50);
    ctx.fillText(paddle2.score, 210, 50);

    // Figures out Paddle 1 movement
    if (map[87] === true && paddle1.y > 10) paddle1.y -= 3.25;   // W
    if (map[83] === true && paddle1.y < 320) paddle1.y += 3.25;  // S
    // Draws Paddle 1
    ctx.fillStyle = '#2bffa4';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.w, paddle1.h);
    // Figures out Paddle 2 movement
    if (map[38] === true && paddle2.y > 10) paddle2.y -= 3.25;   // Up
    if (map[40] === true && paddle2.y < 320) paddle2.y += 3.25;  // Down

    // Draws Paddle 2
    ctx.fillStyle = '#ff2b86';
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.w, paddle2.h);

    // If colliding:
    // lose
    if (ball.x > 390) {
      // right wall
      gameState = false;
      point = {P1: true, P2: false};

      paddle1.score += 1;
      ctx.clearRect(100, 10, 100, 60);
      ctx.fillStyle = '#000000';
      ctx.fillText(paddle1.score, 150, 50);
      if (paddle1.score > 9) {
        win('1');
      }
    }
    if (ball.x < 0) {
      // left wall
      gameState = false;
      point = {P1: false, P2: true};
      paddle2.score += 1;

      ctx.clearRect(200, 10, 100, 60);
      ctx.fillStyle = '#000000';
      ctx.fillText(paddle2.score, 210, 50);

      if (paddle2.score > 9) {
        win('2');
      }
    }

    // Bounce!
    if (ball.y > 390 || ball.y < 0) {
      // against top and bottom walls
      velocity.y = -velocity.y;
    }

    if (paddle1.x + paddle1.w > ball.x && paddle1.y < ball.y + ball.h &&
        paddle1.h + paddle1.y > ball.y) {
      // against paddle 1
      velocity.x = -velocity.x;
    }

    if (paddle2.x < ball.x + ball.w && paddle2.y < ball.y + ball.h &&
        paddle2.h + paddle2.y > ball.y) {
      // against paddle 2
      velocity.x = -velocity.x;
    }

    // Moves ball position
    ball.x += velocity.x;
    ball.y += velocity.y;

    // Draws the ball
    drawing = new Image();
    drawing.src =
        'https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png';  // can also be a remote URL e.g. http://
    ctx.drawImage(drawing, ball.x, ball.y);
  }
  // Not dependant on gameState
  // Restart the game if R is pressed
  if (map[82] === true && gameState === false) {
    // resets ball and paddle positions
    ball = {x: 190, y: 190, w: 15, h: 15};
    paddle1.x = 10;
    paddle1.y = 20;
    paddle2.x = 375;
    paddle2.y = 20;

    // serves ball to winner of last point
    if (point.P1) {
      velocity.x = -1.8;
      velocity.y = -1.2;
    }
    if (point.P2) {
      velocity.x = 1.8;
      velocity.y = -1.2;
    }

    gameState = true;
  }
}

function win(player) {
  clearInterval(set);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillRect(0, 0, gameSize.x, gameSize.y);
  ctx.font = '2.4em Lucida Console';
  ctx.fillStyle = '#000000';
  if (player === '1') {
    ctx.fillText('Player 1 wins!', 50, 210);
  } else {
    ctx.fillText('Player 2 wins!', 50, 210);
  }
}


onkeydown = onkeyup = function(e) {
  // run on every interaction of a key, sets the keys state to an array value
  map[e.keyCode] = e.type === 'keydown';
};

window.addEventListener('load', function() {
  // starts game
  init();
});

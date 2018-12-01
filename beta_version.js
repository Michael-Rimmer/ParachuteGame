var canvas = document.getElementById('canva');
var ctx = canvas.getContext('2d');

class Chopper{
	constructor(x, y, velocity){
		this.x = x;
		this.y = y;
		this.velocity = velocity;
	}

	move(){
		while (this.x > 0){
			console.log(this.x);
			ctx.clearRect(this.x, this.y, this.x+60, this.y+60);
			this.x += this.velocity;
			this.showChopper();
		}
	}

	moveOnce(){
		this.x += this.velocity;
		this.showChopper();
	}

	showChopper(){
		console.log(this.x,this.y);
		var link = new Image();
		link.src='resources/helicopter.png';
		var x = this.x;
		var y = this.y;
		//link.onload=ctx.drawImage(link,1000,0,60,60);
		link.onload=function(){
		  ctx.drawImage(link,x,y,60,60);
		}
	}
}
/*
function showBullet(){
	var link = new Image();
	link.src='resources/bullet.png';
	link.onload=function(){
    ctx.drawImage(link,310,100,20,20);
	}
}

function showTurret(){
	var link = new Image();
	link.src='resources/turret.png';
	link.onload=function(){
    ctx.drawImage(link,500,700,40,40);
	}
}
*/

chopper = new Chopper(1000, 10, -100);
chopper.showChopper();
//chopper.move();
/*
var n = 10;
while (n > 0){
	chopper.moveOnce();
	n -= 1;
}
*/
//setInterval(chopper.moveOnce, 100);

(function myLoop (i) {          
   setTimeout(function () {   
      setInterval(chopper.moveOnce, -100)          //  your code here                
      if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
   }, 1000)
})(1); 


//showBullet();
//showTurret();

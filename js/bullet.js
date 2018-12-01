export default class Bullet {
  //set the location of the bullet
  constructor(position_x, position_y, angle, velocity) {
    this.position_x = position_x;
    this.position_y = position_y;
    this.angle = angle;
    this.velocity = velocity;
  }

  get position_x(){
    return this._position_x;
  }
  get position_y(){
    return this._position_y;
  }
  get angle(){
    return this._angle;
  }

  set position_x(position){
    this._position_x = position;
  }
  set position_y(position){
    this._position_y = position;
  }
  set angle(angle){
    this._angle = sangle;

  move(){
    while (True){
      if (this.angle >= (Math.pi)/2){
        const angle_temp = ((Math.pi)*2)-this.angle;
        this.position_x += this.velocity*Math.cos(angle_temp)*0.0001;
        this.position_y -= this.velocity*Math.sin(angle_temp)*0.0001;
      } else {
        this.position_x -= this.velocity*Math.cos(angle_temp)*0.0001;
        this.position_y -= this.velocity*Math.sin(angle_temp)*0.0001;
      }
    }
  }

  //detect collision of the bullet with end of the frame and helicopers
  detectCollision(){

  }

}

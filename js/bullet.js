class Bullet {
  //set the location of the bullet
  constructor(position_x, position_y, angle, velocity) {
    this.position_x = position_x;
    this.position_y = position_y
    this.angle = angle
    this.velocity = velocity
    this.bullet = new Raster('resources/bullet.png')
    render()
  }

  getPosition_x(){
    return this.position_x;
  }
  getPosition_y(){
    return this.position_y
  }

  move(){
    while True{
      this.position_x += this.velocity*math.cos(angle)*0.0001
      this.position_y += this.velocity*math.sin(angle)0.0001
      render()
    }
  }

  render(){
    bullet.position(position_x, position_y)
  }
}

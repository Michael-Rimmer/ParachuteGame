export default class Turret {
  constructor() {
    this.angle = 0;
  }

  get angle(){
    return this._angle;
  }

  set angle(angle){
    if (angle>=0 && angle<= Math.pi){
      this._angle = angle;
    } else {
      throw 'Angle beyond the exceeded amount';
    }
  }

}

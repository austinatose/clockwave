// two hands, four points
// angular velocity and acceleration

// coordinate of clock is centre of clock

class Clock {
  constructor(x, y) {
    this.radius = 15;
    this.position = createVector(x, y);
    this.angularVelocity1 = 0; // in degrees per frame
    this.angularVelocity2 = 0;
    this.angle1 = 0;
    this.angle2 = 0;
  }

  display() {
    push();
    translate(this.position.x, this.position.y);
    stroke(255);
    strokeWeight(2);
    fill(255);
    ellipse(0, 0, this.radius * 2);
    stroke(0);
    line(0, 0, this.radius * sin(this.angle1), this.radius * cos(this.angle1));
    line(0, 0, this.radius * sin(this.angle2), this.radius * cos(this.angle2));
    pop();
  }

  setRotSpeed(v1, v2) {
    this.angularVelocity1 = v1;
    this.angularVelocity2 = v2;
  }

  update() {
    this.angle1 += this.angularVelocity1;
    this.angle2 += this.angularVelocity2;
    if (this.angle1 >= 360) this.angle1 -= 360;
    if (this.angle1 >= 360) this.angle1 -= 360;
    line(0, 0, this.radius * sin(this.angle1), this.radius * cos(this.angle1));
    line(0, 0, this.radius * sin(this.angle2), this.radius * cos(this.angle2));
  }

  setDefault() {
    this.angle1 = 0;
    this.angle2 = 0;
  }

  stopAtOrigin() {
    if (this.angle1 = 0)
      {this.angularVelocity1 = 0; this.angle1 = 0;}
    else this.angularVelocity1 = 1;
    if (this.angle2 = 0)
      {this.angularVelocity2 = 0; this.angle2 = 0;}
    else this.angularVelocity2 = 1;
  }
}
  
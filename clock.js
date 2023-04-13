// two hands, four points
// angular velocity and acceleration

// coordinate of clock is centre of clock

class Clock {
    constructor(x, y) {
      this.radius = 15;
      this.position = createVector(x, y);
      this.angularVelocity = 0;
      this.angularAcceleration = 0;
    }

    display() {
        stroke(255);
        strokeWeight(2);
        fill(255);
        ellipse(this.position.x, this.position.y, this.radius * 2);
    }

    setRotSpeed(speed) {
        this.angularVelocity = speed;
    }
  }
  
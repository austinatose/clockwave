// 14 * 36 grid of clocks

let clockArr = [];

function setup() {
  createCanvas(1285, 515); // each clock is 30*30, gap of 5, ends are 20
}

function draw() {
  // setup and display clock array
  background(243, 243, 243);
  for (let i = 0; i < 36; i++) {
    clockArr[i] = [];
    for (let j = 0; j < 14; j++) {
      clockArr[i][j] = new Clock(20 + 15 + 30 * i + 5 * (i - 1), 20 + 15 + 30 * j + 5 * (j - 1));
      clockArr[i][j].display();
    }
  }

  // update clock array
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      currClock = clockArr[i][j];
      currClock.setRotSpeed(noise(currClock.position.x * 0.2, currClock.position.y * 0.2));
    }
  }
}

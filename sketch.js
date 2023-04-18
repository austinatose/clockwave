// 14 * 36 grid of clocks

let clockArr = [];
let noiseMult = 0.02

function setup() {
  createCanvas(1285, 515); // each clock is 30*30, gap of 5, ends are 20
  angleMode(DEGREES);

  // init 2D array
  for (let i = 0; i < 36; i++) {
    clockArr[i] = [];
    for (let j = 0; j < 14; j++) {
      clockArr[i][j] = new Clock(20 + 15 + 30 * i + 5 * (i - 1), 20 + 15 + 30 * j + 5 * (j - 1));
    }
  }
}

function draw() {
  background(243, 243, 243);

  // update clock array
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      currClock = clockArr[i][j];
      currClock.display();
      currClock.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      currClock.update();
    }
  }
}

function normalPerlin() {

}

function mirroredPerlin() {
  
}
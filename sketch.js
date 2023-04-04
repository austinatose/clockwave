// 14 * 36 grid of clocks

let clockArr = [];

function setup() {
  createCanvas(1142, 474); // each clock is 30*30, gap of 2, ends are 30
}

function draw() {
  background(243, 243, 243);
  for (let i = 0; i < 36; i++) {
    clockArr[i] = [];
    for (let j = 0; j < 14; j++) {
      clockArr[i][j] = new Clock(i * 32 + 30, j * 32 + 30);
      clockArr[i][j].display();
    }
  }
}

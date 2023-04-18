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

let mode = 0;

function draw() {
  background(243, 243, 243);
  // if 1 key pressed, call normalPerlin()

  if (mode == 0)
    normalPerlin();
  else if (mode == 1)
    mirroredPerlin();
  else if (mode == 2)
    test();
}

//detect keypress

function keyPressed() {
  if (keyCode === 49) { // 1 : normal perlin
    resetDefault();
    console.log(0);
    mode = 0;
  } else if (keyCode === 50) { // 2 : mirrored perlin
    resetDefault();
    console.log(1);
    mode = 1;
  } else if (keyCode === 51) { // 3 : test
    resetDefault(2);
    mode = 2;
  }
}

// clock modes

function resetDefault() {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      clockArr[i][j].setDefault();
    }
  }
}

function normalPerlin() {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      currClock = clockArr[i][j];
      currClock.display();
      currClock.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      currClock.update();
    }
  }
}

function mirroredPerlin() {
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 7; j++) {
      Clock1 = clockArr[i][j];
      Clock2 = clockArr[35 - i][j];
      Clock3 = clockArr[i][13 - j];
      Clock4 = clockArr[35 - i][13 - j];
      Clock1.display(); Clock2.display(); Clock3.display(); Clock4.display();
      Clock1.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      Clock2.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      Clock3.setRotSpeed(-noise(i * noiseMult, j * noiseMult), noise(i * noiseMult, j * noiseMult));
      Clock4.setRotSpeed(-noise(i * noiseMult, j * noiseMult), noise(i * noiseMult, j * noiseMult));
      Clock1.update(); Clock2.update(); Clock3.update(); Clock4.update();
    }
  }
}

function test() {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      currClock = clockArr[i][j];
      currClock.display();
      currClock.setRotSpeed(map(noise(i * noiseMult, j * noiseMult), 0, 1, -1.5, 1.5), -map(noise(i * noiseMult, j * noiseMult), 0, 1, -1.5, 1.5));
      currClock.update();
    }
  }
}

// 14 * 36 grid of clocks

let clockArr = [];
let noiseMult = 0.02;

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
  // if 2 key pressed, call mirroredPerlin()
  // if 3 key pressed, call resetDefaultSlowly()
  // if 0 key pressed, call maintainPattern()

  // modes are workaround to calling function only once in draw()

  if (mode == 0)
    normalPerlin();
  else if (mode == 1)
    mirroredPerlin();
  else if (mode == 2)
    resetDefaultSlowly();
  else if (mode == 3)
    maintainPattern();
}

//detect keypress

function keyPressed() {
  if (keyCode === 49) { // 1 : normal perlin
    resetDefault();
    mode = 0;
  } else if (keyCode === 50) { // 2 : mirrored perlin
    mirrorMode();
    mode = 1;
  } else if (keyCode === 51) { // 3 : reset slowly
    mode = 2;
  } else if (keyCode === 48) { // 0 : maintain
    mode = 3;
  }
}

// clock modes


// call-once functions to set clock starting positions
function resetDefault() {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      clockArr[i][j].setDefault();
    }
  }
}

function mirrorMode() {
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 7; j++) {
      Clock1 = clockArr[i][j];
      Clock2 = clockArr[35 - i][j];
      Clock3 = clockArr[i][13 - j];
      Clock4 = clockArr[35 - i][13 - j];
      Clock1.angle1 = 225; Clock1.angle2 = 225;
      Clock2.angle1 = 135; Clock2.angle2 = 135;
      Clock3.angle1 = 315; Clock3.angle2 = 315;
      Clock4.angle1 = 45; Clock4.angle2 = 45;
    }
  }
}

// call-every-frame functions
function maintainPattern() {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      clockArr[i][j].display();
      clockArr[i][j].update();
    }
  }
}

function resetDefaultSlowly() {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 14; j++) {
      currClock = clockArr[i][j];
      currClock.display();
      currClock.checkStop();
      if (currClock.angle1 != 0) currClock.angularVelocity1 = 1;
      if (currClock.angle2 != 0) currClock.angularVelocity2 = -1;
      currClock.update();
    }
  }
}

// perlin noise functions
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

function mirroredPerlin() { // rework
  for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 7; j++) {
      Clock1 = clockArr[i][j];
      Clock2 = clockArr[35 - i][j];
      Clock3 = clockArr[i][13 - j];
      Clock4 = clockArr[35 - i][13 - j];
      Clock1.display(); Clock2.display(); Clock3.display(); Clock4.display();
      Clock1.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      Clock2.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      Clock3.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      Clock4.setRotSpeed(noise(i * noiseMult, j * noiseMult), -noise(i * noiseMult, j * noiseMult));
      Clock1.update(); Clock2.update(); Clock3.update(); Clock4.update();
    }
  }
}


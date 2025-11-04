// variables for movement
let eyeX1 = 220;
let eyeX2 = 280;
let heartY1 = 100;
let heartY2 = 150;
let eyeSpeed1, eyeSpeed2, heartSpeed1, heartSpeed2;

// diagonal shape
let starX = 250;
let starY = 450;
let starSpeedX, starSpeedY;

// title animation
let titleSize = 24;
let titleGrowing = true;
let count = 0;

function setup() {
  createCanvas(500, 600);
  eyeSpeed1 = random(1, 2);
  eyeSpeed2 = random(1, 3);
  heartSpeed1 = random(0.5, 1.5);
  heartSpeed2 = random(0.5, 1.2);
  starSpeedX = random(1, 2);
  starSpeedY = random(1, 2);
}

function draw() {
  background(250, 220, 230);

  //title animation
  if (titleGrowing) {
    titleSize += 0.5;
    count++;
    if (count >= 10) {
      titleGrowing = false;
      count = 0;
    }
  } else {
    titleSize -= 0.5;
    count++;
    if (count >= 10) {
      titleGrowing = true;
      count = 0;
    }
  }

  // title
  textAlign(CENTER, TOP);
  textSize(titleSize);
  fill(20);
  noStroke();
  text("My Self Portrait", width / 2, 10);

  
  // hearts move up/down
  heartY1 += heartSpeed1;
  heartY2 -= heartSpeed2;
  if (heartY1 > 120 || heartY1 < 80) heartSpeed1 *= -1;
  if (heartY2 > 170 || heartY2 < 130) heartSpeed2 *= -1;

  // hearts
  fill(255, 105, 180);
  noStroke();
  ellipse(100, heartY1, 30, 30);
  ellipse(120, heartY1, 30, 30);
  triangle(90, heartY1 + 5, 130, heartY1 + 5, 110, heartY1 + 35);

  ellipse(400, heartY2, 30, 30);
  ellipse(420, heartY2, 30, 30);
  triangle(390, heartY2 + 5, 430, heartY2 + 5, 410, heartY2 + 35);

  //diagonal star
  starX += starSpeedX;
  starY += starSpeedY;
  if (starX > 470 || starX < 30) starSpeedX *= -1;
  if (starY > 570 || starY < 350) starSpeedY *= -1;
  drawStar(starX, starY, 5, 15, 5);

  //move eyes left/righ
  eyeX1 += eyeSpeed1;
  eyeX2 -= eyeSpeed2;
  if (eyeX1 > 230 || eyeX1 < 210) eyeSpeed1 *= -1;
  if (eyeX2 > 290 || eyeX2 < 270) eyeSpeed2 *= -1;

  // hair
  noStroke();
  fill(200, 170, 110);
  ellipse(200, 280, 70, 250);
  ellipse(300, 280, 70, 250);

  // neck
  fill(240, 210, 180);
  rect(225, 310, 50, 50);

  // shirt
  fill(180, 140, 220);
  rect(150, 350, 200, 120);

  // head 
  fill(240, 210, 180);
  ellipse(250, 250, 180, 210);

  // ears
  fill(240, 210, 180);
  rect(160, 240, 20, 35);
  rect(320, 240, 20, 35);

  // eyes
  fill(255);
  ellipse(eyeX1, 240, 38, 22);
  ellipse(eyeX2, 240, 38, 22);

  // pupils
  fill(30);
  noStroke();
  ellipse(eyeX1, 240, 6, 6);
  ellipse(eyeX2, 240, 6, 6);

  // nose 
  fill(230, 190, 160);
  triangle(240, 265, 260, 265, 250, 290);

  // mouth 
  stroke(180, 60, 80);
  strokeWeight(3);
  line(225, 315, 275, 315);

  // signature
  noStroke();
  fill(30);
  textAlign(RIGHT, BOTTOM);
  textSize(16);
  text("Madison Allen", width - 12, height - 12);
}

// function for the diagonal star
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
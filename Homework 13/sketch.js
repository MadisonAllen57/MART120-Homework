
var playerX = 50;
var playerY = 50;
var playerSize = 25;


var obsX = [];
var obsY = [];
var obsSize = [];
var obsR = [];
var obsG = [];
var obsB = [];


var staticX = -100; 
var staticY = -100;
var staticSize = 40;


var exitX = 520;
var exitY = 320;
var exitSize = 60;


var won = false;

function setup() {
  createCanvas(600, 400);

  // 5 obstacles
  for (var i = 0; i < 5; i++) {
    obsX[i] = random(0, width);
    obsY[i] = random(0, height);
    obsSize[i] = random(20, 60);
    obsR[i] = random(255);
    obsG[i] = random(255);
    obsB[i] = random(255);
  }
}

function draw() {
  background(200);

  
  fill(0, 255, 0);
  rect(exitX, exitY, exitSize, exitSize);
  fill(0);
  textSize(12);
  text("EXIT", exitX + 15, exitY + 35);

  
  fill(0, 0, 255);
  ellipse(playerX, playerY, playerSize, playerSize);

  
  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + 3;
  }
  if (keyIsDown(UP_ARROW)) {
    playerY = playerY - 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY = playerY + 3;
  }

 
  if (playerX < 0) {
    playerX = 0;
  }
  if (playerX > width) {
    playerX = width;
  }
  if (playerY < 0) {
    playerY = 0;
  }
  if (playerY > height) {
    playerY = height;
  }

  
  for (var i = 0; i < obsX.length; i++) {
    fill(obsR[i], obsG[i], obsB[i]);
    ellipse(obsX[i], obsY[i], obsSize[i], obsSize[i]);

    
    obsX[i] = obsX[i] + random(-2, 2);
    obsY[i] = obsY[i] + random(-2, 2);

    
    if (obsX[i] > width) {
      obsX[i] = 0;
    }
    if (obsX[i] < 0) {
      obsX[i] = width;
    }
    if (obsY[i] > height) {
      obsY[i] = 0;
    }
    if (obsY[i] < 0) {
      obsY[i] = height;
    }
  }

  
  fill(150, 0, 200);
  rect(staticX, staticY, staticSize, staticSize);

  
  if (playerX > exitX &&
      playerX < exitX + exitSize &&
      playerY > exitY &&
      playerY < exitY + exitSize) {
    won = true;
  }

 
  if (won == true) {
    fill(0);
    textSize(40);
    text("YOU WIN!", 190, 200);
  }

 
}

function mousePressed() {
  
  staticX = mouseX;
  staticY = mouseY;
}
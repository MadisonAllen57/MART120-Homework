var playerX;
var playerY;
var playerR;
var playerSpeed;

var obsX = [];
var obsY = [];
var obsSize = [];
var obsDX = [];
var obsDY = [];
var obsColor = [];

var staticMade = false;
var staticX = 0;
var staticY = 0;
var staticSize = 32;

var exitX, exitY, exitW, exitH;
var won = false;

function setup() {
  createCanvas(720, 480);

  // player
  playerX = 60;
  playerY = height / 2;
  playerR = 16;
  playerSpeed = 4;

  // 3 moving obstacles
  obsX.push(160);
  obsY.push(120);
  obsSize.push(40);
  obsDX.push(random(-2, 2));
  obsDY.push(random(-2, 2));
  obsColor.push(color(255, 100, 100));

  // obstacle 2
  obsX.push(360);
  obsY.push(260);
  obsSize.push(60);
  obsDX.push(random(-2, 2));
  obsDY.push(random(-2, 2));
  obsColor.push(color(100, 255, 150));

  // obstacle 3
  obsX.push(520);
  obsY.push(80);
  obsSize.push(28);
  obsDX.push(random(-2, 2));
  obsDY.push(random(-2, 2));
  obsColor.push(color(120, 170, 255));

  for (var i = 0; i < obsDX.length; i++) {
    if (obsDX[i] > -0.4 && obsDX[i] < 0.4) {
      obsDX[i] = 1;
    }
    if (obsDY[i] > -0.4 && obsDY[i] < 0.4) {
      obsDY[i] = -1;
    }
  }

  // exit area
  exitW = 70;
  exitH = 80;
  exitX = width - 90;
  exitY = height / 2 - exitH / 2;

  textFont('sans-serif');
}

function draw() {
  background(24);

  // EXIT
  noStroke();
  fill(255, 215, 64);
  rect(exitX, exitY, exitW, exitH, 8);
  fill(30);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("EXIT", exitX + exitW / 2, exitY + exitH / 2);

  // move player with arrow keys
  if (keyIsDown(LEFT_ARROW)) {
    playerX = playerX - playerSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    playerX = playerX + playerSpeed;
  }

  if (keyIsDown(UP_ARROW)) {
    playerY = playerY - playerSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    playerY = playerY + playerSpeed;
  }

  // keep player inside the canvas
  if (playerX < playerR) {
    playerX = playerR;
  } else if (playerX > width - playerR) {
    playerX = width - playerR;
  }

  if (playerY < playerR) {
    playerY = playerR;
  } else if (playerY > height - playerR) {
    playerY = height - playerR;
  }

  // draw and move obstacles
  for (var i = 0; i < obsX.length; i++) {
    fill(obsColor[i]);
    noStroke();
    circle(obsX[i], obsY[i], obsSize[i]);

    obsX[i] = obsX[i] + obsDX[i];
    obsY[i] = obsY[i] + obsDY[i];

     
    if (obsX[i] - obsSize[i] / 2 > width) {
      obsX[i] = -obsSize[i] / 2;
    } else if (obsX[i] + obsSize[i] / 2 < 0) {
      obsX[i] = width + obsSize[i] / 2;
    }

    
    if (obsY[i] - obsSize[i] / 2 > height) {
      obsY[i] = -obsSize[i] / 2;
    } else if (obsY[i] + obsSize[i] / 2 < 0) {
      obsY[i] = height + obsSize[i] / 2;
    }
  }

  
  if (staticMade === true) {
    fill(160, 120, 210);
    rect(staticX, staticY, staticSize, staticSize, 4);
  }

  // draw player
  fill(240);
  stroke(0, 80);
  strokeWeight(1);
  circle(playerX, playerY, playerR * 2);

  // win condition
  if (
    playerX > exitX && playerX < exitX + exitW &&
    playerY > exitY && playerY < exitY + exitH
  ) {
    won = true;
  }

  if (won === true) {
    noStroke();
    fill(0, 180);
    rect(0, 0, width, height);
    fill(255);
    textSize(36);
    textAlign(CENTER, CENTER);
    text("You Win! :)", width / 2, height / 2);
    textSize(16);
    text("Reload the page to play again.", width / 2, height / 2 + 34);
    noLoop(); 
  }
}

function mousePressed() {
 
  if (staticMade === false) {
    var mx = mouseX;
    var my = mouseY;

    
    if (mx < staticSize / 2) {
      mx = staticSize / 2;
    } else if (mx > width - staticSize / 2) {
      mx = width - staticSize / 2;
    }

    if (my < staticSize / 2) {
      my = staticSize / 2;
    } else if (my > height - staticSize / 2) {
      my = height - staticSize / 2;
    }

   
    if (mx < 0 || my < 0) {
     
    } else {
      staticX = mx - staticSize / 2;
      staticY = my - staticSize / 2;
      staticMade = true;
    }
  }
}

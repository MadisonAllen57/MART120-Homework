


let playerX = 100;
let playerY = 300;
let playerSize = 40;
let playerSpeed = 4;


let coffeeXs = [];
let coffeeYs = [];
let coffeeSize = 25;

let cloudXs = [];
let cloudYs = [];
let cloudSize = 45;


let gameState = "start";


let score = 0;
let goalScore = 7; 
let lives = 3;

function setup() {
  createCanvas(600, 400);
  
  background(240, 220, 250);

  
  for (let i = 0; i < 5; i++) {
    coffeeXs.push(random(200, width - 50));
    coffeeYs.push(random(50, height - 50));
  }

  
  for (let i = 0; i < 4; i++) {
    cloudXs.push(random(200, width - 50));
    cloudYs.push(random(50, height - 50));
  }
}

function draw() {
  background(240, 220, 250); 

  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "play") {
    playGame();
  } else if (gameState === "win") {
    drawWinScreen();
  } else if (gameState === "lose") {
    drawLoseScreen();
  }
}

function drawStartScreen() {
  textAlign(CENTER, CENTER);
  fill(60);
  textSize(32);
  text("Coffee Run", width / 2, height / 2 - 40);

  textSize(18);
  text("Use arrow keys to move.", width / 2, height / 2);
  text("Collect coffee cups. Avoid stress clouds.", width / 2, height / 2 + 30);
  text("Press ENTER to start.", width / 2, height / 2 + 80);

  
  drawPlayer(width / 2, height / 2 + 120);
}

function playGame() {
 
  noStroke();
  fill(230, 210, 200);
  rect(0, height - 80, width, 80);

  
  movePlayer();

  
  keepPlayerOnScreen();

  
  drawPlayer(playerX, playerY);

 
  drawCoffee();

  
  drawClouds();

  
  drawHUD();

  
  if (score >= goalScore) {
    gameState = "win";
  } else if (lives <= 0) {
    gameState = "lose";
  }
}

function drawWinScreen() {
  textAlign(CENTER, CENTER);
  fill(60);
  textSize(32);
  text("You Got Your Coffee!", width / 2, height / 2 - 20);

  textSize(18);
  text("Score: " + score, width / 2, height / 2 + 10);
  text("Press R to play again.", width / 2, height / 2 + 40);
}

function drawLoseScreen() {
  textAlign(CENTER, CENTER);
  fill(60);
  textSize(32);
  text("Too Much Stress!", width / 2, height / 2 - 20);

  textSize(18);
  text("Score: " + score, width / 2, height / 2 + 10);
  text("Press R to try again.", width / 2, height / 2 + 40);
}



function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed;
  }
  if (keyIsDown(UP_ARROW)) {
    playerY -= playerSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += playerSpeed;
  }
}

function keepPlayerOnScreen() {
  if (playerX < playerSize / 2) {
    playerX = playerSize / 2;
  }
  if (playerX > width - playerSize / 2) {
    playerX = width - playerSize / 2;
  }
  if (playerY < playerSize / 2) {
    playerY = playerSize / 2;
  }
  if (playerY > height - playerSize / 2) {
    playerY = height - playerSize / 2;
  }
}

function drawPlayer(x, y) {
  
  noStroke();
  
  fill(200, 150, 230);
  rect(x - 15, y, 30, 40, 8);

  
  fill(255, 220, 190);
  ellipse(x, y - 20, 30, 30);

  
  fill(255);
  rect(x + 15, y + 5, 10, 15, 3);
  fill(180, 120, 80);
  rect(x + 16, y + 6, 8, 7);
}



function drawCoffee() {
  for (let i = 0; i < coffeeXs.length; i++) {
    
    push();
    translate(coffeeXs[i], coffeeYs[i]);
    noStroke();
    fill(255);
    rect(-10, -10, 20, 20, 4);
    fill(150, 100, 60);
    rect(-8, -8, 16, 8);
    pop();

    
    let d = dist(playerX, playerY, coffeeXs[i], coffeeYs[i]);
    if (d < (playerSize / 2 + coffeeSize / 2)) {
      
      score += 1;

      
      coffeeXs[i] = random(50, width - 50);
      coffeeYs[i] = random(50, height - 100);
    }
  }
}



function drawClouds() {
  for (let i = 0; i < cloudXs.length; i++) {
    
    cloudXs[i] -= 1.5;

    
    if (cloudXs[i] < -50) {
      cloudXs[i] = width + 50;
      cloudYs[i] = random(50, height - 100);
    }

    
    noStroke();
    fill(200);
    ellipse(cloudXs[i], cloudYs[i], cloudSize, cloudSize);
    ellipse(cloudXs[i] + 15, cloudYs[i] + 5, cloudSize, cloudSize);
    ellipse(cloudXs[i] - 15, cloudYs[i] + 5, cloudSize, cloudSize);

    
    let d = dist(playerX, playerY, cloudXs[i], cloudYs[i]);
    if (d < (playerSize / 2 + cloudSize / 2)) {
      
      lives -= 1;

      
      cloudXs[i] = width + 50;
      cloudYs[i] = random(50, height - 100);
    }
  }
}



function drawHUD() {
  fill(50);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  text("Lives: " + lives, 10, 30);
  text("Goal: " + goalScore, 10, 50);
}



function keyPressed() {
  if (gameState === "start" && keyCode === ENTER) {
    gameState = "play";
  }

  if ((gameState === "win" || gameState === "lose") && (key === 'r' || key === 'R')) {
    resetGame();
  }
}

function resetGame() {
  
  playerX = 100;
  playerY = 300;
  score = 0;
  lives = 3;

  
  coffeeXs = [];
  coffeeYs = [];
  cloudXs = [];
  cloudYs = [];

  for (let i = 0; i < 5; i++) {
    coffeeXs.push(random(200, width - 50));
    coffeeYs.push(random(50, height - 50));
  }

  for (let i = 0; i < 4; i++) {
    cloudXs.push(random(200, width - 50));
    cloudYs.push(random(50, height - 50));
  }

  gameState = "play";
}
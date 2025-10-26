function setup() {
    createCanvas(500, 600);
    background(250, 220, 230); 
  
  
  
    // TITLE
    textAlign(CENTER, TOP);
    textSize(24);
    fill(20);
    noStroke();
    text("My Self Portrait", width / 2, 10);
  
   
    noStroke();
    fill(200, 170, 110); 
  
    // hair left side
    ellipse(200, 280, 70, 250);
  
    // hair right side
    ellipse(300, 280, 70, 250);
  
  
  
    // NECK
    fill(240, 210, 180);
    rect(225, 310, 50, 50);
  
    // SHIRT
    fill(180, 140, 220);
    rect(150, 350, 200, 120);
  
    // HEAD
    fill(240, 210, 180);
    ellipse(250, 250, 180, 210);
  
    // EARS
    fill(240, 210, 180);
    rect(160, 240, 20, 35);
    rect(320, 240, 20, 35);
  
    // EYES
    fill(255);
    ellipse(220, 240, 38, 22);
    ellipse(280, 240, 38, 22);
  
    // PUPILS 
    stroke(30);
    strokeWeight(6);
    point(220, 240);
    point(280, 240);
  
    // NOSE 
    noStroke();
    fill(230, 190, 160);
    triangle(240, 265, 260, 265, 250, 290);
  
    // MOUTH
    stroke(180, 60, 80);
    strokeWeight(3);
    line(225, 315, 275, 315);
  
    // SIGNATURE
    noStroke();
    fill(30);
    textAlign(RIGHT, BOTTOM);
    textSize(16);
    text("Madison Allen", width - 12, height - 12);
  }
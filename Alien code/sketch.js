function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw alien body
  push();
  translate(width / 2, height / 2);
  scale(1.5);
  fill(255, 0, 0); // Red body
  ellipse(0, 0, 100, 150);
  pop();
  
  // Draw alien head
  push();
  translate(width / 2, height / 2 - 60);
  fill(0); // Black head
  ellipse(0, 0, 70, 70);
  
  // Draw alien eyes
  fill(255); // White eyes
  ellipse(-20, -10, 20, 20); // Left eye
  ellipse(20, -10, 20, 20); // Right eye
  
  // Draw fangs
  fill(255); // White fangs
  triangle(-15, 19, -5, 10, -5, 5); // Left fang
  triangle(15, 19, 5, 10, 5, 5); // Right fang
  
  // Draw hands
  fill(0); // Black hands
  ellipse(-40, 40, 30, 30); // Left hand
  ellipse(40, 40, 30, 30); // Right hand
  pop();
}

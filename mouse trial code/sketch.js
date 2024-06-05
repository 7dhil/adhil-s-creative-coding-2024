function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,255,255); // Set background to black
}

function draw() {
  // Draw a semi-transparent rectangle to create the fading effect
  fill(0, 10); // Black with a small alpha value for fading
  rect(0, 0, width, height);

  // Draw the trail following the mouse
  fill(0,0,255) // Red color for the trail
  noStroke();
  ellipse(mouseX, mouseY, 70, 40); // Circle size can be adjusted
}

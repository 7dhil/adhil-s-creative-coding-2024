let backgroundColor = []; // Array to store background colors
let numColors = 70; // Number of colors to use (adjustable)
let colorChangeSpeed = 0.2; // Speed of color change (adjustable)
let customFont;
let mic, fft; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight / 15);
  textAlign(CENTER, CENTER);

  // Generate random background colors on setup
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(232), random(255), random(255)));
  }

  customFont = loadFont('Scrabbles.ttf');

  // Sound setup
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  textFont(customFont); 

  // Update background colors with smooth transition
  for (let i = 0; i < backgroundColor.length; i++) {
    let nextColorIndex = (i + 1) % backgroundColor.length;
    backgroundColor[i] = lerpColor(
      backgroundColor[i],
      backgroundColor[nextColorIndex],
      colorChangeSpeed
    );
  }

  // Draw a grid of background colors with smooth transition
  for (let y = 0; y < windowHeight; y += windowHeight / 10) {
    for (let x = 0; x < windowWidth; x += windowWidth / 10) {
      let colorIndex = int(floor(x / (windowWidth / 10))) % backgroundColor.length;
      fill(backgroundColor[colorIndex]);
      noStroke();
      rect(x, y, windowWidth / 10, windowHeight / 10); 
    }
  }

  // Analyze sound frequency
  let spectrum = fft.analyze(); 
  let numBars = 20; // Number of audio bars
  let barWidth = windowWidth / numBars;

  for (let i = 0; i < numBars; i++) {
    let amplitude = spectrum[i*5]; // Adjust sampling as needed
    let barHeight = map(amplitude, 0, 255, 0, height/1); 

    // Color changes based on bar position
    let barColor = color(map(i, 0, numBars, 0, 255), 100, 50 + amplitude/2); 

    fill(barColor);
    rect(i * barWidth, height/2 - barHeight/2, barWidth, barHeight); 
  }

  // Display the text on top
  textSize(80);
  fill(0); // White text color
  text("Welcome to Bath Spa University", windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Regenerate background colors on resize for better effect
  backgroundColor = [];
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(99), random(255), random(255)));
  }
}

function mousePressed() {
  // Change color generation method on mouse press for variation
  for (let i = 0; i < backgroundColor.length; i++) {
    let hue = random(235);
    backgroundColor[i] = color(hue, map(i, 0, backgroundColor.length, 0, 255), 235); 
  }
}

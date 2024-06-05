var mic, fft;

function setup() {
  createCanvas(windowWidth, 300);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  noStroke();
}

function draw() {
  // Translucent black background for a trailing effect
  fill(0, 50); 
  rect(0, 0, width, height);
  
  translate(width / 2, height / 2);
  
  var spectrum = fft.analyze();
  var numPetals = 25; // Number of petals for the flower pattern

  for (var i = 0; i < numPetals; i++) {
    var angle = map(i, 0, numPetals, 0, TWO_PI);
    var freqIndex = floor(map(i, 0, numPetals, 0, spectrum.length));
    var freq = spectrum[freqIndex];
    var amp = map(freq, 0, 255, 100, 300); // Increased amplitude range for more movement

    var x1 = cos(angle) * amp;
    var y1 = sin(angle) * amp;
    var x2 = cos(angle + PI / numPetals) * amp / 1.5;
    var y2 = sin(angle + PI / numPetals) * amp / 1.5;

    var r = map(freq, 0, 255, 100, 255);
    var g = map(freq, 0, 255, 50, 200);
    var b = map(freq, 0, 255, 150, 255);
    
    fill(r, g, b);
    beginShape();
    vertex(0, 0);
    vertex(x1, y1);
    vertex(x2, y2);
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

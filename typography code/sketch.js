var font;



function preload() { 

font = loadFont('mangat.ttf'); }



 var points;

 function setup() { 

createCanvas(600, 600); 

stroke(0); 

points = font.textToPoints('BSU', 100, 100, 100, { sampleFactor: 0.15 });



background(255); 

for (var i = 0; i < points.length; i++) { 

    var p = points[i]; 

    ellipse(p.x, p.y, 3, 3); 

  } 

}
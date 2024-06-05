function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,0,0);
  
  fill(255,255,255);
  
  // rect (x,y,width,height)
  rect(130,150,170,50);
  // ellipse (x,y,width,height)
  
  fill(0,0,0);
  
  ellipse(160,200,30,30);
  ellipse(250,200,30,30);
  
  //triangle(x1,y1,x2,y2,x3,y3)
  fill(100,200)
  triangle (130,150,130,170,230,150);
 
}
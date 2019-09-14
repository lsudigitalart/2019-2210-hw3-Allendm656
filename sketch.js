function setup() {
createCanvas(500, 500)
background(0)
}

function draw(){
//Line Background
  for(var y = 0; y < height; y += 15){
    for(var x = 0; x < width; x += 15){
  stroke(125)
  strokeWeight(1)
  line(x, y, width/2, height/2)
  }
  }
  for(var y = 0; y < height; y += 23){
    for(var x = 2; x < width; x += 24){
  noFill()
  stroke(250)
  strokeWeight(1)
  line(x, y, width/2, height/2)
  }
  }
  for(var y = 0; y < height; y += 23){
    for(var x = 4; x < width; x += 24){
  stroke(0)
  strokeWeight(1)
  line(x, y, width/2, height/2)
  }
  }
//Snow Dots - Black and White
  for(var i = 0; i < 50; i+=1){
    fill(250)
    strokeWeight(1)
    ellipse(random(width), random(height), random(3))
  for(var i = 0; i < 50; i+=1){
    fill(250)
    strokeWeight(1)
    ellipse(random(width), random(height), random(3))
  }
  }
    for(var i = 0; i < 50; i+=1){
    fill(250)
    strokeWeight(1)
    ellipse(random(width), random(height), random(3))
  for(var i = 0; i < 50; i+=1){
    fill(125)
    strokeWeight(1)
    ellipse(random(width), random(height), random(3))
  }
  }
    for(var i = 0; i < 50; i+=1){
    fill(250)
    strokeWeight(1)
    ellipse(random(width), random(height), random(3))
  for(var i = 0; i < 50; i+=1){
    fill(0)
    strokeWeight(1)
    ellipse(random(width), random(height), random(3))
  }
  }
  
//Side Borders
  fill(10)
  stroke(30)
  strokeWeight(1)
  quad(0, 0, 70, 70, 70, 430, 0, 500)
  quad(430, 70, 500, 0, 500, 500, 430, 430)
//Snow over wall borders
  for(var i = 0; i < 50; i+=1){
  fill(250)
  strokeWeight(1)
  ellipse(random(width), random(height), random(3))
  }
//Top Borders
  fill(20)
  quad(0, 0, 500, 0, 430, 70, 70, 70)
  quad(0, 500, 70, 430, 430, 430, 500, 500)
 //Posts
  fill(100)
  quad(60, 60, 70, 70, 70, 430, 60, 440)
  quad(430, 70, 440, 60, 440, 440, 430, 430)
  fill(110)
  quad(40, 40, 50, 50, 50, 450, 40, 460)
  quad(450, 50, 460, 40, 460, 460, 450, 450)
  fill(120)
  quad(20, 20, 30, 30, 30, 470, 20, 480)
  quad(470, 30, 480, 20, 480, 480, 470, 470)
//Items rotating in space
  translate(250, 250);
  translate(p5.Vector.fromAngle(millis() / 500, 40));
  stroke(30)
  fill(75)
  ellipse(0, 0, 10, 10);

  translate(p5.Vector.fromAngle(millis() / 500+i*2, 50));
  fill(125)
  ellipse(0, 0, 15, 15);

  translate(p5.Vector.fromAngle(millis() / 500+i*4, 70));
  fill(200)
  ellipse(0, 0, 20, 20);
}

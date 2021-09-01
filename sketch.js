
var background, backgroundImg;

var snow = []

function preload(){
   backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  background = createSprite(400, 200, 50, 50);
  background.addAnimation("bg", backgroundImg);

  for (var j = 75; j <=width; j=j+50) { 
    snow.push(new Snow(j,75));
  }
}

function draw() {
  
  
  drawSprites();
}
var snowImg
function preload(){
  bgImage=loadImage("snow3.jpg");
  santaImg=loadImage("santa.png");
  snowImg=loadImage("snow4.png")
}

function setup() {
  createCanvas(800,400);
  santa=createSprite(400, 200, 50, 50);
  santa.addImage(santaImg);
  santa.scale=0.4;
  edges=createEdgeSprites()
  ground=createSprite(400,390,800,20)
  ground.visible=false;
}


function draw() {
  background(bgImage);
  if(keyDown("up")){
santa.velocityY=-10
  }  
  santa.velocityY=santa.velocityY+0.5
  santa.collide(ground)
  if(frameCount%30==0){
    snow=new Snow(random(20,720),-10,0.1)
  }
  drawSprites();
}
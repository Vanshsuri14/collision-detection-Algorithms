var movingRect,FixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);
  FixedRect = createSprite(200,200,50,80);

  movingRect.shapeColor = "orange";
  FixedRect.shapeColor = "orange";

  movingRect.debug = true;
  FixedRect.debug = true;




}

function draw() {
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - FixedRect.x < movingRect.width/2 + FixedRect.width/2 &&
    FixedRect.x - movingRect.x < movingRect.width/2 + FixedRect.width/2 &&
    movingRect.y - FixedRect.y <= movingRect.height/2 + FixedRect.height/2 &&
    FixedRect.y - movingRect.y <= movingRect.height/2 + FixedRect.height/2){
    movingRect.shapeColor = "blue";
    FixedRect.shapeColor = "blue";

  }else
  {
    movingRect.shapeColor = "orange";
  FixedRect.shapeColor = "orange";

  }
  


  
  
  
  drawSprites();
}
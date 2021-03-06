
function preload(){
  backgroundImage = loadImage("background.png");
  birdImage = loadImage("bird.png");
  pipesImage = loadImage("pipes.PNG");

}

function setup() {
  createCanvas(800,800);
  background = createSprite(0,0,800,800);
  background.addImage(backgroundImage);
  background.scale = 2;
  background.x = background.width/2
  background.velocityX = -5;
  bird = createSprite(0,400,50,50)
  bird.addImage(birdImage);
  invisGround = createSprite(400,790,800,10)
  invisGround.visible = false;
  //invisGround.debug = true;
  //bird.debug = true;
  bird.setCollider("circle",0,0,50);


}

function draw() {
  if(background.x < 0){
    background.x = background.width/2
  }  if(keyDown("space")  ) {
    bird.velocityY = -12;
  }
  bird.velocityY = bird.velocityY + 0.8;
  bird.collide(invisGround);
  
  drawSprites();
}

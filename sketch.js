var astro;
var bgImg, bathImg, brushImg, eatImg, gymImg, moveImg, sleepImg;



function preload(){
bgImg = loadImage("./images/iss.png");
bathImg = loadAnimation("./images/bath1.png", "./images/bath2.png");
brushImg = loadImage("./images/brush.png");
eatImg = loadAnimation("./images/eat1.png", "./images/eat2.png","./images/drink1.png", "./images/drink2.png");
gymImg = loadAnimation("./images/gym1.png", "./images/gym2.png","./images/gym11.png","./images/gym12.png");
moveImg = loadAnimation("./images/move.png", "./images/move1.png");
sleepImg = loadImage("./images/sleep.png");

}

function setup() {
  createCanvas(800,600);

  astro = createSprite(400,300,20,20);
  astro.addImage(sleepImg);
  astro.scale = 0.15;
  

}

function draw() {
  background(bgImg);

  if(keyDown("UP_ARROW")){
    astro.addAnimation("brushing", brushImg);
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astro.addAnimation("bathing", bathImg);
    astro.changeAnimation("bathing");

  }

  if(keyDown("LEFT_ARROW")){
    astro.addAnimation("gyming", gymImg);
    astro.changeAnimation("gyming");
  }

  if(keyDown("RIGHT_ARROW")){
    astro.addAnimation("eatdrink", eatImg);
    astro.changeAnimation("eatdrink");
  }

  if(keyDown("s")){
    astro.addAnimation("sleeping", sleepImg);
    astro.changeAnimation("sleeping");

  }
  drawSprites()
}
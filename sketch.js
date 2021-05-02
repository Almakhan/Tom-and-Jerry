var garden,gardenImage;
var cat1,cat1Image;
var cat2,cat2Image;
var cat3,cat3Image;
var mouse1,mouse1Image;
var mouse2,mouse2Image;
var mouse3,mouse3Image;
function preload()
{
    //load the images here
    gardenImage=loadImage("images/garden.png");
    cat1Image=loadAnimation("images/cat1.png");
    cat2Image=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Image=loadAnimation("images/cat4.png");
    mouse1Image=loadAnimation("images/mouse1.png");
    mouse2Image=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image=loadAnimation("images/mouse4.png");
}

function setup()
{
    createCanvas(800,800);
garden=createSprite(400,300,20,20);
garden.addImage("garden",gardenImage);
    //create tom and jerry sprites here
cat1=createSprite(600,550,20,20);
cat1.addAnimation("cat1",cat1Image);
cat1.scale=0.1;
cat2=createSprite(600,550,20,20);
cat2.addAnimation("cat2",cat2Image);
cat2.scale=0.1;
cat2.velocityX=-2;
cat2.visible=false;
cat3=createSprite(100,550,20,20);
cat3.addAnimation("cat3",cat3Image);
cat3.scale=0.1;
cat3.visible=false;
mouse1=createSprite(60,550,20,20);
mouse1.addAnimation("mouse1",mouse1Image);
mouse1.scale=0.1;
mouse2=createSprite(60,550,20,20);
mouse2.addAnimation("mouse2",mouse2Image);
mouse2.scale=0.1;
mouse2.visible=false;
mouse3=createSprite(60,550,20,20);
mouse3.addAnimation("mouse3",mouse3Image);
mouse3.scale=0.1;
mouse3.visible=false;
}

function draw() 
{
    background(255);
    
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
if(cat2.x-mouse2.x<(cat2.width-mouse2.width)/2)
{
    cat2.visible=false;
    cat3.visible=true;
    mouse2.visible=false;
    mouse3.visible=true;
}
    drawSprites();
}

function keyPressed()
{

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW"))
  {
  cat1.visible=false;
  cat2.visible=true;
  mouse1.visible=false;
  mouse2.visible=true;
  }

}

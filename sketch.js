var iss , spacecraft;
var bg , issimg , scimg1, scimg2 , scimg3 , scimg4
var hasDocked = false;



function preload() {

  bg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  scimg1 = loadImage("spacecraft1.png");
  scimg2 = loadImage("spacecraft2.png");
  scimg3 = loadImage("spacecraft3.png");
  scimg4 = loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(600,350);
 iss= createSprite(330,160) 
iss.addImage(issimg)
iss.scale=0.7


 spacecraft = createSprite(285,240);
 spacecraft.addImage(scimg1);
 spacecraft.scale = 0.15;

 
   
}

function draw() {
  background(bg);  


  spacecraft.addImage(scimg1);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);


if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y - 2;
}

if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(scimg1);
}

if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(scimg3);
spacecraft.x = spacecraft.x - 1;
}

if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(scimg2);
spacecraft.x = spacecraft.x + 1;
}
  }
if(spacecraft.y <=(iss.y+50) && spacecraft.x <=(iss.x-10)){
hasDocked=true;
  fill("white");
  text("DOCKING SUCCESSFUL!" , 200 , 300)
}

  drawSprites();
}
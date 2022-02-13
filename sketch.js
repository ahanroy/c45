var bg_img
var bombimg,jumpimg,runimg,ninjaimg,energyimg,boomimg
var bg,hero,bomb,star,energy,r,energyimg2,ground

var a = 0;
var b;

var scrollSpeed = 3;


function preload(){
bg_img=loadImage("city.jpg")
bombimg=loadImage("bomb.png")
boomimg=loadImage("boom.png")
ninjaimg=loadImage("star.png")
energyimg=loadImage("power.png")
runimg=loadAnimation("fast3.png","fast4.png")
jumpimg=loadAnimation("jump1.png","jump2.png","jump3.png","jump4.png")
energyimg2=loadAnimation("energy2.gif")
}

function setup(){
  createCanvas(1100,600)
  b = width;

 /*bg=createSprite(550,300)
 bg.addImage(bg_img)
 bg.velocityX=-3*/
 
 hero=createSprite(100,450,10,10)
 hero.addAnimation("run",runimg)
 hero.addAnimation("jump",jumpimg)

 hero.scale=1.2
 ground=createSprite(0,580,1100*2,20)
 ground.visible=false
}

function draw(){
 background(0)

image(bg_img, a, 0, width, height);
image(bg_img, b, 0, width, height);

  a -= scrollSpeed;
  b -= scrollSpeed;

  if (a < -width){
    a = width;
  }
  if (b < -width){
    b = width;
  }
  if(keyDown("space")){
    Jump()
  }
  hero.velocityY=hero.velocityY+0.8
  if(hero.collide(ground)){
    hero.changeAnimation("run")
  }

   spawnRewards()
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
 drawSprites()
}
function Jump(){
  hero.velocityY=-10
  hero.changeAnimation("jump")
}
function spawnRewards(){
  if(frameCount%250===0){
   energy=createSprite(1090,random(130,310))
   //energy.y=Math.random(130,310)
   energy.velocityX=-4
   r=Math.round(random(1,2))
   if(r===1){
    energy.addImage(energyimg)
    energy.scale=0.2
  }
  else if(r===2){
     energy.addAnimation("moving",energyimg2)
     energy.scale=0.2
  }
  energy.lifetime=500
  }
}

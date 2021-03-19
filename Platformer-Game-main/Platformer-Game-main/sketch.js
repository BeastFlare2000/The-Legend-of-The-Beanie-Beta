var AUP
var AUP_Animation
var BG
var Platform_Img
var Score = 0
var LoveWater
var BottleOLoveWater
var DeadDinoBoi
var DeadDinoBoi_Img
var PatPatFromMe
var platform, platformImg
var coinImg, coin
var BeanianPlatform, BeanianPlatform_Img
var Beanie, BeanieImg
var LoggyBoi, LoggyBoiImg
var gameState = 0
var DeathSound
var JumpSound

var coinGroup, miniGroup
var invisibleground

var gameState="start";

function preload() {
  AUP_Animation = loadAnimation("aup/aup1.png", "aup/aup2.png", "aup/aup3.png", "aup/aup4.png", "aup/aup5.png")
  BG = loadImage("back.jpg")
  //Platform_Img = loadImage("Platform (Platformer Game).png")
  //BottleOLoveWater = loadImage("Lava (Platformer Game).png")
  platformImg=loadImage("plat4.jpg");
  miniplatformImg=loadImage("plat6.png")
  coinImg=loadAnimation("coins/coin1.png", "coins/coin2.png", "coins/coin3.png", "coins/coin4.png", "coins/coin5.png",
   "coins/coin6.png", "coins/coin7.png", "coins/coin8.png", "coins/coin9.png", "coins/coin10.png", "coins/coin11.png", 
   "coins/coin12.png", "coins/coin13.png", "coins/coin14.png")
  BeanieImg=loadImage("Beanie-removebg-preview.png")
  BeanianPlatform_Img=loadImage("plat11-removebg-preview.png")
  LoggyBoiImg=loadImage("HurdlyBoi.png")
  DeathSound=loadSound("8-bit-video-game-death-sound-effect.mp3")
  JumpSound=loadSound("Jumping-sound-effect.mp3")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  AUP = createSprite(displayWidth/2-400,displayHeight/2+130,20,20)
  AUP.addAnimation("InnerSloth", AUP_Animation)
  AUP.scale=2;

  platform=createSprite(displayWidth/2, displayHeight/2+330, displayWidth, displayHeight);
  platform.addImage("platform", platformImg)
  platform.scale=2.8

  invisibleground=createSprite(displayWidth/2-400, displayHeight/2+340, displayWidth,-190);
  invisibleground.collide(AUP)
  invisibleground.visible=false

miniGroup=new Group();
coinGroup=new Group();
beanianGroup=new Group();
beanieGroup=new Group();
logGroup=new Group();
}
function draw() {
  background(BG);
  textSize(28)
  fill("Orange");
 
  AUP.scale = 1.7

  text('Score: '+Score,displayWidth/2-620, displayHeight/2-210)  
  
  platform.velocityX=-5;
  if(platform.x<0){

    platform.x=platform.width/2;
  }

if (keyDown("d")|| keyDown("s")){
  AUP.velocityY = -7
}
AUP.velocityY = AUP.velocityY + 0.5

AUP.collide(invisibleground)



 mplatform()            

AUP.collide(miniGroup)

beanianplatform()

for (var n=0; n<coinGroup.length; n++) {
if (AUP.isTouching(coinGroup)) {
Score = Score+10
coinGroup.get(n).destroy()
}}

if (AUP.collide(logGroup)){
  gameState = 1
  DeathSound.play()
}

if (AUP.collide(beanieGroup)){
  Score = Score + 100
}

drawSprites();
}

function mplatform() {
if (frameCount%250===0){
miniplatform = createSprite(displayWidth,displayHeight/2-120,15,15)
miniplatform.velocityX = -6
miniplatform.y=Math.round(random(height/2-140, height/2+10))
miniplatform.addImage(miniplatformImg)
miniplatform.scale=0.8;
miniplatform.lifetime=displayWidth
miniGroup.add(miniplatform);

for(var i=0; i<5 ;i++){
coin = createSprite(displayWidth+i*70-135,displayHeight/2-300,15,15)
  coin.velocityX = -6
  coin.y= miniplatform.y-100;
  coin.addAnimation("coin", coinImg)
  coin.scale=1;
  coin.lifetime=displayWidth
  coinGroup.add(coin);

}
}
}

function beanianplatform() {
  if (frameCount%350===0){
  beanianplatform = createSprite(displayWidth,displayHeight/3-120,15,15)
  beanianplatform.velocityX = -6
  beanianplatform.y=Math.round(random(height/2-140, height/2+10))
  beanianplatform.addImage(BeanianPlatform_Img)
  beanianplatform.scale=2;
  //beanianplatform.lifetime=displayWidth
  beanianGroup.add(beanianplatform);
  for(var i=0; i<1 ;i++){
    Beanie = createSprite(displayWidth+i*70-135,displayHeight/2-300,15,15)
    Beanie.velocityX = -6
    Beanie.y= beanianplatform.y-100;
    Beanie.addImage("beanie", BeanieImg)
    Beanie.scale=0.1;
    //Beanie.lifetime=displayWidth
    beanieGroup.add(Beanie);
    }
    LoggyBoi = createSprite(displayWidth,displayHeight/2-120,15,15)
    LoggyBoi.velocityX = -6
    LoggyBoi.y= beanianplatform.y-20
    LoggyBoi.x= beanianplatform.x-40
    LoggyBoi.addImage(LoggyBoiImg)
    LoggyBoi.scale=0.1;
    //LoggyBoi.lifetime=displayWidth
  logGroup.add(LoggyBoi);
}
}
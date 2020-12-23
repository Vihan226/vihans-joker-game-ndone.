var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var rect;
var bullet;
var score;
var rect3;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("usedoor.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("rjoker.png");
  //spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(1360,660);
  //spookySound.loop();
   //ghost.addImage("ghost", ghostImg);
  
  tower=createSprite(700,800);
  tower.addImage("tower", towerImg);
  tower.scale=2.5
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=.5;
  
  rect=createSprite(200,400,4000,1000)
   rect.visible=false;
   //rect.shapeColor="blue"
bullet=createSprite(200,200,15,5)
bullet.shapeColor="yellow"


  tower.velocityY=5;
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  
  invisibleBlockGroup=new Group();
  score=""
}

function draw(){
  background(250);
  if(keyDown("space")){
  bullet.velocityX=10
  }
  if(keyDown("space")){
    bullet.x=ghost.x
  }
  /*if(keyDown("shift")){
    score=200
  }
  if(score>199){
    alert("gameover")
    /*gameState="play"
    ghost.x=200
    ghost.y=200

  }*/
  fill("yellow")
  text("Score:"+score,1000,100);
  if(gameState==="play"){
    
  
 if(tower.y>400){
 tower.y=300;
 }

  if(mousePressedOver(rect)||keyDown("w")){
     ghost.velocityY=-7;
     }
  if(keyDown("a")){
     ghost.x=ghost.x-5;
     }
  if(keyDown("d")){
     ghost.x=ghost.x+5;
     }
  ghost.velocityY=ghost.velocityY+.5;
  
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY=0
      
    }
  
  
  if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
      ghost.destroy();
    gameState="end";
      
    }
    bullet.y=ghost.y
    //bullet.x=ghost.x
    spawnDoors();
  
    drawSprites();
}
  if(gameState==="end"){
    textSize(200);
    text("gameover",300,400);
  }
}
  
  
function spawnDoors() {
  //write code here to spawn the doors in the tower
  if(frameCount%200===0){
    door=createSprite(210,-50);
    door.addImage("door",doorImg)
    door.scale=.3
    door.velocityY=1.8
    door.x=Math.round(random(150,400))
    door.lifetime=700
    doorsGroup.add(door);
    
    climber=createSprite(200,10)
    climber.addImage("climber",climberImg);
    climber.velocityY=1.8
    climber.x=door.x;
    
    
    invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1.8;
    invisibleBlock.lifetime=700;
    invisibleBlockGroup.add(invisibleBlock);
    
    invisibleBlock.debug=false;
    
    climber.lifetime=700
    climbersGroup.add(climber);
    
    ghost.depth=door.depth;
    ghost.depth  +=1
     
     
     }
}


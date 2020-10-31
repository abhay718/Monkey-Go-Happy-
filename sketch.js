var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var time = 0;
var ground;
var score = 0;
var SERVE = 0;
var PLAY  = 1;
var END   = 2;
var gameState = SERVE;
function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(750,600);
  
  ground = createSprite(375,610,1550,100);
  ground.velocityX = -(10+score/3);
  ground.x = ground.width /2;
  
 
  
  monkey = createSprite(80,500,10,10);
  monkey.addAnimation("run",monkey_running);
  monkey.scale  =  0.2;
 
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw(){
  
  background("black");
  //textSize(60)
    
  
  if(gameState===END){
    fill("white");
    textSize(60)
    text("GAME OVER!!",160,300);
    
    //textSize(40)
    //text("Press 'r' to play again",170,200)
     
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    monkey.visible = false;
    ground.visible = false;
    
    
    
    textSize(30);
    text("Survival Time:"+time,50,450);
    text("Fruits Fed:"+score,490,450);
  
    
  }
 
  //if(keyWentDown('r')&&gameState===END){
    
    //gameState = SERVE;
    //score = 0;
    //time = 0;
  //  
  //}
  
  
  if (monkey.isTouching(obstacleGroup)){
    
    gameState = END;
    
    
    
  }
  
  
  
  
  
  if (gameState===PLAY){
    
    
    monkey.visible = true;
   ground.visible = true;
    
  textSize(25);
  fill("white")
  text("Survival Time:"+time,10,30);
  time = time+Math.round((getFrameRate()/60));
  text("Fruits Fed:"+score,500,30);
   
    
   bananaf();
    
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   monkey.velocityY = monkey.velocityY+2;
  
  
  if(keyDown("space")&&monkey.y >= 498.6||keyDown(UP_ARROW)&&
     monkey.y >= 498.6  ||mouseDown("leftButton")&&
     monkey.y >= 498.6 ||mouseDown("rightButton")&&
     monkey.y >= 498.6 )   {
    
    monkey.velocityY = -30;
    
    
    
    
     
    
 
  
  
  
  
    
   
    
    
  }
  
  
     if (monkey.isTouching(FoodGroup)){
    
    score = score+1; 
    FoodGroup.destroyEach();
    
  }
    
    monkey.collide(ground);
    
    
    
  }
  
  console.log(frameCount);
    
 
  
 if (gameState===SERVE){
   
   
    monkey.visible = false;
   ground.visible = false;
    textSize(50);
    fill("white");
    text("Press Space to start Playing ",60,300);
   monkey.collide(ground);
   obstacleGroup.setVelocityXEach = 0;
   FoodGroup.setVelocityXEach = 0;
   
    
  }
  
  
  if (gameState===SERVE && keyWentDown("space")){
      
      gameState = PLAY;
    
     monkey.visible = true;
   ground.visible = true;
    
      
      
 }
     
    
  
 
  drawSprites();
  
  
}


function bananaf(){
  
  if (frameCount%80===0){
     
    banana = createSprite(775,300,10,10);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -(10+score/3);
    banana.y = Math.round(random(250,350));
    FoodGroup.add(banana);
    banana.lifetime = 200;
    
  }
  
   if (frameCount%300===0){
     
     
    obstacle = createSprite(755,520,10,10);
     //obstacle.debug = true;
     obstacle.setCollider("circle",0,0,200);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -(10+score/3);
     obstacle.lifetime = 200;
     obstacleGroup.add(obstacle);
   }
  
}





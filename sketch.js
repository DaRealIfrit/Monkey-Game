var monkey_running, bananaImage, obstacleImage;
var monkey,banana, obstacle;
var score, surviveTime;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
}



function setup() {
  createCanvas(700, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  console.log(monkey.y)
  monkey.debug = true;
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 1600, 10);
  ground.velocityX = -4;
  console.log(ground.x)
  
  score = 0;
  
  Gfood = new Group();
  Gobstacle = new Group();
}



function draw() {
  background("lightblue");
  obstacles();
  food();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  surviveTime = Math.round(frameCount/frameRate());
  text("Survival Time" + surviveTime, 100, 50);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  if(keyDown("space")&& monkey.y >= 0) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  drawSprites();
}



function food(){
  if(frameCount % 80 === 0){
    fruit = createSprite(600, 0, 20, 20);
    fruit.y = Math.round(random(120,200));
    fruit.addImage("bonana", bananaImage);
    fruit.velocityX = -7;
    fruit.lifetime = 290;
    fruit.scale = 0.1;
    fruit.debug = true;
    Gfood.add(fruit);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(385, 328, 20, 20);
    obstacle.addImage("rock", obstacleImage);
    obstacle.velocityX = -7;
    obstacle.lifetime = 290;
    obstacle.scale = 0.1;
    obstacle.debug = true;
    Gobstacle.add(obstacle);
  }
}

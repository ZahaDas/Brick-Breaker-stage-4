

var paddle, paddleImg, ball, ballImg, brick, brickImg;
var lives = 3;
var score = 0;
var gameState = 0;
var i;
var brick;

//var brickGroup = createGroup();


function preload() {
  paddleImg = loadImage ("images/paddle 2.png");
  ballImg = loadImage ("images/ball.png");
  brickImg = loadImage ("images/brickk.png");
}

function setup() {
  createCanvas(1200, 500);

  paddle = new Paddle(160,20);

  border1 = new Border (81,1,1,500);
  border3 = new Border (1198,1,1,500);
  //border4 = new Border (1,499,1200,1);

  createBrickRow(25);
  createBrickRow(25+30);
  createBrickRow(25+30+30);
  createBrickRow(25+30+30+30);
  createBrickRow(25+30+30+30+30);

  ball = createSprite(width/2,220,40,40);
  ball.addImage(ballImg);
  ball.scale = 0.25;
  ball.speed = 5;
  ball.direction = createVector(1,-2)

}

function draw() {
  background(200, 200, 200);

  brickHit(brick,ball);


  if (gameState === 0) {
    textSize (30);
    fill ("white");
    text("Press Enter to Start the game", 390, 300);

    if (keyDown ("Enter")) {
      gameState = 1;
    }
  }
  
  if (gameState === 1){

    ballMove();
    paddle.move();
    ball.speed = 5;
  
    if(ball.y > height - 22){
      lives = lives - 1;
      gameState = 2;
      ball.speed = 0;
    }
    if (lives === 0){
      gameState = 3;
    }
  }
  
  if(gameState === 2){

    ball.x = width/2;
    ball.y = 150;
    gameState = 0;

    if (lives === 0){
      gameState = 3;
    }
  }
  
  if(gameState === 3){

    ball.x = width / 2;
    ball.y = 150;
    textSize (30);
    fill ("white");
    text ("Game Over! Press 'R' to restart", 380, 240);
    paddle.pos.x = width/2;
  
  
    if(keyDown ("R")){
      gameState = 0;
      lives = 3;
      score = 0;
    }
  }
  


bounceOff(); 
hitPaddle();

paddle.display();
//border1.display();
//border3.display();
//border4.display();

drawSprites();

  textSize (20);
  fill ("white");
  text ("Score: "+ score, 10,30);

  textSize (20);
  fill ("white");
  text ("Lives: "+ lives, 10,60);
}

function createBrickRow(y){

for (var i = 9; i < 1198; i = i+20){
  brick = createSprite (5+4*i, y, 73, 22);
  brick.addImage (brickImg);
  brick.scale = 0.14;
  //brickGroup.add(brick);
}
}



function ballMove() {

  ball.x = ball.x + ball.direction.x * ball.speed;
  ball.y = ball.y + ball.direction.y * ball.speed;
}



function bounceOff(){

  if (ball.y < 20){
    ball.direction.y *= -1;
  }
  if (ball.x < 20){
    ball.direction.x *= -1;
  }
  /*if (ball.y > height - 20){
    ball.direction.y *= -1;
  }*/
  if (ball.x > width - 20){
    ball.direction.x *= -1;
  }
}



function hitPaddle(){
  if (ball.y < paddle.pos.y - 10 && 
    ball.y > paddle.pos.y-10 - 20 && 
    ball.x > paddle.pos.x - 80 - 20 && 
    ball.x < paddle.pos.x + 80 + 20){
    ball.paddleCollide = true;
  } else {
    ball.paddleCollide = false;
  }
  if (ball.paddleCollide && ball.direction.y > 0){
    ball.direction.y *= -1;
  }
  
}

function checkEdges(){
  if (paddle.x < border1.x){
    //paddle.();
  }
}

function brickHit(brick, ball){
    if(keyDown("B")){
  brick.destroy();
    }
  }
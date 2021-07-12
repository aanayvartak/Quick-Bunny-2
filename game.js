function preload() {
  //load game assets

}
var bunny;
var carrot;
var edges;
var snakeGroup;

function setup() {
  createCanvas(600,600);

  snakeGroup= new Group();

  edges=createEdgeSprites();
  bunny = createSprite(40,550,30,30);
  carrot = createSprite(560,40,30,30);
  brick1 = createSprite(300,320,100,20);
  brick1.velocityX = 5;
  brick2 = createSprite(300,320,100,20);
  brick2.velocityX = -5;
  brick3 = createSprite(300,200,100,20);
  brick4 = createSprite(100,200,100,20);
  carrot.shapeColor = "orange";
  bunny.shapeColor = "white";
  brick1.shapeColor = "red";
  brick2.shapeColor = "brown";
  brick3.shapeColor = "brown";
  brick4.shapeColor = "red";

}

function draw() {
  background("green");




  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);
  brick1.bounceOff(edges[1]);
  brick1.bounceOff(edges[0]);
  brick2.bounceOff(edges[1]);
  brick2.bounceOff(edges[0]);

  if(keyDown("up")){
    bunny.y=bunny.y-4;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+4;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-4;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+4;
  }
  if(bunny.isTouching(carrot)){
    text("You Win!",200,200);
  }
  if(bunny.isTouching(brick1)){
    brick1.velocityX=0;
    text("You Lose!",200,200);
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick2)){
    text("You Lose!",200,200);
    brick2.velocityX=0;
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick3)){
    text("You Lose!",200,200);
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(brick4)){
    text("You Lose!",200,200,);
    bunny.x=40;
    bunny.y=550;
  }

  generateSnakes();

  for(var i=0; i<(snakeGroup).length; i++){
    var temp = snakeGroup.get(i);
    if (bunny.isTouching(temp)){
      temp.velocityX=0;
      text("You Lose!",200,200);
      bunny.x=40;
      bunny.y=550;
    }
 }
  drawSprites();

  function generateSnakes() { 

   if(frameCount % 30===0){
     var snake =  createSprite(600,random(70,520),random(30,120),5);
     snakeGroup=add(snake);
    } 
  }

}

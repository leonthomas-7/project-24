
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var log1 ,log2 ,log3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(600 ,height ,1200 ,40);
log1=new Bin(1100 ,317 ,20 ,100);
log2=new Bin(1000 ,378 ,200 ,30);
log3=new Bin(900 ,317 ,20 ,100);
ball=new Paper(250 ,350 ,50 ,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");



  log1.display();
  log2.display();
  log3.display();
  ball.display();
  ground.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body ,ball.body.position ,{x:10 ,y:-20})
  }
}



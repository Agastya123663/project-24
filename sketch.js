
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

        
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,10);
	fill("grey");

	 rightSide = new Dustbin(1100,620,10,70);

	 bottomSide = new Dustbin(1000,650,100,10);

	 leftSide = new Dustbin(920,620,10,70);

	 ball = new Ball(100,600,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  rightSide.display();

  bottomSide.display();

  leftSide.display();

  ball.display();
 
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW);
Matter.Body.applyForce(ball.body,ball.body.position,{x : 185,y :125 })	;
}


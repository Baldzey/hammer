
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400, 350, 100, 25);
	plane = new Plane(400, 690, 800,15);
	stone = new Stone(200,200, 50,50)
	ball = new Ball(200,200,200,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  hammer.display();
  plane.display();
  stone.display();
  ball.display();
}




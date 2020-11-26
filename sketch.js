
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function setup() {
	createCanvas(600,400);

	paper = new paper(100,25,25,25)

	bottom = createSprite(290,350,200,20);
	bottom.shapeColor = "red";
	left = createSprite(200,300,20,100);
	left.shapeColor = "red"
	right = createSprite(400,310,20,100);
	right.shapeColor = "red"

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  paper.display();
  
  drawSprites();
 
}




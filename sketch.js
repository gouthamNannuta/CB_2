var  ball;
var side1,side2,bottom;
var ground,image,img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
	img = loadImage('.vscode/dustbingreen.png');

}
function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(500,680,1200,20);
	World.add(world,ground);
	//background(225);
	//Create the Bodies Here.

	ball=new Ball(100,600,40);
	//background(225);
	side1=new Side(610,575,10,200);
    side2=new Side(795,575,10,200);
	bottom=new Side(710,665,200,20);
	image(img,600,460,200,200);
	Engine.run(engine);
  
}

function draw() {

Engine.update(engine);

ball.display();
ground.display();
//side1.display();
//side2.display();
//bottom.display();
drawSprites();

}

function keyPressed(){
	if(keyCode ===UP_ARROW){
Matter.Body.applyForce(ball.body, ball.body.position, {x:250,y:-305});

}
}





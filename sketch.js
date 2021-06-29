const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
  bg = loadImage("sky.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 shooter1 = new Shooter(80,160 , 50);
 chain1 = new Chain(shooter1.body , {x:152 , y:180})
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,220,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  
  block18 = new Block(634,173,40,40);
  block19 = new Block(695,184,40,40);
  block20 = new Block(725,184,40,40);
  block21 = new Block(755,184,40,40);
  block22 = new Block(665,184,40,40);

  block23 = new Block(655,135,45,40);
  block24 = new Block(699,135,45,40);
  block25 = new Block(745,135,45,40);

  block26 = new Block(678,88,45,40);
  block27 = new Block(723,94,45,40);
  block28 = new Block(699,52,45,40);


  

}
function draw() {
  background(bg); 
 console.log(mouseX , mouseY);
 
  textSize(20);
  stroke("white")
  fill("yellow")
  text("Press SPACE to get a second chance",103,33)
  
  
shooter1.display();
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(193,36,239);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(67,10,210);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(8,2,127);
  block13.display();
  block14.display();
  block15.display();
  fill(253,32,121);
  block16.display();
  fill(233,24,120)
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
fill(245,176,159)
  block23.display();
  block24.display();
  block25.display();
  fill(6,125,122)
  block26.display();
  block27.display();
  fill(30,205,178)
  block28.display();
 
  chain1.display();
  shooter1.debug = true;
  
}
function mouseDragged()
{
  Matter.Body.setPosition(shooter1.body,{x: mouseX , y: mouseY})
}
function mouseReleased()
{
  chain1.fly();
}

function keyPressed()
{
  if(keyCode === 32)

  {

    Matter.Body.setPosition(shooter1.body,{x:80,y:160})
    chain1.attach(shooter1.body)
  }
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var ground2;
var rock1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var slingshot;
var gameState="onSling";
var score=0;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  rock1=new Rock (230, 420, 40, 40);
  ground1=new Ground(500,400,130,30);
  ground2=new Ground(900,250,130,30);
  box1=new Box(455,365,30,40);
  box2=new Box(500,365,30,40);
  box3=new Box(545,365,30,40);
  box4=new Box(855,215,30,40);
  box5=new Box(900,215,30,40);
  box6=new Box(945,215,30,40);
  box7=new Box(482.5,325,30,40);
  box8=new Box(525,325,30,40);
  box9=new Box(882.5,175,30,40);
  box10=new Box(925,175,30,40);
  box11=new Box(500,285,30,40);
  box12=new Box(900,135,30,40);
  slingshot =new SlingShot(rock1.body,{x:230, y:400});
  
}

function draw() {
  background(113,79,166); 
  Engine.update(engine);
  textSize(50);
  
  text("SCORE:"+score,200,200);
  ground1.display(); 
  ground2.display(); 
 rock1.display(); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  slingshot.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
   
}
function mouseDragged(){
  if (gameState==="onSling"){
      Matter.Body.setPosition(rock1.body, {x: mouseX , y: mouseY});
 }
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(rock1.body);
  }
}
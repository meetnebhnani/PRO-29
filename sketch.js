
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

//declaring Variable for Bodies
var hexagon,backgroundImg;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload(){
 backgroundImg=loadImage("fire.png");
}

function setup() {
 
  createCanvas(1200,500);//creating canvas

 
  engine = Engine.create();
  world = engine.world;

  //creating ground and levels
  ground1=new Ground(390+60,310,270,12);

  
  block1=new Blue(300+60,275,30,40);
  block2=new Blue(330+60,275,30,40);
  block3=new Blue(360+60,275,30,40);
  block4=new Blue(390+60,275,30,40);
  block5=new Blue(420+60,275,30,40);
  block6=new Blue(450+60,275,30,40);
  block7=new Blue(480+60,275,30,40);

  
  block8=new Red(330+60,235,30,40);
  block9=new Red(360+60,235,30,40);
  block10=new Red(390+60,235,30,40);
  block11=new Red(420+60,235,30,40);
  block12=new Red(450+60,235,30,40);

  
  block13=new Green(360+60,195,30,40);
  block14=new Green(390+60,195,30,40);
  block15=new Green(420+60,195,30,40);
  
 
  block16=new Yellow(390+60,155,30,40);

  
  ground2=new Ground(800,225,210,12);

  
  block17=new Blue(800-60,205,30,40);
  block18=new Blue(800-30,205,30,40);
  block19=new Blue(800,205,30,40);
  block20=new Blue(800+30,205,30,40);
  block21=new Blue(800+60,205,30,40);

  
  block22=new Green(800-30,205-40,30,40);
  block23=new Green(800,205-40,30,40);
  block24=new Green(800+30,205-40,30,40);

  
  block25=new Red(800,205-80,30,40);

 
  ground3=new Ground(600,390,1200,20);

  //creating hexagon
  hexagon=new Hexagon(200,200,20);

 
  sling=new SlingShot(hexagon.body,{x:180,y:190})
}

function draw() {

  //To assign brown background color
  background(backgroundImg); 

  Engine.update(engine);
  
  //Displaying ground and levels
  ground1.display();

  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();


  block13.display();
  block14.display();
  block15.display();

  
  block16.display();
  
  
  ground2.display();

 
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

 
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  
  hexagon.display();
  
 
  ground3.display();

 
  sling.display();


  //Adding instructions
  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagon and launch it towards the blocks",250,30);
  text("Press space to get another stone",350,430);
  
}
//Mouse drag and release function to launch the block
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   sling.fly();
}

//reattach the stone
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(hexagon.body,{x:100,y:200});
    sling.attacher(hexagon.body);
  }
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, 
block13, block14, block15, block16, block17, block18, block19, block20, block21;

var stand1, stand2;

var slingshot, polygon;

function setup() {
  createCanvas(1350,650);

  engine = Engine.create();
	world = engine.world;

//stand1_&_stuff
  stand1 = new Stand(800, 600, 300, 10);  
 //lower 
   block1 = new Block(700, 550, 50, 50);
   block2 = new Block(750, 550, 50, 50);
   block3 = new Block(800, 550, 50, 50);
   block4 = new Block(850, 550, 50, 50);
   block5 = new Block(900, 550, 50, 50);
 //mid1
   block6 = new Block(725, 500, 50, 50);
   block7 = new Block(775, 500, 50, 50);
   block8 = new Block(825, 500, 50, 50);
   block9 = new Block(875, 500, 50, 50);
 //mid2
   block10 = new Block(750, 450, 50, 50);
   block11 = new Block(800, 450, 50, 50);
   block12 = new Block(850, 450, 50, 50); 
 //mid3
   block13 = new Block(775, 400, 50, 50);
   block14 = new Block(825, 400, 50,50); 
 //top
   block15 = new Block(800, 350, 50, 50);



//stand2_n_stuff
    stand2 = new Stand(600, 200, 200, 10); 
  //low
    block16 = new Block(590, 190, 30, 30);
    block17 = new Block(600, 190, 30, 30);
    block18 = new Block(610, 190, 30, 30);
  //mid
    block19 = new Block(585, 155, 30, 30);
    block20 = new Block(615, 155, 30, 30);
  //top
    block21 = new Block(600, 130, 30, 30);     

 //polygon_&_slingshot
   polygon = new Polygon(150, 150, 25, 25);
   slingshot = new SlingShot(polygon.body, {x: 150, y: 150});

   Engine.run(engine)
}

function draw() {
  background("gray");
  
  Engine.update(engine);

//displaying
 //stand1_n_stuff
   stand1.display();
 //blocks_lower
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
 //blocks_mid1
   block6.display();
   block7.display(); 
   block8.display(); 
   block9.display();
 //blocks_mid2
   block10.display();
   block11.display(); 
   block12.display();
 //mid3
   block13.display();
   block14.display();
 //top  
   block15.display();
   
 //stand2_n_stuff
   stand2.display();
 //low  
   block16.display();
   block17.display();
   block18.display();
 //mid
   block19.display(); 
   block20.display();  
 //top
   block21.display();   

 //slingshot
   slingshot.display();
 //polygon
   polygon.display();  
   
   drawSprites();
}

function mouseDragged(){
//Dragging
  Body.setPosition(polygon.body, {x: mouseX, y: mouseY});  
}

function mouseReleased(){
//Flying
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon.body);
  }
}

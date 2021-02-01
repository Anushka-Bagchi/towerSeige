const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform1,platform2;
var block1, block2, block3, block4, block5, block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var Block1,Block2,Block3,Block4,Block5;
var Block8,Block9,Block10;
var Block11;

var slingshot;
var polygon;

function preload() {
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);
    platform1 = new Ground(585,500,270,15);
    platform2 = new Ground(900,400,200,15);

    block1 = new BlueBlock(480,470);
    block2 = new BlueBlock(514,470);
    block3 = new BlueBlock(548,470);
    block4 = new BlueBlock(582,470);
    block5 = new BlueBlock(616,470);
    block6 = new BlueBlock(650,470);
    block7 = new BlueBlock(684,470);

    block8 = new PinkBlock(514,425);
    block9 = new PinkBlock(548,425);
    block10 = new PinkBlock(582,425);
    block11 = new PinkBlock(616,425);
    block12 = new PinkBlock(650,425);

    block13 = new GreenBlock(548,380);
    block14 = new GreenBlock(582,380);
    block15 = new GreenBlock(616,380);

    block16 = new GreyBlock(582,335);


    Block1 = new PinkBlock(830,375);
    Block2 = new PinkBlock(864,375);
    Block3 = new PinkBlock(898,375);
    Block4 = new PinkBlock(932,375);
    Block5 = new PinkBlock(966,375);

    Block6 = new GreyBlock(864,335);
    Block7 = new GreyBlock(898,335);
    Block8 = new GreyBlock(932,335);

    Block9 = new GreenBlock(898,295);
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:200,y:500});
    
}
function draw(){
    background(10);
    Engine.update(engine);

    ground.display();
    platform1.display();
    platform2.display();

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
    
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
}    
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2 , box3 ,box4 ,box5;
var ground;
var pig1 ,pig2;
var log1 ,log2 ,log3, log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 =new Box(920,320,70,70);

    pig1 =new Pig(810,350);

    box3 =new Box(700,250,70,70);
box4 =new Box (920,250,70,70);

    pig2 =new Pig(810,230);

    log1 =new Log(810,270,300,PI/2);
    log2 =new Log(810,190,300,PI/2);

    ground =new Ground(600,390,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    pig1.display();
    pig2.display();


    log1.display();
    log2.display();

    ground.display();

}
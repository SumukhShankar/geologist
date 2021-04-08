const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberball1;
var iron1;
var stone1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberball1 = new Rubber(100,100,30);
    iron1 = new Iron(300,100,100,50);  
    stone1 = new Stone(600,100,100,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberball1.display();
    iron1.display();
    stone1.display();
}
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snowfall = [];
var backgroundImg;
var redBird,redBirdAnimation;

var score =0;

function preload(){
  backgroundImg = loadImage("images//snowfall.b.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
  Engine.run(engine);

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

   if(frameCount%5===00){
     snowfall.push(new Snowfall(random(0,1500), -5,10));
   }

  for (var d = 0; d < snowfall.length; d++) {

    snowfall[d].display();
   }
   
   ground.display();
   //redBird.display();

   //drawSprites();


} 
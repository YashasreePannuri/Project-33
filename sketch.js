var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];
var divisions = []

var divisionHeight=300;
var score = 0;
var particle;
var turn = 0;
var count = 0;

var gameState = 0;
var play = 0; 
var end = 1;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  fill("white")
  textSize(30)
  textFont("Monotype Corsiva")
  text("Score : "+score,20,30);
  text ("250", 16, 530)
  text ("250", 99, 530)
  text ("250", 182, 530)
  text ("250", 259, 530)
  text ("100", 340, 530)
  text ("100", 420, 530)
  text ("100", 497, 530)
  text ("200", 586, 530)
  text ("200", 660, 530)
  text ("200", 740, 530)
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   //if(frameCount%60===0){
     //new Particle(random(width/2-30, width/2+30), 10,10);
     //score++;
   //}
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     
      particle.display();

     if(particle.body.position.y>760){

      if(particle.body.position.x<300){
        score = score + 250
      //  particle = null
        if(count>= 5){ 
         gameState = "end"
        }
      }
      
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score + 100
       // particle = null
        if(count>= 5) {
          gameState = "end"
        }
      }

      if(particle.body.position.x>601 && particle.body.position.x<900){
        score = score + 200
       // particle = null
        if(count>= 5) {
          gameState = "end"
        }
      }
     }
   }
   
  
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10)
  }
}
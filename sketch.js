const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backg1;
var ground;

var player;
var Forest1;
var forestNight;
var painting;
var Desert1;
var Desert2;
var Desert3;
var ruins;
var DiamondForest1;
var DreamForest1;
var EclipseStanding;
var Fruit1;
var zoneMode;
var Graveyard;
var IvyStanding;
var Lampfruit;
var LavaCave1;
var LavaCave2;
var lushtree;
var oldSword;
var fossilTooth;

var object1;

var skill1;
var skill2;
var skill3;
var skill4;
var skill5;
var fire;
var fireSkill;
var flag = false;

function preload(){
  backg1 = loadImage("Photos/back1.jpg");
  Forest1 = loadImage("Photos/SecretForest1.PNG");
  forestNight = loadImage("Photos/backNight.JPG");
  painting = loadImage("Photos/prophet'sPaint.png");
  ruins = loadImage("Photos/Ruins1.PNG");
  fireSkill = loadImage("Photos/FireButton.PNG")
  Desert1 = loadImage("Photos/Desert1.PNG");
  Desert2 = loadImage("Photos/Desert2.PNG");
  Desert3 = loadImage("Photos/Desert3.PNG");
  DiamondForest1 = loadImage("Photos/DiamondForest.PNG");
  DreamForest1 = loadImage("Photos/DreamForest1.PNG");
  EclipseStanding = loadImage("Photos/EclipseStanding.PNG");
  Fruit1= loadImage("Photos/Fruit1.PNG");
  Graveyard = loadImage("Photos/Graveyard2.PNG");
  IvyStanding = loadImage("Photos/IvyStanding.PNG");
  Lampfruit = loadImage("Photos/Lampfruit.PNG");
  LavaCave1 = loadImage("Photos/LavaCave1.PNG");
  LavaCave2 = loadImage("Photos/LavaCave2.PNG");
  lushtree = loadImage("Photos/LushfruitTreeT1.PNG");
  oldSword= loadImage("Photos/oldSword.PNG");
  fossilTooth = loadImage("Photos/Tooth.PNG");
}

function setup() {
 createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,500,1000,30);
  player = new PC1(50,440,60,100);

  //fire = new ShootFire(200,400,50,50);

  skill1 = createButton("Fire");
  //skill1.position(800,450);
  skill1.mousePressed(()=>{
    flag = true;
   });


  skill2 = createButton("Frost");
  // skill2.position(850,450);

  skill3 = createButton("Cloak of deception");
  skill4 = createButton("Lunar Frenzy");
  skill5 = createButton("Hover");


  object1 = new Object1(450,30,40,45);

  zoneMode = 0
}

/*function keyPressed(){
  if(keyCode === 32 && player === new PC1){
    player = new PC2(player.x,player.y,20,50);
    console.log("Two");
 }

 if(keyCode === 32 && player === new PC2){
  player = new PC1(player.x,player.y,20,50);
}
}*/


function draw() {  
  background(Forest1);
  Engine.update(engine);
  
  ground.display();
  player.display();

  /*if(flag === true){
    fire.display();
  }*/

  if(keyIsDown(LEFT_ARROW)){
    Matter.Body.applyForce(player.body, {x:player.body.position.x, y: player.body.position.y}, {x:-3, y:0});
  }

  if(keyIsDown(RIGHT_ARROW)){
    Matter.Body.applyForce(player.body, {x:player.body.position.x, y: player.body.position.y}, {x:3, y:0});
  }

  if(keyIsDown(UP_ARROW)){
    Matter.Body.applyForce(player.body, {x:player.body.position.x, y: player.body.position.y}, {x:0, y:-4});
  }

  /*if(Matter.Detector.canCollide(player.body,object1.body)){
    text("A strange, yet beautiful, luminecent plant that lights the way in the darkness and illuminates the unknown, those who eat its fruit are said to be able to glow like the moon", 200,200);
    console.log("Hi")
  }*/

  /*
  if(player.x>=1000){
    player.x = 50;
    background(Desert1);
    console.log("Hi")
  }

  if(player.x>=1000 && background(Desert1)){
    background(Desert2)
  }

  if(player.x>= 1000 && background(Desert2)){
    background(Desert3);
  }

  if(player.x>= 1000 && background(Desert3)){
    background(ruins);
  }
  
  if(player.x>= 1000 && background(ruins)){
    background(Plains1);
  }

  if(player.x>= 1000 && background(Plains1)){
    background(Plains2);
  }
  
  if(player.x>= 1000 && background(ruins)){
    background(Plains3);
  }

  if(player.x>= 1000 && background(ruins)){
    background(Plains3);
  }

  if(player.x>= 1000 && background(ruins)){
    background(Plains3);
  }

  if(player.x>= 1000 && background(ruins)){
    background(Plains3);
  }
  
  */ 

  object1.display();
}


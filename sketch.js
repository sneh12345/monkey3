var Monkey,Monkey1, Monkey2, Monkey3,  
Monkey4,Monkey5,Monkey6,Monkey7,Monkey8,Monkey9,Monkey10
var MonkeyImage1
var Banana
var stone
var jungle
var score
var ground
var BananaGroup, stoneGroup
var rockhits = 0;
var score = 0;


function preload(){
MonkeyImage1= loadAnimation ("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png");

JungleImage = loadImage ("jungle.jpg");
  StoneImage = loadImage ("stone.png");
  bananaImage  = loadImage  ("banana.png");
  

}







function setup() {
  createCanvas(800, 480);
  
  Jungle = createSprite(200,200,200,200);
  Jungle.addAnimation("jungle",JungleImage);
  Jungle.scale = 1.25;

 
  
  Monkey = createSprite(58,349,10,10);
  Monkey.addAnimation("monkey", MonkeyImage1);
  Monkey.scale = 0.15;

  
  var ground = createSprite(35,379,4000,10)
  ground.visible = false 
 
 BananaGroup = new Group();
 stoneGroup = new Group();



}

function draw() {
  background(220);

 
if(keyDown("space") && Monkey.y >= 359){
      Monkey.velocityY = -17 ;
      
    }
  Monkey.velocityY = Monkey.velocityY+0.8;
  


  
     
    edges = createEdgeSprites();
    Monkey.collide(edges[0]);
    Monkey.collide(edges[2]);
    Monkey.collide(edges[3]);
    Monkey.collide(edges);  
     
if (Monkey.isTouching(BananaGroup)){
  BananaGroup.destroyEach();
  Monkey.scale = (0.2);
  score = score+1;
    
    
}


if(Monkey.isTouching(stoneGroup)){
  stoneGroup.destroyEach();
  Monkey.scale = (0.1)
  rockhits = rockhits+1;

}
  

  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  Stone();
  Banana(); 
  drawSprites();
  textSize(24);
  textFont("Comfortaa");
  text("Rockhits:"+rockhits, 47,44);
  
  text("Bananas eaten:"+score,46,69);
  
    
if(score === 15){
  fill("Blue")
  text("You Win!The monkey is now 100% safe in the wild!",200,200)
  
  
  stoneGroup.destroyEach(0);
   stoneGroup.setVelocityXEach(0);
   stoneGroup.setVelocityYEach(0);
   BananaGroup.setVelocityXEach(0);
   BananaGroup.setVelocityYEach(0);
   BananaGroup.destroyEach(0);




}


 if (rockhits === 15){
   fill("red");
   text("So,hate to break it to you, but you lost the game lol🙂",200,200)
   
   
   stoneGroup.destroyEach(0);
   stoneGroup.setVelocityXEach(0);
   stoneGroup.setVelocityYEach(0);
   BananaGroup.setVelocityXEach(0);
   BananaGroup.setVelocityYEach(0);
   BananaGroup.destroyEach(0);
   
   
   
   
   
 }  

}


function Banana (){
if(World.frameCount % 80 === 0){
   var Banana = createSprite(300,300,10,10);
  Banana.addAnimation("banana",bananaImage)
   Banana.velocityX = -9;
    Banana.scale = 0.1;
BananaGroup.add(Banana)
 
  }




}



function Stone (){
 if(World.frameCount % 60=== 0){
    var stone  = createSprite(420,430,20,20); 
   stone.addAnimation("stone",StoneImage)
    stone.scale = 0.3;
    stone.velocityX = -9;
    stoneGroup.add(stone);
  
}

}





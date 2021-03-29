const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;

var drop = [];
var boy;
var thunder;
var maxDrops = [];
var score  = 0;
var thund;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
}

function setup(){
   
    createCanvas(1200,750);

    myengine = Engine.create();
	  myworld = myengine.world;

    boy = new Umbrella(300,400);
    boy.scale = 0.005;

   

    /*for(var j = 40; j <=maxDrops; j++){
       drop.push(new Drop(Math.random((0,1200))), Math.random((0,750)));
       }*/
    
    Engine.run(myengine);
}

function draw(){

    background(0);

    boy.display();

    if(frameCount%60===0){
      maxDrops.push(new Drop(random(width/2-30, width/2+30), 10,10));
      score = score + 1;
    }
  
    for (var j = 0; j < maxDrops.length; j++) {
   
      maxDrops[j].display();
    }
    
    for (var j = 0; j < maxDrops.length; j++) {
   
      maxDrops[j].update();
    }

   if (frameCount % 60 === 0){

    thund = createSprite(600,200);
    thund.addImage("left",thunder1);
    thund.addImage("right",thunder2);

       var rand = Math.round(random(1,2));
       switch(rand) {
        case 1: thund.changeImage("left",thunder1);
                thund.scale = 0.5;
                 break;
        case 2: thund.changeImage("right",thunder2);
                thund.scale = 0.5;
                 break;
  
         default: break;
       }
      }     

  
    /*for(var j=0;j<maxDrops.length;j++){
       drop[j].display();
        drop[j].update();
      }*/

      drawSprites();
}   


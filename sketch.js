function setup(){
 
 createCanvas(600,600);
 
  blueBlock = createSprite(200,200,70,70)
  blueBlock.shapeColor = ("blue")
  

  redBlock = createSprite(400,100,50,50);
  redBlock.shapeColor = ("red")

}

function draw(){

 background("orange");
 
 blueBlock.x = mouseX
 blueBlock.y = mouseY

 if(blueBlock.x-redBlock.x<redBlock.width/2+blueBlock.width/2
  &&redBlock.x-blueBlock.x<redBlock.width/2+blueBlock.width/2
  &&blueBlock.y-redBlock.y<redBlock.height/2+blueBlock.height/2
  &&redBlock.y-blueBlock.y<redBlock.height/2+blueBlock.height/2
  ){
   redBlock.shapeColor = ("black")
   blueBlock.shapeColor = ("pink")
  } 

  else{
    blueBlock.shapeColor = ("blue")
    redBlock.shapeColor = ("red")
  }


 drawSprites();



}


















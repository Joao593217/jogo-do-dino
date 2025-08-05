//declaring the variables
var ground;
var dino;
var cacti=[];
var clouds=[];
var score=0;

function setup() {
  //creating the canvas
  createCanvas(600, 300);

  // creating a dino and a ground
  dino=new Dino();
  ground=new Ground();
  
  //increase score by 1 every 70 millisecends
  setInterval(increaseScore,70);
}

function draw() {
  //clearing the background
  background(220);
  //displaying the score
  text("SCORE:"+score,530,20);
 
   //creating the cacti
  for(var i=0; i<cacti.length; i++){
    //show the cacti
    cacti[i].show();
    //move the cacti
    cacti[i].move();
      // if dino hits the cacti    
     if(dino.hits(cacti[i])){
       //write game over
       text("GAME OVER!",200,150);
       //shut down the program
       noLoop();
     }
     
   }
  //creating the clouds
  for(var j=0;j<clouds.length;j++){
    //show the clouds
    clouds[j].show();
    //move the clouds
    clouds[j].move();
  }
  // show and move the dino
  dino.show();
  dino.move();
  //show,move and update the ground
  ground.show();
  ground.move();
  ground.update();
  
  //every 100 frames, spawn a new cactus
  if(frameCount%100===0){
    cacti.push(new Cactus());
  }
  //every 120 frames, spawn a new cloud
 if(frameCount%120===0){
   clouds.push(new Clouds());
 }
  
}
function keyPressed(){
  //if dino is on the ground and space key is pressed
  if(key===' '&&dino.y===230){
    //make the dino jump 
    dino.vy=-10;
  }
  
}
function increaseScore(){
 //increase score
  score++;
}

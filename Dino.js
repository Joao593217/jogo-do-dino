class Dino{
  constructor(){
  this.x=20;
  this.y=230;
  this.h=30;
  this.w=30;
  this.vy=0;
  this.gravity=0.5;  
  }
  hits(cacti){
    return collideRectRect(this.x,this.y,this.w,this.h,cacti.x,cacti.y,cacti.w,cacti.h);
  }
  move(){
    this.y+=this.vy;
    this.vy+=this.gravity;
    this.y=constrain(this.y,0,230);
  }
  show(){
   fill(0);
   rect(this.x,this.y,this.w,this.h); 
  }
  
  
  
}

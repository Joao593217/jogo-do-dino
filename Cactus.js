class Cactus{
  constructor(){
    this.x=width;
    this.y=240;
    this.h=20;
    this.w=20;
    this.vx=2;
  }
  
  move(){
    this.x-=this.vx;
  }
  show(){
  fill(0);
  rect(this.x,this.y,this.w,this.w);  
  }
}

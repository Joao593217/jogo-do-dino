class Clouds{
  constructor(){
    this.x=width;
    this.y=random(height);
    this.w=20;
    this.h=20;
    this.vx=2;
    
  }
  move(){
    this.x-=this.vx;
    this.y=constrain(this.y,20,80);
  }
  
  show(){
    fill("red");
    rect(this.x,this.y,this.w,this.h);
  }
  
  
  
  
}

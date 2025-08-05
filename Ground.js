class Ground{
  constructor(){
   this.x=0;
   this.y=260;
   this.width=1200;
   this.h=40; 
   this.vx=-2;
  }
  update(){
    if(this.x<-200){
      this.x=0;
      
    }
  }
  
  move(){
   this.x+=this.vx 
    
  }
  show(){
  fill(255);
  rect(this.x,this.y,this.width,this.h); 

  }
  
}

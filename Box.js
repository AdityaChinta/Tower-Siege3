class Box extends BaseClass{
    constructor(x, y, width, height){
      super(x,y,30,40)
      this.Visibility=255;
    }
    display(){
      if (this.body.speed<5) {
        super.display();
      } else {
        World.remove(world,this.body);
        push();
        this.Visibility=this.Visibility-3;
        pop();
      }
      //console.log(this.body.speed);
      
    }
    score(){
     if(this.Visibility<0&&this.Visibility>-500){
      score++
     } 
    }
    
  };
  
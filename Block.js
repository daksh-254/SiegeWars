class Block {
  constructor(x,y,width,height) {
    var options = {
         'density': 1.2,
         'friction': 1.0,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visibility = 255;
  }

   score(){
     if(this.Visibility < 0 && this.Visibility > -105){
        score = score + 20;
        console.log(score);
      } 
   }

  display(){
   if(this.body.speed < 4){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
   }else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      //rect(this.body, this.body.position.x, this.body.position.y, 50, 50);
      pop();
   }
  }
};

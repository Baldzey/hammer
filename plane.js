class Plane {
    constructor(x,y,width,height) {
      var options = {
        'friction': 1.0,  
        isStatic: true
          
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
      strokeWeight(4);
      stroke("white")
      fill("brown");

      rect(pos.x, pos.y, this.width, this.height);
    }
  };
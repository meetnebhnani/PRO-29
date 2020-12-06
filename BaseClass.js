class BaseClass
{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
            'friction':0.8,
            'density':1.0
        }
        this.boxObject = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       
        World.add(world, this.boxObject);
      }
      display(){
       
        push();
        strokeWeight(1.5);
        
        rectMode(CENTER);
        rect(this.boxObject.position.x,this.boxObject.position.y, this.width, this.height);
        pop();
      }
}
class mango {
    constructor(x, y, radius) {
      var options = {
          isStatic:true,
          'friction':1,
          'restitution':0,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("sprites/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;    
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius)

    }
  };
  
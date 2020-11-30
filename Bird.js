class Bird {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.x = x;
  this.y = y
  this.body = Bodies.rectangle(this.x, this.y, 50, 50, options);
  this.width = 50;
  this.height = 50;

  this.image1 = loadImage("sprites/red.png");
  this.image2 = loadImage("sprites/bomb.png");  
  this.image3 = loadImage("sprites/chuck.png");    
 // this.Image2 = Image2;
  World.add(world, this.body);
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    if(count === 0){
      image(this.image1, 0, 0, this.width, this.height);
    }
    else if(count === 1 ){
      image(this.image2, 0, 0, this.width, this.height);
    }
      else if(count === 2){
        image(this.image3, 0, 0, this.width, this.height);
        
      }
      else{
        count = 0;
      }

    pop();

    if(this.body.velocity.x > 10 && this.body.position.x > 540){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
      //this.image = loadImage(this.Image2);
    }
   for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
  position(x, y){
    this.x = x;
    this.y = y;
  }

}

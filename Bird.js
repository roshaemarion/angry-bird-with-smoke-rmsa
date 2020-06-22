class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.Smokeimage = loadImage("sprites/smoke.png");
    this.smokePath = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if (this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
      this.smokePath.push(position)
  
    }
   
    for (var i = 0;i<this.smokePath.length;i++){
      image(this.Smokeimage,this.smokePath[i][0],this.smokePath[i][1],20,20)
    }
  }
}

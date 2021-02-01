class BlueBlock{
  constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.8,
          friction:0.01,
          density:0.5
      }
      this.x = x;
      this.y = y;
      this.width = 30;
      this.height = 40;
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display(){
      push();
      stroke("blue");
      fill("blue");
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
  }
}
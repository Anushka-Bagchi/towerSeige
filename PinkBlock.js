class PinkBlock{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:0.4,
            density:0.01
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        push();
        stroke("pink");
        fill("pink");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}
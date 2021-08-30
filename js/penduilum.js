class Penduluim {
   constructor(x, y, r) {
      var options = {
         'restitution': 1,
         'friction': 0,
         'density': 10,
         'isStatic': true
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.r = r;
      this.image = loadImage("images/pendulum.png");
      World.add(world, this.body);
   }
   display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();
   }
}
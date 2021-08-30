class PenduluimRope {
   constructor(bodyA, pointB) {
      var options = {
         bodyA: bodyA,
         pointB: pointB,
         stiffness: 1,
         length: 265
      }
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
   }
   attach(body) {
      this.rope.bodyA = body;
   }
   display() {
      if (this.rope.bodyA) {
         var pointA = this.rope.bodyA.position;
         var pointB = this.pointB;
         push();
         stroke("#883E19");
         strokeWeight(1);
         line(pointB.x, pointB.y, pointA.x, pointA.y-20);
         pop();
      }
   }
}
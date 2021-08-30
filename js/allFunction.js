function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.applyForce(bob.body, bob.body.position, { x: 2, y: 1 })
  }
}

function repeat() {
  if (domino39.body.position.x > 1590) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -0.5, y: 1 })
  }
}

function allDisplay() {
  platform.display();
  platform1.display();
  platform2.display();

  wall.display();
  wall2.display();
  wall3.display();

  buttonpad1.display();
  buttonpad2.display();
  buttonBox.display();
  button.display();

  domino1.display();
  domino2.display();
  domino3.display();
  domino4.display();
  domino5.display();
  domino6.display();
  domino6.display();
  domino7.display();
  domino8.display();
  domino9.display();
  domino10.display();
  domino11.display();
  domino12.display();
  domino13.display();
  domino14.display();
  domino15.display();
  domino16.display();
  domino17.display();
  domino18.display();
  domino19.display();
  domino20.display();
  domino21.display();
  domino22.display();
  domino23.display();
  domino24.display();
  domino25.display();
  domino26.display();
  domino27.display();
  domino28.display();
  domino29.display();
  domino30.display();
  domino31.display();
  domino32.display();
  domino33.display();
  domino34.display();
  domino35.display();
  domino36.display();
  domino36.display();
  domino37.display();
  domino38.display();
  domino39.display();
  Adomino1.display();
  Adomino2.display();
  Adomino3.display();
  Adomino4.display();
  Adomino5.display();
  Adomino6.display();
  Adomino6.display();
  Adomino7.display();
  Adomino8.display();
  Adomino9.display();
  Adomino10.display();
  Adomino11.display();
  Adomino12.display();
  Adomino13.display();
  Adomino14.display();
  Adomino15.display();
  Adomino16.display();
  Adomino17.display();
  Adomino18.display();
  Adomino19.display();
  Adomino20.display();
  Adomino21.display();
  Adomino22.display();
  Adomino23.display();
  Adomino24.display();
  Adomino25.display();
  Adomino26.display();
  Adomino27.display();
  Adomino28.display();
  Adomino29.display();
  Adomino30.display();
  Adomino31.display();
  Adomino32.display();
  Adomino33.display();
  Adomino34.display();
  Adomino35.display();
  Adomino36.display();
  Adomino36.display();
  Adomino37.display();
  Adomino38.display();
  Adomino39.display();

  Bdomino1.display();
  Bdomino2.display();
  Bdomino3.display();
  Bdomino4.display();
  Bdomino5.display();
  Bdomino6.display();
  Bdomino6.display();
  Bdomino7.display();
  Bdomino8.display();
  Bdomino9.display();

  bob.display();
  bob1.display();
  rope.display();
  rope1.display();

  penduilum1.display();
  penduilum1rope.display();
  penduilum2.display();
  penduilum2rope.display();
  penduilum3.display();
  penduilum3rope.display();
  penduilum4.display();
  penduilum4rope.display();
  penduilum5.display();
  penduilum5rope.display();
  penduilum6.display();
  penduilum6rope.display();
  penduilum7.display();
  penduilum7rope.display();
  penduilum8.display();
  penduilum8rope.display();
  penduilum9.display();
  penduilum9rope.display();
  penduilum10.display();
  penduilum10rope.display();
}
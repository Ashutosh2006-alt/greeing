const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform;
var platform1;
var platform2;

var domino1;
var domino2;
var domino3;
var domino4;
var domino5;
var domino6;
var domino7;
var domino8;
var domino9;
var domino10;
var domino11;
var domino12;
var domino13;
var domino14;
var domino15;
var domino16;
var domino17;
var domino18;
var domino19;
var domino20;
var domino21;
var domino22;
var domino23;
var domino24;
var domino25;
var domino26;
var domino27;
var domino28;
var domino29;
var domino30;
var domino31;
var domino32;
var domino33;
var domino34;
var domino35;
var domino36;
var domino37;
var domino38;
var domino39;

var Adomino1;
var Adomino2;
var Adomino3;
var Adomino4;
var Adomino5;
var Adomino6;
var Adomino7;
var Adomino8;
var Adomino9;
var Adomino10;
var Adomino11;
var Adomino12;
var Adomino13;
var Adomino14;
var Adomino15;
var Adomino16;
var Adomino17;
var Adomino18;
var Adomino19;
var Adomino20;
var Adomino21;
var Adomino22;
var Adomino23;
var Adomino24;
var Adomino25;
var Adomino26;
var Adomino27;
var Adomino28;
var Adomino29;
var Adomino30;
var Adomino31;
var Adomino32;
var Adomino33;
var Adomino34;
var Adomino35;
var Adomino36;
var Adomino37;
var Adomino38;
var Adomino39;

var Bdomino1;
var Bdomino2;
var Bdomino3;
var Bdomino4;
var Bdomino5;
var Bdomino6;
var Bdomino7;
var Bdomino8;
var Bdomino9;
var Bdomino10;
var Bdomino11;
var Bdomino12;
var Bdomino13;
var Bdomino14;
var Bdomino15;

var bob;
var bob1;

var rope;
var rope2;

var wall;
var wall2;
var wall3;

var buttonpad1;
var buttonpad2;
var buttonBox;
var button;

var penduilum1;
var penduilum2;
var penduilum3;
var penduilum4;
var penduilum5;
var penduilum6;
var penduilum7;
var penduilum8;
var penduilum9;
var penduilum10;

var penduilum1rope;
var penduilum2rope;
var penduilum3rope;
var penduilum4rope;
var penduilum5rope;
var penduilum6rope;
var penduilum7rope;
var penduilum8rope;
var penduilum9rope;
var penduilum10rope;

function preload() {
  vines = loadImage("images/vines.png");
  grass = loadImage("images/grass.png");
  sky = loadImage("images/sky.jpg");
  cloudimg = loadImage("images/cloud.png");
  grass1 = loadImage("images/grass1.png");
  displayImg = loadImage("images/display.png");
  treeImg = loadImage("images/tree.png");
  caseImg = loadImage("images/case.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(width / 2, height, width, 20);
  platform1 = new Ground(width / 2, height / 2 + 200, width, 20);
  platform2 = new Ground(width / 2, height / 2 - 100, width, 10);

  wall = new Ground(0, 450, 1, 100);
  wall2 = new Ground(width, 650, 1, 100);
  wall3 = new Ground(width / 2, 0, width, 30);

  buttonpad1 = new Ground(width - 550, 200, 100, 20);
  buttonpad2 = new Ground(width - 550, 100, 100, 20);
  buttonBox = new Ground(width - 300, 200, 400, 220);
  button = new Button(width - 580, 150, 100, 78);

  penduilum1 = new Penduluim(-280, 200, 50);
  penduilum1rope = new PenduluimRope(penduilum1.body, { x: 0, y: 0 });

  penduilum2 = new Penduluim(50, 265, 50);
  penduilum2rope = new PenduluimRope(penduilum2.body, { x: 50, y: 0 });

  penduilum3 = new Penduluim(100, 265, 50);
  penduilum3rope = new PenduluimRope(penduilum3.body, { x: 100, y: 0 });

  penduilum4 = new Penduluim(150, 265, 50);
  penduilum4rope = new PenduluimRope(penduilum4.body, { x: 150, y: 0 });

  penduilum5 = new Penduluim(200, 265, 50);
  penduilum5rope = new PenduluimRope(penduilum5.body, { x: 200, y: 0 });

  penduilum6 = new Penduluim(250, 265, 50);
  penduilum6rope = new PenduluimRope(penduilum6.body, { x: 250, y: 0 });

  penduilum7 = new Penduluim(300, 265, 50);
  penduilum7rope = new PenduluimRope(penduilum7.body, { x: 300, y: 0 });

  penduilum8 = new Penduluim(350, 265, 50);
  penduilum8rope = new PenduluimRope(penduilum8.body, { x: 350, y: 0 });

  penduilum9 = new Penduluim(400, 265, 50);
  penduilum9rope = new PenduluimRope(penduilum9.body, { x: 400, y: 0 });

  penduilum10 = new Penduluim(450, 265, 50);
  penduilum10rope = new PenduluimRope(penduilum10.body, { x: 450, y: 0 });

  domino1 = new Domino(50, height - 100, 15, 150);
  domino2 = new Domino(100, height - 100, 15, 150);
  domino3 = new Domino(140, height - 100, 15, 150);
  domino4 = new Domino(180, height - 100, 15, 150);
  domino5 = new Domino(220, height - 100, 15, 150);
  domino6 = new Domino(260, height - 100, 15, 150);
  domino7 = new Domino(300, height - 100, 15, 150);
  domino8 = new Domino(340, height - 100, 15, 150);
  domino9 = new Domino(380, height - 100, 15, 150);
  domino10 = new Domino(420, height - 100, 15, 150);
  domino11 = new Domino(460, height - 100, 15, 150);
  domino12 = new Domino(500, height - 100, 15, 150);
  domino13 = new Domino(540, height - 100, 15, 150);
  domino14 = new Domino(580, height - 100, 15, 150);
  domino15 = new Domino(620, height - 100, 15, 150);
  domino16 = new Domino(660, height - 100, 15, 150);
  domino17 = new Domino(700, height - 100, 15, 150);
  domino18 = new Domino(740, height - 100, 15, 150);
  domino19 = new Domino(780, height - 100, 15, 150);
  domino20 = new Domino(820, height - 100, 15, 150);
  domino21 = new Domino(860, height - 100, 15, 150);
  domino22 = new Domino(900, height - 100, 15, 150);
  domino23 = new Domino(940, height - 100, 15, 150);
  domino24 = new Domino(980, height - 100, 15, 150);
  domino25 = new Domino(1020, height - 100, 15, 150);
  domino26 = new Domino(1060, height - 100, 15, 150);
  domino27 = new Domino(1100, height - 100, 15, 150);
  domino28 = new Domino(1140, height - 100, 15, 150);
  domino29 = new Domino(1180, height - 100, 15, 150);
  domino30 = new Domino(1220, height - 100, 15, 150);
  domino31 = new Domino(1260, height - 100, 15, 150);
  domino32 = new Domino(1300, height - 100, 15, 150);
  domino33 = new Domino(1340, height - 100, 15, 150);
  domino34 = new Domino(1380, height - 100, 15, 150);
  domino35 = new Domino(1420, height - 100, 15, 150);
  domino36 = new Domino(1460, height - 100, 15, 150);
  domino37 = new Domino(1500, height - 100, 15, 150);
  domino38 = new Domino(1540, height - 100, 15, 150);
  domino39 = new Domino(1580, height - 100, 15, 150);

  Adomino1 = new Domino(60, height - 300, 15, 150);
  Adomino2 = new Domino(100, height - 300, 15, 150);
  Adomino3 = new Domino(140, height - 300, 15, 150);
  Adomino4 = new Domino(180, height - 300, 15, 150);
  Adomino5 = new Domino(220, height - 300, 15, 150);
  Adomino6 = new Domino(260, height - 300, 15, 150);
  Adomino7 = new Domino(300, height - 300, 15, 150);
  Adomino8 = new Domino(340, height - 300, 15, 150);
  Adomino9 = new Domino(380, height - 300, 15, 150);
  Adomino10 = new Domino(420, height - 300, 15, 150);
  Adomino11 = new Domino(460, height - 300, 15, 150);
  Adomino12 = new Domino(500, height - 300, 15, 150);
  Adomino13 = new Domino(540, height - 300, 15, 150);
  Adomino14 = new Domino(580, height - 300, 15, 150);
  Adomino15 = new Domino(620, height - 300, 15, 150);
  Adomino16 = new Domino(660, height - 300, 15, 150);
  Adomino17 = new Domino(700, height - 300, 15, 150);
  Adomino18 = new Domino(740, height - 300, 15, 150);
  Adomino19 = new Domino(780, height - 300, 15, 150);
  Adomino20 = new Domino(820, height - 300, 15, 150);
  Adomino21 = new Domino(860, height - 300, 15, 150);
  Adomino22 = new Domino(900, height - 300, 15, 150);
  Adomino23 = new Domino(940, height - 300, 15, 150);
  Adomino24 = new Domino(980, height - 300, 15, 150);
  Adomino25 = new Domino(1020, height - 300, 15, 150);
  Adomino26 = new Domino(1060, height - 300, 15, 150);
  Adomino27 = new Domino(1100, height - 300, 15, 150);
  Adomino28 = new Domino(1140, height - 300, 15, 150);
  Adomino29 = new Domino(1180, height - 300, 15, 150);
  Adomino30 = new Domino(1220, height - 300, 15, 150);
  Adomino31 = new Domino(1260, height - 300, 15, 150);
  Adomino32 = new Domino(1300, height - 300, 15, 150);
  Adomino33 = new Domino(1340, height - 300, 15, 150);
  Adomino34 = new Domino(1380, height - 300, 15, 150);
  Adomino35 = new Domino(1420, height - 300, 15, 150);
  Adomino36 = new Domino(1460, height - 300, 15, 150);
  Adomino37 = new Domino(1500, height - 300, 15, 150);
  Adomino38 = new Domino(1540, height - 300, 15, 150);
  Adomino39 = new Domino(1580, height - 300, 15, 150);

  Bdomino1 = new Domino(650, 100, 15, 150);
  Bdomino2 = new Domino(690, 100, 15, 150);
  Bdomino3 = new Domino(730, 100, 15, 150);
  Bdomino4 = new Domino(770, 100, 15, 150);
  Bdomino5 = new Domino(810, 100, 15, 150);
  Bdomino6 = new Domino(850, 100, 15, 150);
  Bdomino7 = new Domino(890, 100, 15, 150);
  Bdomino8 = new Domino(930, 100, 15, 150);
  Bdomino9 = new Domino(970, 100, 15, 150);

  bob = new Bob(0, height / 2, 20);
  bob1 = new Bob(1640, 450, 20);

  rope = new Rope(bob.body, { x: 0, y: 600 });
  rope1 = new Rope(bob1.body, { x: width + 10, y: 400 });

}

function draw() {
  background("#8FB9E0");
  imageMode(CENTER);
  image(sky, width / 2, height / 2, width, height);
  image(cloudimg, width / 2, height / 2, width, height);
  image(grass1, width / 2, height - 100, width, 270);

  Engine.update(engine);
  if (Adomino1.body.position.x < 60) {
    Matter.Body.setStatic(penduilum1.body, false);
    Matter.Body.setStatic(penduilum2.body, false);
    Matter.Body.setStatic(penduilum3.body, false);
    Matter.Body.setStatic(penduilum4.body, false);
    Matter.Body.setStatic(penduilum5.body, false);
    Matter.Body.setStatic(penduilum6.body, false);
    Matter.Body.setStatic(penduilum7.body, false);
    Matter.Body.setStatic(penduilum8.body, false);
    Matter.Body.setStatic(penduilum9.body, false);
    Matter.Body.setStatic(penduilum10.body, false);
    Matter.Body.applyForce(penduilum1.body, penduilum1.body.position, { x: 0, y: 25 });
  }
  allDisplay();
  repeat();
  imageMode(CENTER);
  image(caseImg, width - 340, 203, 500, 220)
  image(displayImg, width - 300, 195, 400, 190);
  image(vines, width / 2, 100, width, 200);
  image(grass, width / 2, height - 10, width, 30);
  image(grass, width / 2, height / 2 + 179, width, 25);

  image(treeImg, width / 2, height / 2 + 70, 500, 350);
  image(treeImg, width - 340, height / 2 + 70, 500, 350);

  if (button.body.position.x > width - 580) {
    textSize(35);
    fill(255);
    stroke(0, 0, 0);
    text("happy janmastami", width - 450, 200)
  }
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
var options = {
  isStatic:true
}
  //criar corpo da base do jogador
baseJogador = Bodies.rectangle(200,350,180,150,options);
World.add(world,baseJogador);

  //criar corpo do jogador
jogador = Bodies.rectangle(250,baseJogador.position.y-160,50,180,options);
World.add(world,jogador);


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
image(playerimage,jogador.position.x,jogador.position.y,50,180);


  //exibir a imagem da base do jogador usando a função image()
image(baseimage,baseJogador.position.x,baseJogador.position.y,180,150)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}

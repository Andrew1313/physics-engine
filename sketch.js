const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
var engine,world
var ground
var ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
var options={
isStatic:true
}
  ground=Bodies.rectangle(0,390,800,10,options)
  World.add(world,ground)
var balloptions={
  restitution:0.8
  
}
  ball=Bodies.circle(200,200,30,balloptions)
  World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30) 
  drawSprites();
}
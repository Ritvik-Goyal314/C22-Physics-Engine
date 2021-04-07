const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball,box;


function setup() {
  createCanvas(400,400);
 
engine=Engine.create();
world=engine.world

var groundOptions={

  isStatic:true

}


  ground=Bodies.rectangle(200,380,width,50,groundOptions)
  World.add(world,ground)

  var ballOptions={

    isStatic:false,
    restitution:1
  }

  ball=Bodies.circle(200,50,25,ballOptions)
  World.add(world,ball)

  var boxOptions={

    isStatic:false,
    restitution:2
  }

  box=Bodies.rectangle(250,50,50,40,boxOptions)
  World.add(world,box)


}

function draw() {
  background(0); 
  
  Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,50)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25)

  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)
 

}
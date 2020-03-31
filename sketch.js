const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var ball;
var canonBall;
var tanker;
var shooterBall;


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    ball = new Ball(1000,390,50,100);

    tanker = new Tanker(250,350,250,79);

    canonBall = new CanonBall(400,200,50,50);

    shooterBall = new ShootBall(250,300,PI/2);
}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    ball.display();
    tanker.display();
    canonBall.display();
    shooterBall.display();
}



function keyReleased(){

}

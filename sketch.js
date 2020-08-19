var car,wall,speed,weight;
var deformation = 0;
var thickness;
function setup() {
  createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
car=createSprite(50,200,50,20);
wall=createSprite(1200,200,thickness,height/2);
thickness=random(22,83)
  
  
  car.velocityX=speed;
  car.shapeColor=color("yellow");
  car.depth=wall.depth;
  car.depth=car.depth+1;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if (wall.x-car.x< (wall.width/2+car.width/2)){
    deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
  car.velocityX=0;
 
  
  if (deformation >10){
    car.shapeColor=color("green");
   } 
   if (deformation <10){
    car.shapeColor=color("red");
  }
 
}


}
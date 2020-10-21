  // Assinging global variables
var wall, thickness;
var bullet, speed, weight;



function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(225);

  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "80,80,80"

  // Setting random values to speed & weight
  speed = random(223,321)
  weight = random (30,52)


}

function draw() {
  background(255,255,255); 

  function hasCollided(bullet, wall)
  {
    bulletRightEdge= bullet.x + bullet.width;
    wallLeftEdge= wall.x;
    
    if(bulletRightEdge>=wallLeftEdge)
    {
        return true

    }
        return false;

  }
  
  // Assigning a color to the car when it collides.
if(hasCollided(bullet, wall)) 
{
   bullet.velocityX = 0;

   var damage = 0.5 * weight * speed * speed/(thickness
     *thickness *thickness);


   if(damage>10)
   {
    wall.shapeColor = color(255,0,0);
   }


   if (damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }

  bullet.velocityX = 0;





  drawSprites();
}

}
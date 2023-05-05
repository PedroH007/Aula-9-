var casa

function setup() {
  createCanvas(800,800);
  casa = createSprite(400,400,20,20)
}

function draw() 
{
  background(30);


  drawSprites();
if (keyIsDown(RIGHT_ARROW)){
casa.position.x += 40
}
if (keyIsDown(LEFT_ARROW)){
  casa.position.x -= 40

}
}





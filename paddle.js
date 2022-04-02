class Paddle{
constructor(w,h,pos){
  this.width = w;
  this.height = h;
  this.pos = createVector(width / 2, 450);
  this.image = loadImage ("images/paddle 2.png");
  this.direction = createVector(1,0)


  this.display = function() {
    rectMode (CENTER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    imageMode (CENTER);
    image(this.image, this.pos.x, this.pos.y, 190, 50);
  }

  this.move = function() {
    /*if(mouseX <= 75){
      this.pos.x = mouseX + 80;
      } 

    else if (mouseX >= 1115){
      this.pos.x = mouseX - 80;
      } 
      else{*/
        this.pos.x = mouseX;
      
  }

}
}
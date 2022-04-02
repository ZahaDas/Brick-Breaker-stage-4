class Border{
    constructor(x,y,w,h){
      this.width = w;
      this.height = h;
      this.x = x;
      this.y = y;
  

      this.display = function() {
        rectMode (CORNER);
        rect(this.x, this.y, this.width, this.height);
      }
    }
    }
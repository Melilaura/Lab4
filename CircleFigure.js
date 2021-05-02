class CircleFigure {
   
  CircleFigure (posX, posY, tam,dir) {
     
    this.posX=posX;
    this.posY=posY;
    this.tam=tam;
    this.dir=dir;
  }


  draw (){

    circle(posX,posY,tam, dir);

  }


}
  
class CircleFigure {
   
  CircleFigure (posX, posY, tam,dir) {
   
    Figure.call(this, posX,posY,tam,dir);
  }


  draw (){

    circle(posX,posY,tam);

  }


}
  
class RectFigure {
   
  RectFigure (posX, posY, tam,dir) {
   
    Figure.call(this, posX,posY,tam,dir);
  }


  draw (){

    rect(posX,posY,tam);

  }


}

 

 
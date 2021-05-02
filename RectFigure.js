class RectFigure {
   
  constructor (posX, posY, tam,dir, value) {
   
    this.posX=posX;
    this.posY=posY;
    this.tam=tam;
    this.dir=dir;
    this.value=value;

  }

  draw (){
    fill(255);
    rect(this.posX,this.posY, this.tam, this.tam);
    fill(0);
    text(Math.floor(this.value), this.posX+(this.tam/2),this.posY+(this.tam/2));
  }

 move() {
   
  this.posX+=this.dir;
}

cicle(){
  if(this.posX>500){
    this.posX=0;
  }
  if(this.posX<0){
    this.posX=500;
  }
}
changeSize (){
  this.tam++;
}


}

 

 